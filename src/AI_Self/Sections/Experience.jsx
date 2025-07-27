const experiences = [
  {
    role: "Software Engineer",
    company: "Capgemini",
    duration: "2021 – Present",
    description:
      "Driving innovation in enterprise solutions, collaborating on cross-functional teams, and continuously evolving tech strategies to meet global client needs.",
  },
  // Add more experiences as needed

  {
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "2023 – Present",
    description:
      "Collaborating directly with clients to deliver bespoke web solutions, balancing sleek user experiences with robust backend architecture. Navigating diverse challenges across sectors, I adapt fast, optimize boldly, and ship with confidence.",
  }
  // Add more experiences as needed
];



const Experience = () => (
  <section className="py-12 px-6 text-center">
    <h2 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-tight">
      Past Experiences
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiences.map((exp, i) => (
        <div
          key={i}
          className="transform transition-transform duration-500 hover:scale-105 border border-gray-200 rounded-xl p-6 shadow-md backdrop-blur-lg bg-white/80"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {exp.role} <span className="text-indigo-600">@ {exp.company}</span>
          </h3>
          <p className="text-sm text-gray-500 italic">{exp.duration}</p>
          <p className="text-md text-gray-800">{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
