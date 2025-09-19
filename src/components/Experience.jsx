// src/components/Experience.jsx
export default function Experience() {
  const experiences = [
    {
      title: "Wipro",
      role: "Full Stack Developer",
      period: "Oct 2024 – Present",
      description: [
        "Developing modern web applications using Java, Spring Boot, Angular, React, and MySQL.",
        "Implementing REST APIs, JWT authentication, and microservices architecture.",
        "Building responsive dashboards and user interfaces.",
        "Integrating AI-driven features using OpenAI APIs.",
      ],
    },
    {
      title: "Great Learning Platform",
      role: "Java Full Stack Developer Intern",
      period: "May 2022 – Sep 2022",
      description: [
        "Developed 'Shop for Home', an e-commerce web application.",
        "Implemented product catalog, search, and filtering features.",
        "Built secure user login and registration with Angular frontend.",
        "Applied REST APIs and Spring Boot backend for order and inventory management.",
      ],
    },
    {
      title: "Cognizant Technology Solutions",
      role: "Quality Engineering Assurance Intern",
      period: "Feb 2022 – Apr 2022",
      description: [
        "Performed functional and regression testing on Coursera web app.",
        "Gained experience in the software testing lifecycle (STLC).",
        "Automated testing using Selenium and Postman.",
        "Documented bugs and assisted in creating testing best practices.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="
        min-h-screen 
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
        text-white px-4 sm:px-10 lg:px-12 
        pt-6 sm:pt-16 pb-20   /* reduced top padding on mobile */
        scroll-mt-16
      "
    >
      {/* Section Title */}
      <h2 className="mt-0 sm:mt-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
        Experience
      </h2>

      {/* Experience Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-2 flex flex-col"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-blue-300 font-semibold">{exp.title}</span>
              <span className="text-gray-500 text-sm">{exp.period}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              {exp.role}
            </h3>

            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base flex-1">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 animate-bounce text-gray-500 text-sm sm:text-base text-center">
        ⬇ Scroll Down
      </div>
    </section>
  );
}
