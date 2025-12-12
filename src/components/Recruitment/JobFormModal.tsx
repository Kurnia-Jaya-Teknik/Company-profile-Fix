"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { JobListing } from "./JobListings";
import { calculateRelativeTime, parseRelativeTime, formatDateForInput } from "@/utils/dateUtils";

interface JobFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (job: Omit<JobListing, "id">) => void;
  initialData?: JobListing | null;
}

const JobFormModal: React.FC<JobFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    postedDate: "",
    location: "",
    company: "CV. Kurnia Jaya Teknik",
    mainTask: "",
    fullTask: "",
    mainTasks: [""],
    qualifications: [""],
    experienceLevel: "",
    qualificationLevel: "",
    yearsOfExperience: "",
    fieldOfWork: "",
    tags: [""],
    type: "",
  });
  const [postedDateRaw, setPostedDateRaw] = useState<string>("");

  useEffect(() => {
    if (initialData) {
      // Try to parse existing relative time to date
      const parsedDate = parseRelativeTime(initialData.postedDate);
      const dateForInput = parsedDate 
        ? formatDateForInput(parsedDate) 
        : formatDateForInput(new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)); // Default: 2 months ago
      
      setPostedDateRaw(dateForInput);
      
      setFormData({
        title: initialData.title,
        postedDate: initialData.postedDate,
        location: initialData.location,
        company: initialData.company,
        mainTask: initialData.mainTask,
        fullTask: initialData.fullTask,
        mainTasks: initialData.mainTasks.length > 0 ? initialData.mainTasks : [""],
        qualifications: initialData.qualifications.length > 0 ? initialData.qualifications : [""],
        experienceLevel: initialData.experienceLevel,
        qualificationLevel: initialData.qualificationLevel,
        yearsOfExperience: initialData.yearsOfExperience,
        fieldOfWork: initialData.fieldOfWork || "",
        tags: initialData.tags.length > 0 ? initialData.tags : [""],
        type: initialData.type,
      });
    } else {
      // Default: 2 months ago
      const defaultDate = new Date();
      defaultDate.setMonth(defaultDate.getMonth() - 2);
      setPostedDateRaw(formatDateForInput(defaultDate));
      
      setFormData({
        title: "",
        postedDate: "",
        location: "",
        company: "CV. Kurnia Jaya Teknik",
        mainTask: "",
        fullTask: "",
        mainTasks: [""],
        qualifications: [""],
        experienceLevel: "",
        qualificationLevel: "",
        yearsOfExperience: "",
        fieldOfWork: "",
        tags: [""],
        type: "",
      });
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate relative time from selected date
    let calculatedPostedDate = formData.postedDate;
    if (postedDateRaw) {
      const selectedDate = new Date(postedDateRaw);
      if (!isNaN(selectedDate.getTime())) {
        calculatedPostedDate = calculateRelativeTime(selectedDate);
      }
    }
    
    onSubmit({
      ...formData,
      postedDate: calculatedPostedDate,
      mainTasks: formData.mainTasks.filter((task) => task.trim() !== ""),
      qualifications: formData.qualifications.filter((qual) => qual.trim() !== ""),
      tags: formData.tags.filter((tag) => tag.trim() !== ""),
    });
    onClose();
  };

  const addArrayItem = (field: "mainTasks" | "qualifications" | "tags") => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ""],
    });
  };

  const updateArrayItem = (
    field: "mainTasks" | "qualifications" | "tags",
    index: number,
    value: string
  ) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const removeArrayItem = (field: "mainTasks" | "qualifications" | "tags", index: number) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newArray.length > 0 ? newArray : [""] });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="bg-white dark:bg-darkmode rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-darkmode border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-midnight_text dark:text-white">
            {initialData ? "Edit Lowongan" : "Tambah Lowongan Baru"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Icon icon="lucide:x" className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Judul Posisi <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Sales Manager"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
            />
          </div>

          {/* Posted Date */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Tanggal Posting <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              value={postedDateRaw}
              onChange={(e) => {
                setPostedDateRaw(e.target.value);
                const date = new Date(e.target.value);
                if (!isNaN(date.getTime())) {
                  setFormData({ ...formData, postedDate: calculateRelativeTime(date) });
                }
              }}
              className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
            />
            {formData.postedDate && (
              <p className="text-sm text-muted dark:text-white dark:text-opacity-70 mt-1">
                Akan ditampilkan sebagai: {formData.postedDate}
              </p>
            )}
          </div>

          {/* Location & Company */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Lokasi <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Contoh: Jombang, Jawa Timur"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Perusahaan
              </label>
              <input
                type="text"
                placeholder="CV. Kurnia Jaya Teknik"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Main Task (Summary) */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Ringkasan Tugas <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Ringkasan singkat tentang pekerjaan ini"
              required
              value={formData.mainTask}
              onChange={(e) => setFormData({ ...formData, mainTask: e.target.value })}
              rows={2}
              className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
            />
          </div>

          {/* Full Task (Detailed) */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Deskripsi Lengkap
            </label>
            <textarea
              placeholder="Deskripsi detail tentang pekerjaan ini"
              value={formData.fullTask}
              onChange={(e) => setFormData({ ...formData, fullTask: e.target.value })}
              rows={4}
              className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
            />
          </div>

          {/* Main Tasks Array */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-midnight_text dark:text-white">
                Tugas Utama <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => addArrayItem('mainTasks')}
                className="text-primary hover:text-opacity-80 text-sm font-semibold"
              >
                + Tambah Tugas
              </button>
            </div>
            {formData.mainTasks?.map((task, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Tugas ${index + 1}`}
                  value={task}
                  onChange={(e) => updateArrayItem('mainTasks', index, e.target.value)}
                  className="flex-1 p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                />
                {formData.mainTasks && formData.mainTasks.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('mainTasks', index)}
                    className="p-3 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800"
                  >
                    <Icon icon="solar:trash-bin-trash-bold" width="18" height="18" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Qualifications Array */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-midnight_text dark:text-white">
                Kualifikasi <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => addArrayItem('qualifications')}
                className="text-primary hover:text-opacity-80 text-sm font-semibold"
              >
                + Tambah Kualifikasi
              </button>
            </div>
            {formData.qualifications?.map((qual, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Kualifikasi ${index + 1}`}
                  value={qual}
                  onChange={(e) => updateArrayItem('qualifications', index, e.target.value)}
                  className="flex-1 p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                />
                {formData.qualifications && formData.qualifications.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('qualifications', index)}
                    className="p-3 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800"
                  >
                    <Icon icon="solar:trash-bin-trash-bold" width="18" height="18" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Experience & Qualification Levels */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Tingkat Pengalaman
              </label>
              <input
                type="text"
                placeholder="Contoh: Senior"
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Tingkat Pendidikan
              </label>
              <input
                type="text"
                placeholder="Contoh: S1"
                value={formData.qualificationLevel}
                onChange={(e) => setFormData({ ...formData, qualificationLevel: e.target.value })}
                className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Tahun Pengalaman
              </label>
              <input
                type="text"
                placeholder="Contoh: 5+ tahun"
                value={formData.yearsOfExperience}
                onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Field of Work */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Bidang Pekerjaan
            </label>
            <input
              type="text"
              placeholder="Contoh: Sales & Marketing"
              value={formData.fieldOfWork}
              onChange={(e) => setFormData({ ...formData, fieldOfWork: e.target.value })}
              className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
            />
          </div>

          {/* Tags Array */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-midnight_text dark:text-white">
                Tags
              </label>
              <button
                type="button"
                onClick={() => addArrayItem('tags')}
                className="text-primary hover:text-opacity-80 text-sm font-semibold"
              >
                + Tambah Tag
              </button>
            </div>
            {formData.tags?.map((tag, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Tag ${index + 1}`}
                  value={tag}
                  onChange={(e) => updateArrayItem('tags', index, e.target.value)}
                  className="flex-1 p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                />
                {formData.tags && formData.tags.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('tags', index)}
                    className="p-3 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800"
                  >
                    <Icon icon="solar:trash-bin-trash-bold" width="18" height="18" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Tipe Pekerjaan <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full p-3 border border-border dark:border-dark_border rounded-lg bg-white dark:bg-gray-800 text-midnight_text dark:text-white focus:outline-none focus:border-primary"
            >
              <option value="">Pilih Tipe</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              type="submit"
              className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
            >
              {initialData ? "Update" : "Simpan"}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
              }}
              className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all font-semibold"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobFormModal;

