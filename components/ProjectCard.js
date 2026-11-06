import Link from "next/link";
import Badge from "./Badge";

const icons = { "Campus life": "🎒", Education: "📚", Sustainability: "🌱", Wellbeing: "☀️", "Food & agriculture": "🍅", Community: "🤝", Mobility: "🚲", Culture: "🎧", Science: "🔬" };
export default function ProjectCard({ project }) {
  return <article className="card project-card"><div className="project-card-top"><Badge tone="brand">{project.category}</Badge><span className="muted" style={{ fontSize: ".78rem" }}>{project.members} {project.members === 1 ? "mate" : "mates"}</span></div><Link href={`/projects/${project.id}`}><h3>{project.name}</h3></Link><p className="description">{project.description}</p><div className="tag-row">{project.skills.slice(0, 3).map((skill) => <Badge key={skill}>{skill}</Badge>)}</div><div className="project-card-footer"><span>By {project.owner} · {project.location}</span><Link href={`/projects/${project.id}`} aria-label={`View ${project.name}`}>View idea ↗</Link></div></article>;
}
