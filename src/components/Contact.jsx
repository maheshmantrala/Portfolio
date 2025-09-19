// src/components/Contact.jsx
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-12 scroll-mt-20"
    >
      {/* Heading */}
      <h2 className="mt-16 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-6 text-center">
        Let’s Work Together 🚀
      </h2>

      {/* Subtext */}
      <p className="text-gray-300 max-w-xl text-center mb-10 text-sm sm:text-base md:text-lg leading-relaxed">
        I’m always excited to collaborate on projects and freelance work —
        especially in <span className="text-blue-400">React, Angular, and Spring Boot</span>.
        Whether it’s building a product, solving real-world problems, or exploring new ideas,
        let’s make something amazing together!
      </p>

      {/* Contact Info */}
      <div className="max-w-3xl w-full space-y-6 text-center">
        <p className="flex justify-center items-center gap-3 text-gray-300 text-sm sm:text-base">
          <FaEnvelope className="text-blue-400" />{" "}
          <a
            href="mailto:mantralamaheshkumar@gmail.com"
            className="hover:underline"
          >
            mantralamaheshkumar@gmail.com
          </a>
        </p>

        <p className="flex justify-center items-center gap-3 text-gray-300 text-sm sm:text-base">
          <FaPhoneAlt className="text-blue-400" /> +91-8897670050
        </p>

        <p className="flex justify-center items-center gap-3 text-gray-300 text-sm sm:text-base">
          <FaMapMarkerAlt className="text-blue-400" /> Hyderabad, India
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-gray-400 mt-8">
          <a
            href="https://github.com/maheshmantrala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/maheshmantrala8897/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.instagram.com/mahesh_mantrala/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram size={28} />
          </a>
        </div>
       
      </div>
    </section>
  );
}
