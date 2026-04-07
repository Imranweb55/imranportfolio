import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

import AboutImg from "../assets/images/my-image2.png";

function About() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-20 py-24"
      id="about"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: IMAGE WITH RADIANT FRAME */}
        <div className="flex justify-center order-1">
          <div className="relative p-1">
            <div className="absolute inset-0 border-[12px] border-gray-400/30 rounded-sm shadow-[0_0_40px_rgba(255,255,255,0.1)]"></div>
            <div className="absolute inset-2 border border-white/40 rounded-sm shadow-inner"></div>

            <div className="relative w-72 h-[400px] md:w-[450px] md:h-[650px] overflow-hidden">
              <img
                src={AboutImg}
                alt="About Imran"
                className="w-full h-full object-cover grayscale-[10%] lg:hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-white/60"></div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-white/60"></div>
          </div>
        </div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <div className="space-y-8 order-2">
          <div className="space-y-4">
            <h2 className="text-white text-5xl md:text-7xl font-light tracking-widest uppercase">
              ABOUT <span className="font-bold">ME</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed font-light max-w-xl">
              <p>
                Welcome, I am{" "}
                <span className="text-white font-medium">Imran I</span>, an
                <span className="text-emerald-400"> Software Engineer</span> and
                Full-Stack Developer based in Chennai, India. I specialize in
                building scalable, high-performance web applications using the
                <span className="text-white"> MERN Stack</span> and
                <span className="text-white"> Java</span>.
              </p>
              <p>
                Beyond just writing code, I am passionate about creating
                seamless
                <span className="text-white"> Digital Experiences</span>.
                Whether it's crafting intuitive UI/UX designs in Figma or
                architecting robust backend systems, I blend analytical
                precision with a creative mindset to solve complex problems.
              </p>
              <p>
                My goal is to help visionary companies build remarkable products
                that connect with users. Let's collaborate and turn your ideas
                into functional, production-ready reality.
              </p>
            </div>
          </div>

          {/* --- BUTTON & ICONS CONTAINER --- */}
          <div className="flex flex-col items-center justify-center  space-y-8 pt-6 w-full lg:max-w-xl">
            {/* EXPLORE ME BUTTON - Mobile Optimized */}
            <a href="#skills">
              <button className="px-10 py-3 cursor-pointer bg-gradient-to-r from-gray-100 to-gray-300 text-black font-bold rounded-full shadow-[0_0_25px_rgba(255,255,255,0.5)] lg:hover:shadow-[0_0_45px_rgba(255,255,255,0.8)] transition-all transform lg:hover:-translate-y-1 active:scale-95 active:shadow-inner tracking-widest text-xs md:text-sm uppercase">
                EXPLORE More
              </button>
            </a>

            {/* SOCIAL ICONS - Mobile Optimized */}
            <div className="flex items-center justify-center flex-wrap gap-5 md:gap-8 text-gray-400 text-2xl">
              <a
                href="https://www.linkedin.com/in/imransoftdev02/ "
                target="_blank"
                rel="noreferrer"
                className="active:scale-90 transition-transform"
              >
                <FaLinkedin className="lg:hover:text-emerald-400 lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-emerald-400" />
              </a>

              <a
                href="https://github.com/Imranweb55"
                target="_blank"
                rel="noreferrer"
                className="active:scale-90 transition-transform"
              >
                <FaGithub className="lg:hover:text-white lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-white" />
              </a>

              <a
                href="https://x.com/Imran885936406"
                target="_blank"
                rel="noreferrer"
                className="active:scale-90 transition-transform"
              >
                <FaTwitter className="lg:hover:text-pink-500 lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-pink-500" />
              </a>

              <a
                href="https://wa.me/918939720567?text=Hi%20Imran,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
                target="_blank"
                rel="noreferrer"
                className="active:scale-90 transition-transform"
              >
                <FaWhatsapp className="lg:hover:text-green-500 lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-green-500" />
              </a>

              <a
                href="mailto:imran.softdev1@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="active:scale-90 transition-transform"
              >
                <FaEnvelope className="lg:hover:text-blue-400 lg:hover:scale-110 transition-all duration-300 cursor-pointer active:text-blue-400" />
              </a>

              <a
                href="tel:+918939720567"
                className="active:scale-90 transition-transform"
              >
                <FaPhoneAlt className="lg:hover:text-emerald-400 lg:hover:scale-110 transition-all duration-300 cursor-pointer text-[1.2rem] active:text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
