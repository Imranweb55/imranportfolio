import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Apni IDs yahan dalo (EmailJS Dashboard se)
    emailjs
      .sendForm(
        "service_jf4skba",
        "template_ei9gnkm",
        form.current,
        "gYeleFFNsfdH6wyHF",
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("SUCCESS! Message Sent.");
          setIsSending(false);
          form.current.reset(); // Form clear kar dega
        },
        (error) => {
          console.log(error.text);
          setStatus("FAILED... Try again later.");
          setIsSending(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-40 px-6 lg:px-20 flex flex-col items-center"
    >
      {/* HEADER */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-white text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
          GET IN <span className="font-bold">TOUCH</span>
        </h2>
        <p className="text-gray-400 tracking-widest text-sm md:text-base">
          Ready to Elevate Your Vision?
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE INFO */}
        <div className="space-y-10 order-2 lg:order-1">
          <ContactInfo Icon={FaMapMarkerAlt} title="Chennai, India" />
          <ContactInfo
            Icon={FaPhoneAlt}
            title="+91 89397 20567"
            link="tel:+918939720567"
          />
          <ContactInfo
            Icon={FaEnvelope}
            title="imran.softdev1@gmail.com"
            link="mailto:contact@imranportfolio.com"
          />
        </div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <div className="order-1 lg:order-2 space-y-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-emerald-950/20 p-8 rounded-sm border border-white/5 backdrop-blur-sm"
          >
            <div className="space-y-2">
              <input
                type="text"
                name="name" // Template mein yahi naam use karna
                required
                placeholder="NAME"
                className="w-full bg-transparent border border-gray-500/50 p-4 text-white text-xs tracking-widest focus:border-emerald-500 focus:outline-none transition-all placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                name="email" // Template mein yahi naam use karna
                required
                placeholder="EMAIL"
                className="w-full bg-transparent border border-gray-500/50 p-4 text-white text-xs tracking-widest focus:border-emerald-500 focus:outline-none transition-all placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                name="title" // Template mein yahi naam use karna
                required
                placeholder="SUBJECT"
                className="w-full bg-transparent border border-gray-500/50 p-4 text-white text-xs tracking-widest focus:border-emerald-500 focus:outline-none transition-all placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <textarea
                name="message"
                required
                rows="5"
                placeholder="MESSAGE"
                className="w-full bg-transparent border border-gray-500/50 p-4 text-white text-xs tracking-widest focus:border-emerald-500 focus:outline-none transition-all placeholder:text-gray-500 resize-none"
              ></textarea>
            </div>

            <button
              disabled={isSending}
              className="w-full py-4 bg-gradient-to-r from-gray-100 to-gray-300 text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all transform lg:hover:-translate-y-1 active:scale-95 tracking-[0.2em] text-xs uppercase disabled:opacity-50"
            >
              {isSending ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p
              className={`text-center text-xs tracking-widest ${status.includes("SUCCESS") ? "text-emerald-400" : "text-red-400"}`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

const ContactInfo = ({ Icon, title, link }) => (
  <div className="flex items-center space-x-6 group cursor-pointer">
    <div className="relative w-16 h-16 flex-shrink-0">
      <div className="absolute inset-0 border-[2px] border-gray-500/30 scale-110 rounded-sm group-hover:border-emerald-500 transition-colors"></div>
      <div className="absolute inset-0 border border-white/20 -translate-x-1 -translate-y-1 rounded-sm"></div>
      <div className="relative w-full h-full bg-emerald-950/40 flex items-center justify-center backdrop-blur-md">
        <Icon className="text-white text-xl group-hover:text-emerald-400 transition-colors" />
      </div>
    </div>
    {link ? (
      <a
        href={link}
        className="text-gray-300 text-sm md:text-base tracking-widest hover:text-white transition-colors uppercase"
      >
        {title}
      </a>
    ) : (
      <span className="text-gray-300 text-sm md:text-base tracking-widest uppercase">
        {title}
      </span>
    )}
  </div>
);

export default Contact;
