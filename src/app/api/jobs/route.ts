import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// JSONBin.io configuration
// Get free API key from https://jsonbin.io/
// Add to .env.local: NEXT_PUBLIC_JSONBIN_API_KEY=your_api_key
// Add to .env.local: NEXT_PUBLIC_JSONBIN_BIN_ID=your_bin_id (optional, will be created automatically)
const JSONBIN_API_KEY = process.env.NEXT_PUBLIC_JSONBIN_API_KEY || "";
let JSONBIN_BIN_ID = process.env.NEXT_PUBLIC_JSONBIN_BIN_ID || "";
const JSONBIN_URL = "https://api.jsonbin.io/v3/b";

// File to store bin ID persistently
const BIN_ID_FILE = path.join(process.cwd(), ".jsonbin-id");

// Load bin ID from file if exists
if (!JSONBIN_BIN_ID && fs.existsSync(BIN_ID_FILE)) {
  try {
    JSONBIN_BIN_ID = fs.readFileSync(BIN_ID_FILE, "utf-8").trim();
  } catch (err) {
    console.error("Failed to read bin ID file:", err);
  }
}

// Save bin ID to file
function saveBinId(binId: string) {
  try {
    fs.writeFileSync(BIN_ID_FILE, binId, "utf-8");
    JSONBIN_BIN_ID = binId;
  } catch (err) {
    console.error("Failed to save bin ID:", err);
  }
}

// GET - Read jobs from JSONBin.io
export async function GET() {
  try {
    // If no API key, return empty (fallback to localStorage)
    if (!JSONBIN_API_KEY) {
      return NextResponse.json({ 
        success: false, 
        error: "JSONBin API key not configured",
        useLocalStorage: true 
      });
    }

    // If no bin ID, try to find or create one
    if (!JSONBIN_BIN_ID) {
      // For now, return empty and let POST create the bin
      return NextResponse.json({ success: true, data: [] });
    }

    const url = `${JSONBIN_URL}/${JSONBIN_BIN_ID}/latest`;
    
    const response = await fetch(url, {
      headers: {
        "X-Master-Key": JSONBIN_API_KEY,
        "X-Bin-Meta": "false",
      },
    });

    if (!response.ok) {
      // If bin doesn't exist, return empty array
      if (response.status === 404) {
        return NextResponse.json({ success: true, data: [] });
      }
      throw new Error(`JSONBin API error: ${response.statusText}`);
    }

    const data = await response.json();
    const jobs = Array.isArray(data) ? data : (data.jobs || []);
    
    return NextResponse.json({ success: true, data: jobs });
  } catch (error: any) {
    console.error("Error reading jobs from JSONBin:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Failed to read jobs",
        useLocalStorage: true 
      },
      { status: 500 }
    );
  }
}

// POST - Save jobs to JSONBin.io
export async function POST(request: NextRequest) {
  try {
    if (!JSONBIN_API_KEY) {
      return NextResponse.json(
        { 
          success: false, 
          error: "JSONBin API key not configured",
          useLocalStorage: true 
        },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { jobs } = body;

    if (!Array.isArray(jobs)) {
      return NextResponse.json(
        { success: false, error: "Invalid data format" },
        { status: 400 }
      );
    }

    const binId = JSONBIN_BIN_ID;
    let url: string;
    let method: string;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "X-Master-Key": JSONBIN_API_KEY,
    };
    
    if (binId) {
      // Update existing bin
      url = `${JSONBIN_URL}/${binId}`;
      method = "PUT";
    } else {
      // Create new bin
      url = `${JSONBIN_URL}`;
      method = "POST";
      headers["X-Bin-Name"] = "job-listings";
      headers["X-Bin-Private"] = "true";
    }
    
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(jobs),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`JSONBin API error: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    const createdBinId = result.metadata?.id || binId;
    
    // Save bin ID if it was just created
    if (!binId && createdBinId) {
      saveBinId(createdBinId);
      console.log("New bin created and saved:", createdBinId);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: "Jobs saved successfully",
      binId: createdBinId 
    });
  } catch (error: any) {
    console.error("Error saving jobs to JSONBin:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Failed to save jobs",
        useLocalStorage: true 
      },
      { status: 500 }
    );
  }
}

