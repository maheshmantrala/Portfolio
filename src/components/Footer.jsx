// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-700">
      
      <p className="text-sm">
        © {new Date().getFullYear()} Mahesh. All rights reserved.
      </p>
    </footer>
  );
}
