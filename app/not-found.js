import Link from "next/link";

export default function NotFound() {
  return <section className="container page-head" style={{ minHeight: "60vh" }}><span className="eyebrow">404 · Page not found</span><h1>Looks like this idea wandered off.</h1><p className="muted">Let’s get you back to the projects board.</p><Link className="button button-primary" href="/projects">Explore ideas</Link></section>;
}
