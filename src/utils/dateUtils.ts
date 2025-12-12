/**
 * Calculate relative time from a date (e.g., "2 month(s) ago")
 */
export const calculateRelativeTime = (date: Date | string): string => {
  const now = new Date();
  const pastDate = typeof date === "string" ? new Date(date) : date;
  
  const diffInMs = now.getTime() - pastDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);
  
  if (diffInYears > 0) {
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
  } else if (diffInMonths > 0) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  } else if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  } else {
    return "Today";
  }
};

/**
 * Parse a relative time string to a date
 * Returns null if cannot parse
 */
export const parseRelativeTime = (relativeTime: string): Date | null => {
  // Try to parse formats like "2 month(s) ago", "1 day ago", etc.
  const match = relativeTime.match(/(\d+)\s+(year|month|day|week)(s)?\s+ago/i);
  if (!match) return null;
  
  const amount = parseInt(match[1]);
  const unit = match[2].toLowerCase();
  const now = new Date();
  
  switch (unit) {
    case "year":
      now.setFullYear(now.getFullYear() - amount);
      break;
    case "month":
      now.setMonth(now.getMonth() - amount);
      break;
    case "week":
      now.setDate(now.getDate() - amount * 7);
      break;
    case "day":
      now.setDate(now.getDate() - amount);
      break;
    default:
      return null;
  }
  
  return now;
};

/**
 * Format date to YYYY-MM-DD for input type="date"
 */
export const formatDateForInput = (date: Date | string | null): string => {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) return "";
  return d.toISOString().split("T")[0];
};


