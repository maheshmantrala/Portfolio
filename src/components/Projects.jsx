// src/components/Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Customer Relationship Management (CRM) System",
      description:
        "Developed a microservices-based CRM system with Customer, Interaction, and Authentication services using Spring Boot, Angular, and MySQL. Features include customer management, JWT authentication, and admin dashboard.",
      tech: ["Spring Boot", "Angular", "MySQL", "JWT", "Eureka"],
      github: "https://github.com/maheshmantrala/CustomerRelationshipManagementSystem",
    },
    {
      title: "Hotel Reservation System",
      description:
        "Developed a backend system for hotel room booking and reservation management. Designed REST APIs using Spring Boot to handle room availability, bookings, updates, and reservation history. Implemented authentication, validation, and error handling for secure and reliable operations. Integrated with SQL database for data persistence.",
      tech: ["Spring Boot", "MySQL", "REST API"],
      github: "https://github.com/maheshmantrala/HotelReservationSystem-Backend-",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and Tailwind CSS, showcasing skills, projects, and experience with smooth animations and responsive design.",
      tech: ["React", "Tailwind CSS", "React Icons"],
      github: "https://github.com/maheshmantrala/Portfolio",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="
        min-h-screen 
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
        text-white px-4 sm:px-6 lg:px-12 
        pt-6 sm:pt-16 pb-20   /* reduced top padding for mobile */
        scroll-mt-16
      "
    >
      {/* Heading */}
      <h2 className="mt-0 sm:mt-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-2 text-left flex flex-col"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-3 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 animate-bounce text-gray-500 text-sm sm:text-base text-center">
        ⬇ Scroll Down
      </div>
    </section>
  );
}
