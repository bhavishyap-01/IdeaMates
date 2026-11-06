export default function Badge({ children, tone = "" }) { return <span className={`badge ${tone ? `badge-${tone}` : ""}`}>{children}</span>; }
