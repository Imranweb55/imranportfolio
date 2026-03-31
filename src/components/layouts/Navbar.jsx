import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/30 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO - Silver Metallic Look */}
        <div className="flex items-center group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="ml-3 text-white text-xl font-medium tracking-widest group-hover:text-emerald-400 transition-colors">
            PORTFOLIO
          </span>
        </div>

        {/* --- DESKTOP LINKS (Ab ye 1024px se upar dikhenge) --- */}
        <div className="hidden md:flex items-center space-x-6 xl:space-x-10">
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                // Home ke liye '#' aur baki ke liye '#about', '#education' etc.
                href={`#${item.toLowerCase() === "home" ? "home" : item.toLowerCase().replace(" ", "-")}`}
                className="relative text-gray-400 text-[12px] xl:text-sm tracking-widest hover:text-white transition-colors duration-300 group whitespace-nowrap cursor-pointer"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ),
          )}

          {/* Button */}
          <a href="#contact">
            <button className="px-5 py-2 border border-emerald-500/50 text-emerald-400 rounded-full text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] cursor-pointer whitespace-nowrap">
              HIRE ME
            </button>
          </a>
        </div>

        {/* --- MOBILE/TAB MENU BUTTON (Ab ye 1024px tak dikhega) --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-2 text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU CONTENT */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-2xl p-6 flex flex-col space-y-4 border-b border-emerald-900">
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === "home" ? "home" : item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-300 py-2 border-b border-white/5"
                onClick={() => setIsOpen(false)} // Menu band ho jaye click par
              >
                {item}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
