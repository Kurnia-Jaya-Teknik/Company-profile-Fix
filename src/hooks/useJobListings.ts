"use client";
import { useState, useEffect } from "react";
import { JobListing } from "@/components/Recruitment/JobListings";

const STORAGE_KEY = "job_listings";
export const DEFAULT_JOBS: JobListing[] = [
  {
    id: "1",
    title: "Teknisi Elektrikal",
    postedDate: "2 month(s) ago",
    location: "CV. Kurnia Jaya Teknik - Pasuruan",
    company: "CV. Kurnia Jaya Teknik",
    mainTask: "Melakukan instalasi dan maintenance sistem elektrikal, panel distribusi power, dan sistem kontrol motor listrik.",
    fullTask: "Melakukan instalasi dan maintenance sistem elektrikal, panel distribusi power, dan sistem kontrol motor listrik. Memahami diagram elektrikal, melakukan troubleshooting, dan memastikan keselamatan kerja sesuai standar.",
    mainTasks: [
      "Melakukan instalasi dan maintenance sistem elektrikal, panel distribusi power, dan sistem kontrol motor listrik.",
      "Memahami dan membaca diagram elektrikal untuk troubleshooting dan perbaikan.",
      "Melakukan perawatan preventif dan corrective pada peralatan elektrikal.",
      "Memastikan keselamatan kerja sesuai standar K3 (Keselamatan dan Kesehatan Kerja).",
      "Melakukan pengujian dan commissioning sistem elektrikal baru.",
      "Berkolaborasi dengan tim untuk memastikan proyek selesai tepat waktu dan sesuai standar.",
    ],
    qualifications: [
      "Diploma (D3) / Sarjana (S1) Teknik Elektro, Teknik Elektronika, atau bidang terkait.",
      "Penguasaan dalam instalasi dan maintenance sistem elektrikal industri.",
      "Pengalaman dalam membaca dan memahami diagram elektrikal.",
      "Memahami standar keselamatan kerja (K3) di bidang elektrikal.",
      "Kontrak berbasis Vendor",
      "Penempatan di Pasuruan, Jawa Timur",
    ],
    experienceLevel: "Experienced",
    qualificationLevel: "D3/S1",
    yearsOfExperience: "2 Years",
    fieldOfWork: "Electrical Engineering",
    tags: ["Electrical Engineering", "Full Time"],
    type: "Full Time",
  },
  {
    id: "2",
    title: "Teknisi Mekanikal",
    postedDate: "1 month(s) ago",
    location: "CV. Kurnia Jaya Teknik - Pasuruan",
    company: "CV. Kurnia Jaya Teknik",
    mainTask: "Melakukan instalasi dan maintenance sistem mekanikal, cable tray, custom bentuk alat, dan jasa pengelasan.",
    fullTask: "Melakukan instalasi dan maintenance sistem mekanikal, cable tray, custom bentuk alat, dan jasa pengelasan. Memahami teknik pengelasan, pembuatan struktur mekanik, dan pemeliharaan peralatan mekanikal.",
    mainTasks: [
      "Melakukan instalasi dan maintenance sistem mekanikal, cable tray, dan custom bentuk alat.",
      "Melakukan jasa pengelasan sesuai standar dan spesifikasi proyek.",
      "Membuat dan merakit struktur mekanik sesuai gambar teknik.",
      "Melakukan perawatan preventif dan corrective pada peralatan mekanikal.",
      "Memastikan kualitas hasil pekerjaan sesuai standar yang ditetapkan.",
      "Berkolaborasi dengan tim untuk menyelesaikan proyek tepat waktu.",
    ],
    qualifications: [
      "Diploma (D3) / Sarjana (S1) Teknik Mesin, Teknik Industri, atau bidang terkait.",
      "Penguasaan dalam instalasi dan maintenance sistem mekanikal industri.",
      "Kemampuan dalam teknik pengelasan (SMAW, GTAW, atau GMAW).",
      "Pengalaman dalam membaca dan memahami gambar teknik.",
      "Kontrak berbasis Vendor",
      "Penempatan di Pasuruan, Jawa Timur",
    ],
    experienceLevel: "Experienced",
    qualificationLevel: "D3/S1",
    yearsOfExperience: "2 Years",
    fieldOfWork: "Mechanical Engineering",
    tags: ["Mechanical Engineering", "Full Time"],
    type: "Full Time",
  },
  {
    id: "3",
    title: "Programmer PLC",
    postedDate: "3 month(s) ago",
    location: "CV. Kurnia Jaya Teknik - Pasuruan",
    company: "CV. Kurnia Jaya Teknik",
    mainTask: "Mengembangkan sistem otomasi berbasis PLC, pemrograman sistem PLC, HMI dan SCADA, instalasi sistem otomasi.",
    fullTask: "Mengembangkan sistem otomasi berbasis PLC, pemrograman sistem PLC, HMI dan SCADA, instalasi sistem otomasi. Menguasai Allen-Bradley PLC, Controllogix, dan sistem SCADA untuk monitoring dan kontrol industri.",
    mainTasks: [
      "Mengembangkan sistem otomasi berbasis PLC untuk aplikasi industri.",
      "Melakukan pemrograman sistem PLC, HMI, dan SCADA.",
      "Melakukan instalasi dan commissioning sistem otomasi.",
      "Melakukan troubleshooting dan maintenance sistem otomasi yang sudah terpasang.",
      "Mendesain dan membangun environment pengembangan sistem otomasi.",
      "Berkolaborasi dengan tim untuk memastikan proyek selesai tepat waktu dan sesuai spesifikasi.",
    ],
    qualifications: [
      "Diploma (D3) / Sarjana (S1) Teknik Elektro, Teknik Informatika, atau bidang terkait.",
      "Penguasaan dalam pemrograman PLC (Allen-Bradley, Siemens, atau sejenisnya).",
      "Pengalaman dalam pengembangan sistem HMI dan SCADA.",
      "Memahami konsep sistem otomasi industri dan kontrol proses.",
      "Kontrak berbasis Vendor",
      "Penempatan di Pasuruan, Jawa Timur",
    ],
    experienceLevel: "Experienced",
    qualificationLevel: "D3/S1",
    yearsOfExperience: "2 Years",
    fieldOfWork: "Automation System",
    tags: ["Automation System", "Full Time"],
    type: "Full Time",
  },
];

