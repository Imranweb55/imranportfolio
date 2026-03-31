import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#0a1210] pt-12 pb-8 px-6 overflow-hidden">
      {/* METALLIC TOP BORDER (Silver Line Effect) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        {/* COPYRIGHT TEXT */}
        <div className="text-gray-500 text-[10px] md:text-xs tracking-[0.2em] text-center uppercase">
          © {currentYear} IM PORTFOLIO. ALL RIGHTS RESERVED.
        </div>

        {/* POLICIES LINKS */}
        <div className="flex space-x-6 text-gray-600 text-[9px] md:text-[10px] tracking-widest font-medium uppercase">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>

        {/* SOCIAL ICONS (Niche Small size mein) */}
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
            href="mailto:your-email@example.com"
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
      </div>
    </footer>
  );
}

export default Footer;
