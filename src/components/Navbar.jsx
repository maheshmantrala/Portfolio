// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, name: "Home", href: "#hero", icon: <FaHome size={22} /> },
    { id: 2, name: "About", href: "#about", icon: <FaUser size={22} /> },
    { id: 3, name: "Experience", href: "#experience", icon: <FaBriefcase size={22} /> },
    { id: 4, name: "Skills", href: "#skills", icon: <FaTools size={22} /> },
    { id: 5, name: "Projects", href: "#projects", icon: <FaProjectDiagram size={22} /> },
    { id: 6, name: "Contact", href: "#contact", icon: <FaEnvelope size={22} /> },
  ];

  // Track scroll for desktop navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Navbar - Fixed Top */}
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-950/90 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2">
            <div className="w-12 h-12 flex flex-col items-center justify-center rounded-full bg-gray-200 text-gray-900 font-bold shadow-md">
              <span className="text-sm">MMK</span>
              <span className="text-[8px] font-semibold uppercase tracking-wide">
                Portfolio
              </span>
            </div>
          </a>

          {/* Links */}
          <ul className="flex space-x-8 text-gray-300 font-medium">
            {links.map(({ id, name, href }) => (
              <li key={id} className="relative group">
                <a
                  href={href}
                  className={`transition duration-300 ${
                    activeSection === href.replace("#", "")
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  }`}
                >
                  {name}
                </a>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 rounded transition-all duration-300 ${
                    activeSection === href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar - Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-gray-950/95 backdrop-blur-md border-t border-gray-800 z-50">
        <ul className="flex justify-around items-center py-3">
          {links.map(({ id, href, icon, name }) => (
            <li key={id}>
              <a
                href={href}
                className={`flex flex-col items-center transition duration-300 ${
                  activeSection === href.replace("#", "")
                    ? "text-blue-400 scale-110"
                    : "text-gray-400 hover:text-blue-300"
                }`}
              >
                {icon}
                <span className="text-[10px] mt-1">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
