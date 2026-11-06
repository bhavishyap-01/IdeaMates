"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useProjects } from "../../../context/ProjectContext";
import { useAuth } from "../../../context/AuthContext";
import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import LoadingState from "../../../components/LoadingState";

export default function ProjectDetailPage() {
  const { id } = useParams(); const router = useRouter(); const { projects, ready, requestToJoin } = useProjects(); const { user } = useAuth(); const [sent, setSent] = useState(false);
  if (!ready) return <div className="container section"><LoadingState /></div>;
  const project = projects.find((item) => item.id === id);
  if (!project) return <section className="container page-head"><span className="eyebrow">Idea not found</span><h1>This project may have moved.</h1><Link className="button button-primary" href="/projects">Back to explore</Link></section>;
  const own = user?.id === project.ownerId;
  const requested = sent || project.requests?.some((request) => request.userId === user?.id);
  return <section className="container" style={{ paddingTop: 38 }}><Link href="/projects" className="muted">← All ideas</Link><div className="detail-grid" style={{ marginTop: 20 }}><Card className="detail-main"><div style={{ display: "flex", justifyContent: "space-between", gap: 15, flexWrap: "wrap" }}><Badge tone="brand">{project.category}</Badge><Badge>{project.stage}</Badge></div><h1>{project.name}</h1><p className="muted">Started by <strong style={{ color: "var(--ink)" }}>{project.owner}</strong> · {project.location || "Student community"} · {project.members} {project.members === 1 ? "teammate" : "teammates"}</p><div className="divider"/><div className="detail-section"><h2 style={{ fontSize: "1.4rem" }}>The idea</h2><p style={{ whiteSpace: "pre-wrap" }}>{project.description}</p></div><div className="detail-section"><h2 style={{ fontSize: "1.4rem" }}>Skills we’d love to have</h2><div className="tag-row">{project.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div></div><div className="detail-section"><h2 style={{ fontSize: "1.4rem" }}>The teammate we’re looking for</h2><p>{project.lookingFor}</p></div></Card><Card className="detail-side"><span className="eyebrow">Come build with us</span><h2 style={{ fontSize: "1.45rem", margin: "10px 0" }}>Curious about this idea?</h2><p className="muted">Send a request and tell the team you’d like to help bring it to life.</p>{own ? <div className="notice">This is your project. You can manage requests from your dashboard.</div> : requested ? <div className="notice" role="status">Your request is in! The project owner can review it from their dashboard.</div> : <Button size="large" onClick={() => { if (!user) router.push(`/login?next=/projects/${project.id}`); else { requestToJoin(project.id, user); setSent(true); } }}>Request to join ↗</Button>}<div className="divider"/><p className="muted" style={{ fontSize: ".82rem" }}>Project members: {project.members}<br/>City: {project.location || "Open to all"}</p></Card></div></section>;
}
