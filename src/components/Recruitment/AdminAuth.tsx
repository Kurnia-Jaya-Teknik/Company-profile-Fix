"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const ADMIN_PASSWORD_KEY = "admin_password";
const ADMIN_SESSION_KEY = "admin_session";
const DEFAULT_PASSWORD = "admin123"; // Password default, bisa diubah

interface AdminAuthProps {
  onAuthenticated: () => void;
  isAuthenticated: boolean;
}

const AdminAuth: React.FC<AdminAuthProps> = ({ onAuthenticated, isAuthenticated }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 

  useEffect(() => {
    // Check if already authenticated in this session (client-side only)
    if (typeof window !== "undefined") {
      const session = sessionStorage.getItem(ADMIN_SESSION_KEY);
      if (session === "true") {
        onAuthenticated();
      }
    }
  }, [onAuthenticated]);

  const getStoredPassword = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(ADMIN_PASSWORD_KEY);
      return stored || DEFAULT_PASSWORD;
    }
    return DEFAULT_PASSWORD;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (typeof window === "undefined") return;

    const storedPassword = getStoredPassword();
    if (password === storedPassword) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
      onAuthenticated();
      setShowLogin(false);
      setPassword("");
    } else {
      setError("Password salah!");
    }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      window.location.reload();
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 4) {
      setError("Password minimal 4 karakter!");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Password baru dan konfirmasi tidak sama!");
      return;
    }

    const currentPassword = getStoredPassword();
    if (password !== currentPassword) {
      setError("Password lama salah!");
      return;
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
    }
    setError("");
    setIsChangingPassword(false);
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
    alert("Password berhasil diubah!");
  };

  if (!isAuthenticated) {
    return (
      <>
        <button
          onClick={() => setShowLogin(true)}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <Icon icon="lucide:lock" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Login Admin</span>
          <span className="sm:hidden">Login</span>
        </button>

        {showLogin && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
            <div
              className="bg-white dark:bg-darkmode rounded-lg shadow-xl max-w-md w-full p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-midnight_text dark:text-white">
                  Login Admin
                </h2>
                <button
                  onClick={() => {
                    setShowLogin(false);
                    setError("");
                    setPassword("");
                  }}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <Icon icon="lucide:x" className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {!isChangingPassword ? (
                <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-midnight_text dark:text-white mb-2">
                      Password Admin
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none text-sm sm:text-base"
                      placeholder="Masukkan password"
                      autoFocus
                    />
                  </div>
                  {error && (
                    <p className="text-xs sm:text-sm text-red-500 dark:text-red-400">{error}</p>
                  )}
                  <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm sm:text-base"
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsChangingPassword(true);
                        setError("");
                      }}
                      className="px-3 sm:px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-xs sm:text-sm"
                    >
                      Ubah Password
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleChangePassword} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-midnight_text dark:text-white mb-2">
                      Password Lama
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none text-sm sm:text-base"
                      placeholder="Masukkan password lama"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-midnight_text dark:text-white mb-2">
                      Password Baru
                    </label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none text-sm sm:text-base"
                      placeholder="Masukkan password baru (min 4 karakter)"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-midnight_text dark:text-white mb-2">
                      Konfirmasi Password Baru
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent dark:text-white focus:border-primary focus:outline-none text-sm sm:text-base"
                      placeholder="Konfirmasi password baru"
                    />
                  </div>
                  {error && (
                    <p className="text-xs sm:text-sm text-red-500 dark:text-red-400">{error}</p>
                  )}
                  <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                    <button
                      type="submit"
                      className="flex-1 px-3 sm:px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm sm:text-base"
                    >
                      Ubah Password
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsChangingPassword(false);
                        setError("");
                        setPassword("");
                        setNewPassword("");
                        setConfirmPassword("");
                      }}
                      className="px-3 sm:px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm sm:text-base"
                    >
                      Batal
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
    >
      <Icon icon="lucide:log-out" className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="hidden sm:inline">Logout Admin</span>
      <span className="sm:hidden">Logout</span>
    </button>
  );
};

export default AdminAuth;

