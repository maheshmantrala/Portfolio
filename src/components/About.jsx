// src/components/About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen flex flex-col items-center justify-center
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
        text-white px-4 sm:px-10 lg:px-12 
        scroll-mt-16 md:scroll-mt-20
        text-center
        pt-6 md:pt-10
      "
    >
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-10">
        About Me
      </h2>

      {/* Summary */}
      <div className="max-w-3xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed space-y-4 animate-fadeIn delay-300">
        <p>
          🚀 <span className="font-semibold">Full Stack Developer at Wipro</span>{" "}
          with experience in{" "}
          <span className="font-semibold">
            Java, Spring Boot, Angular, React, and MySQL
          </span>
          .
        </p>
        <p>
          💻 Skilled in{" "}
          <span className="font-semibold">
            REST API design, microservices development, JWT-based authentication
          </span>
          , and building{" "}
          <span className="font-semibold">responsive dashboards and UIs</span>.
        </p>
        <p>
          🤖 Integrated{" "}
          <span className="font-semibold">AI-driven features using OpenAI APIs</span>, 
          enhancing application intelligence and user experience.
        </p>
        <p>
          💼 Completed an{" "}
          <span className="font-semibold">internship at Cognizant</span>, gaining 
          hands-on exposure to the{" "}
          <span className="font-semibold">software development lifecycle (SDLC)</span> 
          and{" "}
          <span className="font-semibold">testing methodologies</span>.
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-10 max-w-3xl w-full space-y-2 text-gray-400 text-sm sm:text-base">
        <p>
          📧 <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:mantralamaheshkumar@gmail.com"
            className="text-blue-400 hover:underline"
          >
            mantralamaheshkumar@gmail.com
          </a>
        </p>
        <p>
          📱 <span className="font-semibold">Contact:</span> +91-8897670050
        </p>
        <p>
          📍 <span className="font-semibold">Location:</span> Hyderabad, India
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 animate-bounce text-gray-500 text-sm sm:text-base">
        ⬇ Scroll Down
      </div>
    </section>
  );
}
