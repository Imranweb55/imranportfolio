import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

// Apne images yahan sahi path se import karein
import Project1Img from "../assets/images/project-1.jpg";
import project2Img from "../assets/images/project-2.jpg";
import project3Img from "../assets/images/project-3.jpg";
import project4Img from "../assets/images/project-4.jpg";

const projectsData = [
  {
    title: "Smart Attendance System",
    category: "Mobile Application",
    description:
      "An AI-powered mobile app for automated attendance tracking using Face Recognition.",
    longDescription:
      "This project solves the manual attendance problem using biometrics. Developed with React Native and Firebase, it features real-time face matching, geo-fencing (attendance only within office/college bounds), and automated monthly report generation in PDF format.",
    mainImage: project2Img,
    tech: ["React Native", "Firebase", "Python (FastAPI)", "OpenCV"],
    liveLink: "https://github.com/Imranweb55/SmartAttendenceApp.git",
    githubLink: "https://github.com/Imranweb55/SmartAttendenceApp.git",
    isLogoCentered: false,
  },
  {
    title: "Full CRUD Inventory System",
    category: "Web Application",
    description:
      "A robust Management System with complete Create, Read, Update, and Delete functionalities.",
    longDescription:
      "A full-stack web application designed to manage stock and sales. It includes a dashboard with real-time charts, user authentication (JWT), and a search/filter system. Built to handle large datasets efficiently with optimized MySQL queries.",
    mainImage: Project1Img,
    tech: ["React.js", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    isLogoCentered: false,
  },
  {
    title: "Digital Marketing Agency Website: Media Entirety",
    category: "Progressing",
    description:
      "New innovation is under development. Stay tuned for something amazing!",
    longDescription:
      "I am currently working on a high-level project involving AI and Cloud computing. This project aims to simplify workflow automation for small businesses. Launching soon!",
    mainImage: project3Img,
    tech: ["Coming Soon"],
    liveLink: "#",
    githubLink: "#",
    isLogoCentered: false,
  },
  {
    title: "Turf Construction Website",
    category: "Progressing",
    description: "Building the next big thing in Software Engineering.",
    longDescription:
      "Currently exploring Blockchain technology to build a decentralized application. Documentation and MVP are in progress.",
    mainImage: project4Img,
    tech: ["Coming Soon"],
    liveLink: "#",
    githubLink: "#",
    isLogoCentered: false,
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-24 md:py-37 px-6 lg:px-20 flex flex-col items-center"
    >
      {/* HEADER */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-white text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
          SELECTED <span className="font-bold">PROJECTS</span>
        </h2>
        <p className="text-gray-400 tracking-widest text-sm md:text-base">
          A Showcase of Strategic Design & Development
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center"
          >
            {/* METALLIC FRAME */}
            <div className="absolute inset-0 border-[3px] border-gray-500/30 scale-[1.03] rounded-sm group-hover:border-emerald-500/50 transition-all duration-500 pointer-events-none"></div>
            <div className="absolute inset-0 border-[1px] border-gray-200/50 -translate-x-3 -translate-y-3 rounded-sm pointer-events-none"></div>

            {/* MAIN CARD */}
            <div className="relative w-full overflow-hidden border-[8px] border-gray-400/20 shadow-2xl transition-all duration-500 bg-black">
              {/* IMAGE AREA */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-2 left-2 bg-emerald-500 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                  {project.category}
                </div>
              </div>

              {/* INFO AREA */}
              <div className="relative bg-[#022A21] p-6 space-y-4 border-t border-white/10 flex flex-col items-center text-center">
                <h3 className="text-white text-lg font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-2">
                  {project.description}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-6 py-2 bg-gradient-to-r from-gray-100 to-gray-300 text-black font-bold rounded-full text-xs tracking-widest hover:shadow-[0_0_20px_white] transition-all active:scale-95"
                >
                  VIEW CASE STUDY
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- FLOATING PROJECT MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative max-w-2xl w-full bg-[#022A21] border border-emerald-500/30 rounded-lg shadow-2xl z-[210] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Modal Image */}
            <img
              src={selectedProject.mainImage}
              className="w-full h-48 object-cover border-b border-emerald-500/20"
              alt=""
            />

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-emerald-500 transition-all"
            >
              <FaTimes />
            </button>

            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-white text-3xl font-bold uppercase tracking-tighter">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-1 rounded-sm uppercase tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                {selectedProject.longDescription}
              </p>

              {/* LINKS */}
              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-bold text-xs hover:bg-emerald-500 transition-all"
                >
                  <FaExternalLinkAlt /> LIVE DEMO
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-white/20 text-white px-5 py-2 rounded-full font-bold text-xs hover:bg-white/10 transition-all"
                >
                  <FaGithub /> GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
