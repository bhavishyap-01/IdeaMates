import Link from "next/link";
export default function Footer() { return <footer className="footer"><div className="container footer-inner"><span>© 2026 IdeaMates · Good ideas find their people.</span><div style={{ display: "flex", gap: 18 }}><Link href="/projects">Explore ideas</Link><Link href="/register">Join the community</Link></div></div></footer>; }
