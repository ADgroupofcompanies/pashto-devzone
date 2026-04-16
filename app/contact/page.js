"use client";
import React from "react";
import Navbar from "../components/Navbar";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import End from "../components/End";

const page = () => {
  return (
    <>
      <div className="bg-white md:max-w-6xl md:mx-auto sm:rounded-lg p-2 md:shadow-2xl min-h-screen w-screen md:mt-17.5 mb-24 text-gray-700">
        <Navbar />
        <div className="flex">
          <div className="left hidden md:block min-h-screen md:w-[15%] items-center justify-center">
            <div className="h-[80vh] flex items-center justify-start pl-0.5">
              <ul className="social flex flex-col gap-5.5">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/ADgroupofcompanies"
                  >
                    <FaGithub className="text-2xl ml-14" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/muhammad-yaseen-arman-webdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >
                    <FaLinkedin className="text-2xl ml-14" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@pashto_devzone"
                  >
                    <FaTiktok className="text-2xl ml-14" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://youtube.com/@pashto_devzone?si=KNUxsiikRH80tKPo"
                  >
                    <FaYoutube className="text-2xl ml-14" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://wa.me/923195341283">
                    <FaWhatsapp className="text-2xl ml-14" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[98%] md:w-[85%] felx items-center justify-center mb-8 mx-4 md:mr-12"
          >
            <div className="w-full bg-[#F6F6F7] p-8 md:p-12 rounded-xl">
              {/* HEADER */}
              <div className="flex flex-col gap-3 mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-black">
                  Let’s Work Together
                </h2>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-800"></div>
                  <div className="h-1 w-32 bg-red-800"></div>
                </div>

                <p className="text-sm md:text-base text-black opacity-70">
                  Got an idea or need a website for your business? Let’s build
                  something meaningful together — contact me and get started.
                </p>
              </div>

              {/* MAIN GRID */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* LEFT - WHATSAPP FEATURE CARD */}
                <a
                  target="_blank"
                  href="https://wa.me/923195341283"
                  className="bg-green-500 text-white rounded-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-3xl" />
                    <h3 className="text-xl font-semibold">WhatsApp Direct</h3>
                  </div>

                  <p className="text-sm opacity-90 mt-4">
                    Fastest way to reach me. Usually replies within minutes.
                  </p>

                  <div className="mt-6 bg-white text-green-600 font-medium py-2 px-4 rounded-lg w-fit">
                    Chat Now →
                  </div>
                </a>

                {/* RIGHT - CONTACT BOX */}
                <div className="bg-white rounded-xl p-6 flex flex-col gap-6 shadow-sm">
                  {/* EMAIL */}
                  <a
                    target="_blank"
                    href="mailto:armandevelopers1298@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <FaEnvelope className="text-xl text-black group-hover:text-red-500 transition" />
                    <span className="group-hover:text-red-500 transition">
                      Email Me
                    </span>
                  </a>

                  {/* PHONE */}
                  <a
                    target="_blank"
                    href="tel:+923195341283"
                    className="flex items-center gap-4 group"
                  >
                    <FaPhone className="text-xl text-black group-hover:text-blue-500 transition" />
                    <span className="group-hover:text-blue-500 transition">
                      Call Me
                    </span>
                  </a>

                  {/* SOCIAL */}
                  <div className="flex gap-5 text-2xl pt-2">
                    <a
                      target="_blank"
                      href="https://github.com/ADgroupofcompanies"
                      className="text-black hover:text-black hover:scale-125 transition"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/muhammad-yaseen-arman-webdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      className="text-black hover:text-blue-600 hover:scale-125 transition"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      target="_blank"
                      href="https://wa.me/923195341283"
                      className="text-black hover:text-green-500 hover:scale-125 transition"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <End />
      </div>
    </>
  );
};

export default page;
