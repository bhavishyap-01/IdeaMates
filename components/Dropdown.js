"use client";

export default function Dropdown({ label, value, options, onChange }) { return <div className="input-wrap"><label htmlFor="project-category">{label}</label><select id="project-category" className="select" value={value} onChange={(event) => onChange(event.target.value)}>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>; }
