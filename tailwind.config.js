/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: { colors: { ink: "var(--ink)", brand: "var(--brand)", canvas: "var(--canvas)" } } },
  plugins: [],
};
