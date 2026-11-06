"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function RegisterPage() {
  const { login } = useAuth(); const router = useRouter(); const [values, setValues] = useState({ name: "", email: "", university: "", password: "" }); const [error, setError] = useState("");
  function change(event) { setValues((current) => ({ ...current, [event.target.name]: event.target.value })); }
  function submit(event) { event.preventDefault(); if (values.name.trim().length < 2) return setError("Add your name so teammates know who you are."); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return setError("Enter a valid email address."); if (values.university.trim().length < 2) return setError("Add your school or university."); if (values.password.length < 6) return setError("Password must be at least 6 characters."); login(values); router.push("/profile"); }
  return <section className="auth-shell"><div className="auth-card"><span className="eyebrow">Join the community</span><h1>Make room for your idea.</h1><p className="muted">A few details, then you’re ready to meet your people.</p><form className="stack" onSubmit={submit} noValidate><Input name="name" label="Your name" autoComplete="name" placeholder="Sam Rivera" value={values.name} onChange={change} required /><Input name="email" label="Email address" type="email" autoComplete="email" placeholder="you@university.edu" value={values.email} onChange={change} required /><Input name="university" label="School or university" autoComplete="organization" placeholder="Where do you study?" value={values.university} onChange={change} required /><Input name="password" label="Create a password" type="password" autoComplete="new-password" placeholder="At least 6 characters" value={values.password} onChange={change} required />{error && <div className="error-box" role="alert">{error}</div>}<Button type="submit" size="large">Create my profile</Button></form><div className="divider"/><p className="muted" style={{ marginBottom: 0 }}>Already here? <Link href="/login" style={{ color: "var(--brand-dark)", fontWeight: 800 }}>Log in</Link></p><p className="muted" style={{ fontSize: ".78rem", marginTop: 13, marginBottom: 0 }}>Front-end demo only. Your account stays in this browser.</p></div></section>;
}
