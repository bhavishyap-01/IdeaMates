"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function ProfilePage() {
  const { user, ready, updateUser } = useAuth(); const [saved, setSaved] = useState(false); const [values, setValues] = useState({ name: "", university: "", bio: "", skills: "", interests: "" });
  useEffect(() => { if (user) setValues({ name: user.name, university: user.university || "", bio: user.bio || "", skills: (user.skills || []).join(", "), interests: (user.interests || []).join(", ") }); }, [user]);
  if (!ready) return <div className="container page-head">Loading profile…</div>;
  if (!user) return <section className="container page-head"><h1>Log in to create your profile.</h1><Link href="/login?next=/profile" className="button button-primary">Log in</Link></section>;
  function change(event) { setValues((current) => ({ ...current, [event.target.name]: event.target.value })); setSaved(false); }
  function submit(event) { event.preventDefault(); updateUser({ ...values, skills: values.skills.split(",").map((item) => item.trim()).filter(Boolean), interests: values.interests.split(",").map((item) => item.trim()).filter(Boolean) }); setSaved(true); }
  return <section className="container" style={{ paddingBottom: 80 }}><div className="page-head"><span className="eyebrow">Your profile</span><h1>A little about the person behind the ideas.</h1><p className="muted">Let potential teammates see what you enjoy and what you’re good at.</p></div><div className="profile-layout"><Card className="profile-card"><div className="avatar" aria-hidden="true">{user.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()}</div><h2 style={{ fontSize: "1.35rem", marginBottom: 4 }}>{values.name}</h2><p className="muted">{values.university}</p><div className="tag-row" style={{ justifyContent: "center" }}>{values.skills.split(",").filter(Boolean).slice(0, 4).map((skill) => <span className="badge" key={skill}>{skill.trim()}</span>)}</div></Card><Card className="card-pad"><form className="stack" onSubmit={submit}><div className="form-grid"><Input name="name" label="Your name" value={values.name} onChange={change} required /><Input name="university" label="School or university" value={values.university} onChange={change} required /><Input name="bio" label="A short intro" as="textarea" className="full" value={values.bio} onChange={change} maxLength={250} /><Input name="skills" label="Skills (comma separated)" placeholder="Figma, React, writing" value={values.skills} onChange={change} /><Input name="interests" label="Interests (comma separated)" placeholder="Climate, education, music" value={values.interests} onChange={change} /></div>{saved && <div role="status" className="notice">Your profile is saved on this device.</div>}<div><Button type="submit">Save profile</Button></div></form></Card></div></section>;
}
