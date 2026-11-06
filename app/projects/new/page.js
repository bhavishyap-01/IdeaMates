"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import ProjectForm from "../../../components/ProjectForm";
import Card from "../../../components/Card";
import { useProjects } from "../../../context/ProjectContext";
import { useAuth } from "../../../context/AuthContext";

export default function NewProjectPage() {
  const { addProject } = useProjects(); const { user, ready } = useAuth(); const router = useRouter();
  if (!ready) return <div className="container page-head">Loading…</div>;
  if (!user) return <div className="container page-head"><h1>Share your idea</h1><p>Please <Link href="/login">log in</Link> first so your teammates know who you are.</p><Link href="/login?next=/projects/new" className="button button-primary">Log in to continue</Link></div>;
  return <section className="container" style={{ maxWidth: 850, paddingBottom: 80 }}><div className="page-head"><span className="eyebrow">Start something</span><h1>Tell us what you’re dreaming up.</h1><p className="muted">The more your future teammates can picture it, the easier it is to say “I’m in.”</p></div><Card className="card-pad"><ProjectForm onSubmit={(values) => { const project = addProject({ ...values, owner: user.name, ownerId: user.id }); router.push(`/projects/${project.id}`); }} /></Card></section>;
}
