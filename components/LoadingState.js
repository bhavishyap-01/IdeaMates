export default function LoadingState({ label = "Loading your workspace…" }) { return <div className="loading-state" role="status"><span aria-hidden="true">◌</span> {label}</div>; }
