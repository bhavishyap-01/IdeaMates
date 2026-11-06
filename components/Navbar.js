"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

export default function Navbar() {
  const { user, ready, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const active = (path) => pathname === path || (path === "/projects" && pathname.startsWith("/projects"));
  return <header className="site-nav" style={{ position: "sticky", top: 0, zIndex: 20, background: "#faf9f6ed", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--line)" }}><div className="container nav-inner" style={{ minHeight: 72, display: "flex", alignItems: "center", gap: 32 }}><Link href="/" aria-label="IdeaMates home" style={{ display: "flex", alignItems: "center", gap: 9, fontWeight: 900, fontSize: "1.18rem", letterSpacing: "-.04em" }}><span style={{ width: 30, height: 30, display: "grid", placeItems: "center", borderRadius: 10, background: "var(--brand)", color: "white" }}>✳</span> idea<span style={{ color: "var(--brand)", marginLeft: -9 }}>mates</span></Link><nav aria-label="Main navigation" className="nav-links" style={{ display: "flex", gap: 25, color: "var(--muted)", fontSize: ".9rem", fontWeight: 700, flex: 1 }}><Link href="/projects" aria-current={active("/projects") ? "page" : undefined} style={active("/projects") ? { color: "var(--ink)" } : {}}>Explore</Link>{user && <><Link href="/dashboard" aria-current={active("/dashboard") ? "page" : undefined} style={active("/dashboard") ? { color: "var(--ink)" } : {}}>Dashboard</Link><Link href="/profile" aria-current={active("/profile") ? "page" : undefined} style={active("/profile") ? { color: "var(--ink)" } : {}}>My profile</Link></>}</nav><div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: 10 }}>{ready && (user ? <><span className="muted" style={{ fontSize: ".82rem" }}>Hi, {user.name.split(" ")[0]}</span><Button variant="secondary" size="small" onClick={() => { logout(); router.push("/"); }}>Log out</Button></> : <><Link href="/login" className="button button-secondary button-small">Log in</Link><Link href="/register" className="button button-primary button-small">Join IdeaMates</Link></>)}</div></div></header>;
}