export const useJobListings = () => {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    // Only access localStorage on client-side
    if (typeof window !== "undefined") {
      // Load from localStorage or use default
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsedJobs = JSON.parse(stored);
          setJobs(parsedJobs);
        } catch (error) {
          console.error("Error parsing stored jobs:", error);
          setJobs(DEFAULT_JOBS);
        }
      } else {
        setJobs(DEFAULT_JOBS);
      }
    } else {
      setJobs(DEFAULT_JOBS);
    }
    setIsLoading(false);
  }, []);

  // Listen for storage changes (for multi-tab sync)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const parsedJobs = JSON.parse(e.newValue);
          setJobs(parsedJobs);
        } catch (error) {
          console.error("Error parsing stored jobs from storage event:", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const saveJobs = (newJobs: JobListing[]) => {
    // Update state first
    setJobs(newJobs);
    
    // Then save to localStorage
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newJobs));
        // Trigger custom event for same-tab sync
        window.dispatchEvent(new Event("storage"));
      } catch (error) {
        console.error("Error saving jobs to localStorage:", error);
      }
    }
  };

  const addJob = (job: Omit<JobListing, "id">) => {
    const newJob: JobListing = {
      ...job,
      id: Date.now().toString(),
    };
    // Use functional update to ensure we have latest state
    setJobs((prevJobs) => {
      const updatedJobs = [...prevJobs, newJob];
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedJobs));
          window.dispatchEvent(new Event("storage"));
        } catch (error) {
          console.error("Error saving jobs to localStorage:", error);
        }
      }
      return updatedJobs;
    });
    return newJob;
  };

  const updateJob = (id: string, updatedJob: Partial<JobListing>) => {
    // Use functional update to ensure we have latest state
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.map((job) =>
        job.id === id ? { ...job, ...updatedJob } : job
      );
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedJobs));
          window.dispatchEvent(new Event("storage"));
        } catch (error) {
          console.error("Error saving jobs to localStorage:", error);
        }
      }
      return updatedJobs;
    });
  };

  const deleteJob = (id: string) => {
    // Use functional update to ensure we have latest state
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.filter((job) => job.id !== id);
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedJobs));
          window.dispatchEvent(new Event("storage"));
        } catch (error) {
          console.error("Error saving jobs to localStorage:", error);
        }
      }
      return updatedJobs;
    });
  };

  const resetToDefault = () => {
    setJobs(DEFAULT_JOBS);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_JOBS));
        window.dispatchEvent(new Event("storage"));
      } catch (error) {
        console.error("Error saving jobs to localStorage:", error);
      }
    }
  };

  return {
    jobs,
    isLoading,
    addJob,
    updateJob,
    deleteJob,
    resetToDefault,
  };
};

