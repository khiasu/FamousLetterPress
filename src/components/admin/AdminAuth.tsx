"use client";

import { useState, useEffect } from "react";
import React from "react";

const ADMIN_PASS = "FamousLP2026";

export function AdminAuthGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("flp_admin_auth");
    if (stored === ADMIN_PASS) {
      setAuthed(true);
    }
    setChecking(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      sessionStorage.setItem("flp_admin_auth", password);
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("flp_admin_auth");
    setAuthed(false);
    setPassword("");
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <p className="text-sm text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white border border-neutral-200 p-8 space-y-5"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
              Famous Letterpress
            </p>
            <h1 className="text-lg font-medium text-neutral-900 mt-1">
              Admin Portal
            </h1>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs text-neutral-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter admin password"
              autoFocus
              className="w-full border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
            />
            {error && (
              <p className="text-xs text-red-600">Incorrect password.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-900 text-white text-sm py-2.5 font-medium hover:bg-neutral-800 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <AdminAuthContext.Provider value={{ handleLogout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

const AdminAuthContext = React.createContext<{ handleLogout: () => void }>({
  handleLogout: () => {},
});

export function useAdminAuth() {
  return React.useContext(AdminAuthContext);
}
