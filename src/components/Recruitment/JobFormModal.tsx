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
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Judul Pekerjaan *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Tanggal Posting *
              </label>
              <input
                type="date"
                required
                value={postedDateRaw}
                onChange={(e) => {
                  setPostedDateRaw(e.target.value);
                  if (e.target.value) {
                    const selectedDate = new Date(e.target.value);
                    if (!isNaN(selectedDate.getTime())) {
                      setFormData({
                        ...formData,
                        postedDate: calculateRelativeTime(selectedDate),
                      });
                    }
                  }
                }}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
              />
              {formData.postedDate && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formData.postedDate}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Lokasi *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Perusahaan *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Main Task */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Main Task (Ringkasan) *
            </label>
            <textarea
              required
              rows={2}
              value={formData.mainTask}
              onChange={(e) => setFormData({ ...formData, mainTask: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Full Task (Deskripsi Lengkap) *
            </label>
            <textarea
              required
              rows={3}
              value={formData.fullTask}
              onChange={(e) => setFormData({ ...formData, fullTask: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
            />
          </div>

          {/* Main Tasks Array */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Main Tasks (Daftar Tugas) *
            </label>
            {formData.mainTasks.map((task, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={task}
                  onChange={(e) => updateArrayItem("mainTasks", index, e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
                  placeholder={`Task ${index + 1}`}
                />
                {formData.mainTasks.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("mainTasks", index)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                  >
                    <Icon icon="lucide:trash" className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("mainTasks")}
              className="mt-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
            >
              + Tambah Task
            </button>
          </div>

          {/* Qualifications Array */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Qualifications (Kualifikasi) *
            </label>
            {formData.qualifications.map((qual, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={qual}
                  onChange={(e) => updateArrayItem("qualifications", index, e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
                  placeholder={`Kualifikasi ${index + 1}`}
                />
                {formData.qualifications.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("qualifications", index)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                  >
                    <Icon icon="lucide:trash" className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("qualifications")}
              className="mt-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
            >
              + Tambah Kualifikasi
            </button>
          </div>

          {/* Job Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Experience Level *
              </label>
              <input
                type="text"
                required
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Qualification Level *
              </label>
              <input
                type="text"
                required
                value={formData.qualificationLevel}
                onChange={(e) => setFormData({ ...formData, qualificationLevel: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Years of Experience *
              </label>
              <input
                type="text"
                required
                value={formData.yearsOfExperience}
                onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Field of Work
              </label>
              <input
                type="text"
                value={formData.fieldOfWork}
                onChange={(e) => setFormData({ ...formData, fieldOfWork: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
                Job Type *
              </label>
              <input
                type="text"
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-midnight_text dark:text-white mb-2">
              Tags *
            </label>
            {formData.tags.map((tag, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => updateArrayItem("tags", index, e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none"
                  placeholder={`Tag ${index + 1}`}
                />
                {formData.tags.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("tags", index)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                  >
                    <Icon icon="lucide:trash" className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("tags")}
              className="mt-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
            >
              + Tambah Tag
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium"
            >
              {initialData ? "Update" : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobFormModal;

