import React, { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (project) => setHoveredProject(project);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => setHoveredProject(null);

  return (
    <section className="py-12 px-6 text-center relative" id="projects">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-tight">
        Projects
      </h2>

      {/* Floating box follows cursor */}
      {hoveredProject && (
        <div
          style={{
            position: "fixed",
            top: mousePosition.y - 180, // offset above cursor
            left: mousePosition.x - 200, // offset from left
            width: "400px",
            pointerEvents: "none", // avoids mouse trap
            zIndex: 1000,
          }}
          className="bg-white border border-indigo-500 p-4 rounded-xl shadow-xl text-left backdrop-blur-md"
        >
          <h3 className="text-lg font-bold text-indigo-700 mb-1">
            {hoveredProject.title}
          </h3>
          <p className="text-sm text-gray-500 italic mb-2">
            {hoveredProject.tech}
          </p>
          <p className="text-gray-700 text-sm">{hoveredProject.description}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {projects.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => handleMouseEnter(p)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="transform transition-transform duration-500 hover:scale-105 border border-gray-200 rounded-2xl p-6 shadow-lg bg-white/80 backdrop-blur-lg cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-2">{p.title}</h3>
            <p className="text-sm text-gray-500 italic">{p.tech}</p>
            <p className="text-gray-700 mt-4 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


const projects = [
    {
        title: 'Taskify',
        tech: 'React, Node, MongoDB',
        description: 'Task management app with real-time updates.',
    },
    {
        title: 'ShopHub',
        tech: 'Express, MongoDB, React',
        description: 'E-commerce platform with Stripe integration.',
    },
];
