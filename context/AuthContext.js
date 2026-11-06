"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { seedUsers } from "../data/seed";

// createContext makes shared sign-in state available without passing it through every component.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  // The Provider owns auth state and exposes it to all pages below the root layout.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("ideamates-user");
      if (saved) setUser(JSON.parse(saved));
    } catch { window.localStorage.removeItem("ideamates-user"); }
    setReady(true);
  }, []);

  function login({ email, name, university }) {
    const savedProfile = seedUsers.find((candidate) => candidate.email.toLowerCase() === email.toLowerCase());
    const demoUser = savedProfile ? { ...savedProfile, name: name || savedProfile.name, university: university || savedProfile.university } : { id: `u-${email.toLowerCase().split("@")[0]}`, name: name || email.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()), email, university: university || "Your university", bio: "Here to find thoughtful people and build something useful.", skills: ["Product thinking", "Research"], interests: ["Student projects"] };
    setUser(demoUser);
    window.localStorage.setItem("ideamates-user", JSON.stringify(demoUser));
    return demoUser;
  }

  function logout() {
    setUser(null);
    window.localStorage.removeItem("ideamates-user");
  }

  function updateUser(changes) {
    setUser((current) => {
      const updated = { ...current, ...changes };
      window.localStorage.setItem("ideamates-user", JSON.stringify(updated));
      return updated;
    });
  }

  return <AuthContext.Provider value={{ user, ready, login, logout, setUser, updateUser }}>{children}</AuthContext.Provider>;
}

// useAuth is the custom useContext hook pages use to read and update auth state.
export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
