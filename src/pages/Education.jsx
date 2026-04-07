import React, { useState } from "react";
import UniversityLogo from "../assets/images/college-logo.png";
import HighSchoolLogo from "../assets/images/school-logo.jpg";
import SecondarySchoolLogo from "../assets/images/school-logo.jpg";

const educationData = [
  {
    title: "B.E. in Computer Science & Engineering",
    institution: "Gojan School of Business and Technology, [Chennai/India]",
    graduated: "Graduated: 2025",
    Percentage: "CGPA: 8.3",
    stream: "Stream: Computer Science and Engineering",
    buttonText: "View Degree Certificate",
    logo: UniversityLogo,
    docUrl: "/certifications/degree-certificate.png", // Apne certificate ka path yahan dein
    collegeURl: "https://gsbt.edu.in/",
  },
  {
    title: "12th Grade (Higher Secondary)",
    institution:
      "Dharmamurthi Rao Bahadur Calavala Cannan Chetty's Higher Secondary School, [Chennai/India]",
    graduated: "Completed: 2021",
    Percentage: "Percentage: 78%",
    stream: "Stream: Science with Mathematics",
    buttonText: "View Mark Sheet",
    logo: HighSchoolLogo,
    docUrl: "/certifications/mark-sheet-12.png",
    collegeURl: "http://drbcccperambur.in/",
  },
  {
    title: "10th Grade (Secondary)",
    institution:
      "Dharmamurthi Rao Bahadur Calavala Cannan Chetty's Higher Secondary School, [Chennai/India]",
    graduated: "Completed: 2019",
    Percentage: "Percentage: 70%",
    stream: "Stream: General Studies",
    buttonText: "View Mark Sheet",
    logo: SecondarySchoolLogo,
    docUrl: "/certifications/mark-sheet-10.png",
    collegeURl: "http://drbcccperambur.in/",
  },
];

function Education() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <section
      id="education"
      className="relative w-full min-h-screen py-32 px-6 lg:px-20 flex flex-col items-center"
    >
      {/* HEADER */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-white text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
          EDUCATIONAL <span className="font-bold">JOURNEY</span>
        </h2>
        <p className="text-gray-400 tracking-widest text-sm md:text-base">
          Explore my academic foundation and learning path
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {educationData.map((edu, index) => (
          <div key={index} className="group relative pt-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-32 h-32 md:w-44 md:h-44 bg-emerald-950 border-[3px] border-gray-400 flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] lg:group-hover:scale-110 active:scale-95 transition-transform duration-500 overflow-hidden">
              <div className="absolute inset-1 border border-white/20 z-10 pointer-events-none"></div>
              <a href={edu.collegeURl} target="_blank">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain z-0"
                />
              </a>
            </div>

            <div className="relative bg-emerald-950/40 backdrop-blur-md border-[1px] border-white/20 p-8 pt-24 md:pt-35 rounded-sm text-center flex flex-col items-center lg:hover:border-emerald-500/80 transition-all duration-500 min-h-[400px] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] active:border-emerald-500 active:scale-[0.98]">
              <div className="absolute inset-[6px] border border-white/10 pointer-events-none"></div>
              <h3 className="text-white text-lg font-semibold leading-snug pt-4">
                {edu.title}
              </h3>
              <div className="text-gray-400 text-sm space-y-2 flex-grow">
                <p className="leading-tight">{edu.institution}</p>
                <p>{edu.graduated}</p>
                <p className="text-gray-200 font-medium">{edu.Percentage}</p>
                <p className="text-emerald-500/80">{edu.stream}</p>
              </div>

              {/* ACTION BUTTON - Open Modal */}
              <button
                onClick={() => setSelectedDoc(edu.docUrl)}
                className="mt-6 px-6 py-2 border border-gray-500 text-gray-300 text-xs font-medium uppercase tracking-widest lg:hover:bg-emerald-500 lg:hover:text-white lg:hover:border-emerald-500 transition-all duration-300 active:scale-90 active:bg-emerald-600 active:text-white"
              >
                {edu.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- SECURE MODAL (VIEWER) --- */}
      {selectedDoc && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          {/* Close Area (Clicking outside modal closes it) */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedDoc(null)}
          ></div>

          <div className="relative max-w-4xl w-full bg-emerald-950 border border-white/20 p-2 rounded-lg shadow-2xl z-[210] flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <span className="text-gray-400 text-xs tracking-widest uppercase">
                Document Viewer
              </span>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-white hover:text-red-500 transition-colors text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Document Image (Disabled Right Click for Basic Protection) */}
            <div className="relative overflow-auto max-h-[80vh] flex justify-center bg-black/50">
              <img
                src={selectedDoc}
                alt="Certificate"
                className="max-w-full h-auto select-none"
                onContextMenu={(e) => e.preventDefault()} // Right-click disable
              />
              {/* Invisible Overlay to block long-press on mobile */}
              <div
                className="absolute inset-0 pointer-events-auto"
                onContextMenu={(e) => e.preventDefault()}
              ></div>
            </div>

            <div className="p-4 text-center">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">
                Secure Preview Mode - Download Disabled
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;
