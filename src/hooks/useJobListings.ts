"use client";
import { useState, useEffect } from "react";
import { JobListing } from "@/components/Recruitment/JobListings";

const STORAGE_KEY = "job_listings";
const DEFAULT_JOBS: JobListing[] = [
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

  useEffect(() => {
    // Only access localStorage on client-side
    if (typeof window !== "undefined") {
      // Load from localStorage or use default
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          setJobs(JSON.parse(stored));
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

  const saveJobs = (newJobs: JobListing[]) => {
    setJobs(newJobs);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newJobs));
    }
  };

  const addJob = (job: Omit<JobListing, "id">) => {
    const newJob: JobListing = {
      ...job,
      id: Date.now().toString(),
    };
    const updatedJobs = [...jobs, newJob];
    saveJobs(updatedJobs);
    return newJob;
  };

  const updateJob = (id: string, updatedJob: Partial<JobListing>) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, ...updatedJob } : job
    );
    saveJobs(updatedJobs);
  };

  const deleteJob = (id: string) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    saveJobs(updatedJobs);
  };

  const resetToDefault = () => {
    saveJobs(DEFAULT_JOBS);
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

