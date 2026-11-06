"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function LoginPage() {
  const { login } = useAuth(); const router = useRouter(); const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState("");
  function submit(event) { event.preventDefault(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid email address."); if (password.length < 6) return setError("Password must be at least 6 characters."); login({ email }); const next = new URLSearchParams(window.location.search).get("next"); router.push(next?.startsWith("/") ? next : "/dashboard"); }
  return <section className="auth-shell"><div className="auth-card"><span className="eyebrow">Welcome back</span><h1>Good to see you.</h1><p className="muted">Pick up where your next big thing left off.</p><form className="stack" onSubmit={submit} noValidate><Input name="email" label="Email address" type="email" autoComplete="email" placeholder="you@university.edu" value={email} onChange={(event) => setEmail(event.target.value)} required /><Input name="password" label="Password" type="password" autoComplete="current-password" placeholder="At least 6 characters" value={password} onChange={(event) => setPassword(event.target.value)} required />{error && <div className="error-box" role="alert">{error}</div>}<Button type="submit" size="large">Log in</Button></form><div className="divider"/><p className="muted" style={{ marginBottom: 0 }}>New to IdeaMates? <Link href="/register" style={{ color: "var(--brand-dark)", fontWeight: 800 }}>Create an account</Link></p><p className="muted" style={{ fontSize: ".78rem", marginTop: 14, marginBottom: 0 }}>Demo only: any valid email and a 6+ character password will work.</p></div></section>;
}
