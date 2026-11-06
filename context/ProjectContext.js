"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { seedProjects } from "../data/seed";

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(seedProjects);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("ideamates-projects");
      if (saved) setProjects(JSON.parse(saved));
    } catch { window.localStorage.removeItem("ideamates-projects"); }
    setReady(true);
  }, []);

  function save(next) {
    setProjects(next);
    window.localStorage.setItem("ideamates-projects", JSON.stringify(next));
  }
  function addProject(project) {
    const created = { ...project, id: `p-${Date.now()}`, status: "open", createdAt: new Date().toISOString().slice(0, 10), members: 1, requests: [], color: "lavender" };
    save([created, ...projects]);
    return created;
  }
  function updateProject(id, changes) { save(projects.map((project) => project.id === id ? { ...project, ...changes } : project)); }
  function deleteProject(id) { save(projects.filter((project) => project.id !== id)); }
  function requestToJoin(id, user) {
    const target = projects.find((project) => project.id === id);
    if (!target || target.requests?.some((request) => request.userId === user.id)) return;
    updateProject(id, { requests: [...(target.requests || []), { id: `r-${Date.now()}`, userId: user.id, name: user.name, email: user.email, status: "pending", createdAt: new Date().toISOString().slice(0, 10) }] });
  }
  function updateRequest(projectId, requestId, status) {
    const project = projects.find((item) => item.id === projectId);
    if (!project) return;
    updateProject(projectId, { requests: project.requests.map((request) => request.id === requestId ? { ...request, status } : request), members: status === "accepted" ? project.members + 1 : project.members });
  }

  return <ProjectContext.Provider value={{ projects, ready, addProject, updateProject, deleteProject, requestToJoin, updateRequest }}>{children}</ProjectContext.Provider>;
}

export function useProjects() {
  const value = useContext(ProjectContext);
  if (!value) throw new Error("useProjects must be used inside ProjectProvider");
  return value;
}
