/* eslint-disable react/prop-types */
import React from "react";
import {
  FaJava,
  FaReact,
  FaCloud,
  FaCheckCircle,
  FaAward,
  FaNodeJs,
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { DiDatabase } from "react-icons/di";

// --- HELPER COMPONENTS (With Mobile Active Effects) ---

const SkillCard = ({ title, children }) => (
  <div className="relative bg-emerald-950/40 backdrop-blur-md border-[1px] border-white/20 p-8 rounded-sm shadow-2xl flex flex-col items-center transition-all duration-300 active:border-emerald-500/50 active:scale-[0.98]">
    <div className="absolute inset-2 border border-white/5 pointer-events-none"></div>
    <h3 className="text-gray-300 text-sm md:text-base tracking-[0.2em] font-medium border-b border-emerald-500/50 pb-2 mb-6 uppercase w-full text-center">
      {title}
    </h3>
    {children}
  </div>
);

const SkillIcon = ({ Icon, label }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div className="w-16 h-16 border border-white/20 bg-emerald-900/30 flex items-center justify-center rounded-sm mb-2 lg:group-hover:border-emerald-400 lg:group-hover:scale-110 transition-all duration-300 shadow-lg active:scale-90 active:border-emerald-400 active:bg-emerald-800">
      {Icon && (
        <Icon className="text-white text-2xl lg:group-hover:text-emerald-400 active:text-emerald-400" />
      )}
    </div>
    <span className="text-[10px] text-gray-400 tracking-widest uppercase text-center group-active:text-white">
      {label}
    </span>
  </div>
);

const ProgressBar = ({ label, percent }) => (
  <div className="w-full space-y-2 group cursor-pointer active:opacity-80 transition-opacity">
    <div className="flex justify-between text-[10px] text-gray-300 tracking-widest lg:group-hover:text-white transition-colors">
      <span>{label}</span>
      <span>({percent})</span>
    </div>
    <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
      <div
        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] transition-all duration-500 group-active:brightness-125"
        style={{ width: percent }}
      ></div>
    </div>
  </div>
);

const CertItem = ({ Icon, text }) => (
  <div className="flex items-center space-x-4 w-full p-2 border border-white/10 bg-black/20 rounded-sm transition-all active:bg-emerald-900/20 active:border-emerald-500/30">
    {Icon && <Icon className="text-emerald-500" />}
    <span className="text-xs text-gray-300 tracking-wider">{text}</span>
  </div>
);

const WorkflowItem = ({ label }) => (
  <div className="flex items-center space-x-3 group cursor-pointer active:translate-x-2 transition-transform duration-300">
    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_emerald] group-active:scale-150 transition-transform"></div>
    <span className="text-xs text-gray-400 tracking-widest uppercase lg:group-hover:text-white active:text-white transition-colors">
      {label}
    </span>
  </div>
);

// --- MAIN SKILLS COMPONENT ---

function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-37 md:py-37 px-6 lg:px-20 flex flex-col items-center"
    >
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-white text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
          PROFESSIONAL <span className="font-bold">SKILLS</span>
        </h2>
        <p className="text-gray-400 tracking-widest text-sm md:text-base">
          Leveraging technical and core competencies to deliver innovative
          solutions
        </p>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <SkillCard title="TECHNICAL PROFICIENCY">
          <div className="grid grid-cols-3 gap-6 pt-4">
            <a
              href="https://www.java.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SkillIcon Icon={FaJava} label="Java" />
            </a>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SkillIcon Icon={FaReact} label="React" />
            </a>
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SkillIcon Icon={FaNodeJs} label="Node" />
            </a>
            <a
              href="https://www.mysql.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SkillIcon Icon={DiDatabase} label="MySQL" />
            </a>
            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SkillIcon Icon={SiFigma} label="Figma" />
            </a>
            <a
              href="https://aws.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SkillIcon Icon={FaCloud} label="Cloud" />
            </a>
          </div>
        </SkillCard>

        <SkillCard title="CORE COMPETENCIES">
          <div className="space-y-6 pt-4 w-full">
            <ProgressBar label="Mern Stack Developer" percent="95%" />
            <ProgressBar label="Java FullStack Developer" percent="75%" />
            <ProgressBar label="Ui UX Designer" percent="90%" />
            <ProgressBar label="Andriod Development" percent="90%" />
          </div>
        </SkillCard>

        <SkillCard title="CERTIFICATIONS & WORKFLOWS">
          <div className="space-y-5 pt-4 w-full">
            <CertItem Icon={FaAward} text="Certified Web Development" />
            <CertItem Icon={FaCheckCircle} text="Certified Java Programming" />
            <div className="pt-4 border-t border-white/10 space-y-4">
              <WorkflowItem label="AGILE Methodology" />
              <WorkflowItem label="Software Development Life Cycle" />
              <WorkflowItem label="Analytical Thinking" />
            </div>
          </div>
        </SkillCard>
      </div>
    </section>
  );
}

export default Skills;
