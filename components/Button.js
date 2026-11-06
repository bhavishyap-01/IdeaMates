export default function Button({ children, variant = "primary", size = "", className = "", type = "button", ...props }) {
  return <button type={type} className={`button button-${variant} ${size ? `button-${size}` : ""} ${className}`} {...props}>{children}</button>;
}
