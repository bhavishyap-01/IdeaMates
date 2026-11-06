import { Manrope } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { ProjectProvider } from "../context/ProjectContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
  title: "IdeaMates — Good ideas find their people",
  description: "Find thoughtful teammates and bring your student project to life.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={manrope.variable}><AuthProvider><ProjectProvider><Navbar /><main>{children}</main><Footer /></ProjectProvider></AuthProvider></body></html>;
}
