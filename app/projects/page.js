"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import Input from "../../components/Input";
import EmptyState from "../../components/EmptyState";
import LoadingState from "../../components/LoadingState";
import Button from "../../components/Button";
import { useProjects } from "../../context/ProjectContext";
import { useAuth } from "../../context/AuthContext";

const categories = ["All topics", "Campus life", "Education", "Sustainability", "Wellbeing", "Food & agriculture", "Community", "Mobility", "Culture", "Science", "Other"];
export default function ProjectsPage() {
  const { projects, ready } = useProjects(); const { user } = useAuth();
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All topics");
  const filtered = useMemo(() => projects.filter((project) => (category === "All topics" || project.category === category) && `${project.name} ${project.description} ${project.skills.join(" ")} ${project.owner}`.toLowerCase().includes(query.toLowerCase())), [projects, category, query]);
  return <section className="container" style={{ paddingBottom: 80 }}><div className="page-head"><span className="eyebrow">The idea board</span><h1>Find a project that feels like you.</h1><p className="muted" style={{ maxWidth: 600 }}>Browse the ideas students are working on. Your next teammate might be one good conversation away.</p><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 15, flexWrap: "wrap" }}><span className="badge">{projects.length} ideas shared</span><Link href={user ? "/projects/new" : "/register"} className="button button-primary">＋ Share your idea</Link></div></div><div className="filters"><Input label="Search ideas" name="search" placeholder="Try “design”, “climate”, or “React”…" value={query} onChange={(event) => setQuery(event.target.value)} /><Input label="Browse by topic" name="category" as="select" value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</Input></div>{!ready ? <LoadingState label="Finding fresh ideas…" /> : filtered.length ? <div className="project-grid">{filtered.map((project) => <ProjectCard key={project.id} project={project} />)}</div> : <EmptyState title="No ideas found yet" description="Try another search or topic. Your idea could be the first one here." action={<Button onClick={() => { setQuery(""); setCategory("All topics"); }}>Clear filters</Button>} />}</section>;
}
