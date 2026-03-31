import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import PerImage from "../assets/images/my-image.png";

function Home() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center px-6 lg:px-20 py-44"
      id="home"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-white text-5xl md:text-7xl font-light tracking-tighter leading-tight">
              IMRAN <span className="font-bold">I</span>
            </h1>
            <h2 className="text-emerald-500 text-lg md:text-xl font-medium tracking-[0.3em] uppercase">
              Software Engineer & Freelancer
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed font-light">
              A passionate{" "}
              <span className="text-white font-medium">
                Full-Stack Developer
              </span>{" "}
              &
              <span className="text-white font-medium"> Software Engineer</span>{" "}
              specializing in building high-performance applications. With
              expertise in the
              <span className="text-emerald-400"> MERN Stack</span>,
              <span className="text-emerald-400"> Java</span>, and
              <span className="text-emerald-400"> Android Development</span>, I
              bridge the gap between complex backend logic and intuitive user
              experiences. Dedicated to writing clean, scalable code and turning
              visionary ideas into impactful digital solutions.
            </p>
          </div>

          {/* SOCIAL ICONS - Added active:scale-90 for mobile tap */}
          <div className="flex items-center flex-wrap gap-5 md:gap-6 text-gray-400 text-2xl pt-4">
            <a
              href="https://www.linkedin.com/in/imransoftdev02/ "
              target="_blank"
              rel="noreferrer"
              className="active:scale-90 transition-transform"
            >
              <FaLinkedin className="hover:text-emerald-400 lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-emerald-400" />
            </a>

            <a
              href="https://github.com/Imranweb55"
              target="_blank"
              rel="noreferrer"
              className="active:scale-90 transition-transform"
            >
              <FaGithub className="hover:text-white lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-white" />
            </a>

            <a
              href="https://x.com/Imran885936406"
              target="_blank"
              rel="noreferrer"
              className="active:scale-90 transition-transform"
            >
              <FaTwitter className="hover:text-pink-500 lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-pink-500" />
            </a>

            <a
              href="https://wa.me/918939720567?text=Hi%20Imran,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noreferrer"
              className="active:scale-90 transition-transform"
            >
              <FaWhatsapp className="hover:text-green-500 lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-green-500" />
            </a>

            <a
              href="mailto:imran.softdev1@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="active:scale-90 transition-transform"
            >
              <FaEnvelope className="hover:text-blue-400 lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-blue-400" />
            </a>

            <a
              href="tel:+918939720567"
              className="active:scale-90 transition-transform"
            >
              <FaPhoneAlt className="hover:text-emerald-400 lg:hover:scale-110 transition-all duration-300 cursor-pointer text-[1.2rem] active:text-emerald-400" />
            </a>
          </div>

          {/* ACTION BUTTONS - Added active:scale-95 for button press feel */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/Imran_Software_Engineer.pdf"
              download="Imran_Resume"
              className="inline-block"
              target="_blank"
            >
              <button className="px-8 py-3 cursor-pointer bg-gradient-to-r from-gray-100 to-gray-300 text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] lg:hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all transform lg:hover:-translate-y-1 active:scale-95 active:shadow-inner">
                Download CV
              </button>
            </a>

            <a href="#contact">
              <button className="px-8 py-3 cursor-pointer border border-emerald-500 text-emerald-500 font-semibold rounded-full lg:hover:bg-emerald-500/10 transition-all transform lg:hover:-translate-y-1 active:scale-95 active:bg-emerald-500/20">
                GET IN TOUCH
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: PROFILE IMAGE */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative p-2 group">
            <div className="absolute inset-0 border-[2px] border-gray-500/30 scale-105 rounded-sm"></div>
            <div className="absolute inset-0 border-[1px] border-gray-200/50 -translate-x-3 -translate-y-3 rounded-sm"></div>

            <div className="relative w-72 h-96 md:w-100 md:h-[550px] border-[8px] border-gray-400/20 overflow-hidden shadow-2xl">
              <img
                src={PerImage}
                alt="Profile"
                className="w-full h-full object-cover grayscale-[20%] lg:group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-emerald-500"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-emerald-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
