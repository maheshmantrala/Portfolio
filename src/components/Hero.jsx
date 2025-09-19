// src/components/Hero.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center px-4 sm:px-6 lg:px-12 scroll-mt-20"
    >
      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
        Hi, I’m Mahesh Kumar Mantrala 👋
      </h1>

      {/* Role */}
      <h2 className="text-lg sm:text-xl md:text-3xl text-green-400 mb-2">
        Full Stack Developer
      </h2>
      <h3 className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 animate-pulse">
        React | Angular | Spring Boot | AI Enthusiast
      </h3>

      {/* Typed Animation */}
      <div className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
        <ReactTyped
          strings={[
            "🚀 Passionate about clean & scalable code.",
            "💡 Experienced with React, Angular, and Spring Boot.",
            "🤖 Exploring AI-powered applications with OpenAI.",
            "🌐 Building modern, responsive web apps.",
          ]}
          typeSpeed={50}
          backSpeed={25}
          loop
        />
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 justify-center mb-8 text-gray-400">
        <a
          href="https://github.com/maheshmantrala"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-500"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/maheshmantrala8897/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-500"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="mailto:mantralamaheshkumar@gmail.com"
          className="hover:text-green-400 transition duration-500"
        >
          <FaEnvelope size={28} />
        </a>
      </div>

   

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        {/* Contact Me Button */}
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-blue-500/50 text-sm sm:text-base"
        >
          📩 Contact Me
        </a>

        {/* Resume Download Button */}
        <a
          href="/resume.pdf" // Place resume.pdf inside public/ folder
          download="Mahesh_Kumar_Resume.pdf"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-gray-500/50 text-sm sm:text-base"
        >
          💼 Download Resume
        </a>
      </div>
   
      {/* Scroll Down Indicator */}
      <div className="mt-12 animate-bounce text-gray-500 text-sm sm:text-base text-center">
        ⬇ Scroll Down
      </div>
    </section>
  );
};

export default Hero;
