export default function Input({ label, error, as = "input", className = "", id, ...props }) {
  const fieldId = id || props.name;
  const Field = as === "textarea" ? "textarea" : as === "select" ? "select" : "input";
  const fieldClass = as === "textarea" ? "textarea" : as === "select" ? "select" : "input";
  return <div className={`input-wrap ${className}`}><label htmlFor={fieldId}>{label}{props.required && <span aria-hidden="true"> *</span>}</label><Field id={fieldId} className={fieldClass} aria-invalid={error ? "true" : undefined} aria-describedby={error ? `${fieldId}-error` : undefined} {...props} />{error && <span className="form-error" id={`${fieldId}-error`}>{error}</span>}</div>;
}
