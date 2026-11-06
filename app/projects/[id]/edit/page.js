"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useProjects } from "../../../../context/ProjectContext";
import { useAuth } from "../../../../context/AuthContext";
import ProjectForm from "../../../../components/ProjectForm";
import Card from "../../../../components/Card";

export default function EditProjectPage() {
  const { id } = useParams(); const router = useRouter(); const { projects, updateProject, ready } = useProjects(); const { user } = useAuth();
  if (!ready) return <div className="container page-head">Loading…</div>;
  const project = projects.find((item) => item.id === id);
  if (!project) return <section className="container page-head"><h1>Project not found</h1><Link href="/projects">Back to explore</Link></section>;
  if (user?.id !== project.ownerId) return <section className="container page-head"><h1>This is someone else’s idea.</h1><Link href={`/projects/${id}`}>Return to project</Link></section>;
  return <section className="container" style={{ maxWidth: 850, paddingBottom: 80 }}><div className="page-head"><span className="eyebrow">Make an update</span><h1>Edit {project.name}</h1></div><Card className="card-pad"><ProjectForm initial={project} submitLabel="Save project" onSubmit={(values) => { updateProject(id, values); router.push(`/projects/${id}`); }} /></Card></section>;
}
