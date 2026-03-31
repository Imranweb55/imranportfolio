// import React from "react";
// import { FaBriefcase, FaUserTie, FaCode } from "react-icons/fa";

// const experienceData = [
//   {
//     company: "CORALBYTEC PVT LTD",
//     role: "FULL Stack Developer",
//     duration: "6 month (Internship)",
//     desc: "Developed and maintained web application features using JavaScript and backend technologies and Assisted in building REST APIs and integrating frontend with backend systems.",
//     side: "left",
//     Icon: FaUserTie,
//   },
// ];

// function Experience() {
//   return (
//     <section
//       id="experience"
//       className="relative w-full min-h-screen py-37 px-4 md:px-10 lg:px-20 flex flex-col items-center overflow-x-hidden"
//     >
//       {/* HEADER */}
//       <div className="text-center mb-16 space-y-4">
//         <h2 className="text-white text-3xl md:text-6xl font-light tracking-[0.2em] uppercase">
//           PROFESSIONAL <span className="font-bold">EXPERIENCE</span>
//         </h2>
//         <p className="text-gray-400 tracking-widest text-xs md:text-base px-4">
//           A Timeline of Strategic Roles & Achievements
//         </p>
//       </div>

//       <div className="max-w-6xl w-full relative">
//         {/* VERTICAL TIMELINE LINE */}
//         {/* Desktop: Center | Mobile: Left Side */}
//         <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/10"></div>

//         <div className="space-y-12 md:space-y-16">
//           {experienceData.map((exp, index) => (
//             <div
//               key={index}
//               className={`relative flex items-center w-full ${exp.side === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}
//             >
//               {/* GLOWING DOT (Timeline Point) */}
//               <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10">
//                 <div className="w-full h-full rounded-full border border-white/40 animate-ping"></div>
//               </div>

//               {/* CARD CONTAINER */}
//               <div
//                 className={`w-[calc(100%-40px)] md:w-[45%] ml-10 md:ml-0 group`}
//               >
//                 {/* METALLIC FRAME */}
//                 <div className="absolute inset-0 border-[1px] border-gray-500/30 scale-[1.03] rounded-sm pointer-events-none lg:group-hover:border-emerald-500/50 transition-all duration-500"></div>

//                 {/* ACTUAL CARD CONTENT */}
//                 <div className="relative bg-emerald-950/40 backdrop-blur-md border-[4px] md:border-[6px] border-gray-400/20 p-5 md:p-8 space-y-3 shadow-2xl transition-all duration-500 active:scale-95 active:border-emerald-500/50">
//                   {/* Silver Shine Corners */}
//                   <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-emerald-500"></div>
//                   <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-emerald-500"></div>

//                   {/* INFO SECTION */}
//                   <div className="flex items-start md:items-center space-x-3 md:space-x-4">
//                     <div className="min-w-[40px] h-10 md:w-12 md:h-12 bg-black border border-white/20 flex items-center justify-center rounded-sm">
//                       <exp.Icon className="text-emerald-500 text-lg" />
//                     </div>
//                     <div>
//                       <h3 className="text-white text-sm md:text-lg font-bold leading-tight">
//                         {exp.company}{" "}
//                         <span className="hidden md:inline">|</span>{" "}
//                         <br className="md:hidden" />
//                         <span className="font-light text-gray-300">
//                           {exp.role}
//                         </span>
//                       </h3>
//                       <p className="text-emerald-400 text-[10px] md:text-xs tracking-[0.2em] mt-1">
//                         {exp.duration}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-3 font-light">
//                     {exp.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* VIEW CV BUTTON */}
//       <div className="mt-16 md:mt-24">
//         <a
//           href="/Imran_Software_Engineer.pdf"
//           download="Imran_Resume"
//           className="inline-block"
//           target="_blank"
//         >
//           <button className="px-8 py-3 bg-white/5 border border-white/20 text-white rounded-full text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase lg:hover:bg-white lg:hover:text-black transition-all duration-500 active:scale-90 active:bg-white active:text-black">
//             View Full CV (PDF)
//           </button>
//         </a>
//       </div>
//     </section>
//   );
// }
// export default Experience;
