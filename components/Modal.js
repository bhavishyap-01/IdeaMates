"use client";

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return <div role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose?.()} style={{ position: "fixed", inset: 0, zIndex: 30, background: "#1d282477", display: "grid", placeItems: "center", padding: 20 }}><section role="dialog" aria-modal="true" aria-labelledby="modal-title" className="card card-pad" style={{ width: "min(480px,100%)" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><h2 id="modal-title" style={{ fontSize: "1.3rem", margin: 0 }}>{title}</h2><button className="button button-secondary button-small" onClick={onClose} aria-label="Close dialog">✕</button></div><div style={{ marginTop: 18 }}>{children}</div></section></div>;
}
