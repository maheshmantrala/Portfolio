// src/components/Skills.jsx
import {
  FaJava,
  FaPython,
  FaReact,
  FaAngular,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-500" size={22} /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" size={22} /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" size={22} /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" size={22} /> },
        { name: "Angular", icon: <FaAngular className="text-red-500" size={22} /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600" size={22} /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600" size={22} /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" size={22} /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={22} /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-500" size={22} /> },
        { name: "MongoDB", icon: <FaDatabase className="text-green-700" size={22} /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-600" size={22} /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" size={22} /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        min-h-screen flex flex-col items-center justify-start 
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
        text-white px-4 sm:px-6 lg:px-12 
        pt-6 pb-20
        scroll-mt-16
      "
    >
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
        My Skills
      </h2>

      {/* Section Description */}
      <p className="max-w-3xl text-sm sm:text-base md:text-lg text-gray-300 mb-12 text-center">
        Here are the technologies and tools I’ve worked with during my projects,
        internships, and professional experience.
      </p>

      {/* Skills Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-6xl w-full">
        {skillCategories.map((category, index) => (
          <article
            key={index}
            className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-2 flex flex-col"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-300">
              {category.title}
            </h3>
            <ul className="space-y-2 flex-1">
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 animate-bounce text-gray-500 text-sm sm:text-base text-center">
        ⬇ Scroll Down
      </div>
    </section>
  );
};

export default Skills;
