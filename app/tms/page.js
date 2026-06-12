"use client";
import React from "react";
import Navbar from "../components/Navbar";
import {
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Work from "../components/Work";
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
            className="w-[98%] md:w-[85%] felx items-center justify-center"
          >




           <div className="w-full max-w-2xl mx-auto bg-white text-gray-950 p-8 rounded-3xl shadow-2xl border border-gray-200 relative overflow-hidden">

  {/* Decorative Glow */}
  <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-60"></div>

  {/* Header */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
      🧵
    </div>
    <div>
      <h2 className="text-2xl font-bold">Tailor Management System</h2>
      <p className="text-sm text-gray-600">Professional Business Desktop Solution</p>
    </div>
  </div>

  {/* Description */}
  <p className="text-sm text-gray-700 leading-relaxed mb-5">
    A complete management solution for tailoring businesses including customer records,
    billing, measurements, and order tracking. Designed for small to medium tailor shops
    to go digital and grow faster.
  </p>

  {/* Promo */}
  <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl mb-6">
    <p className="text-sm font-semibold mb-1">
      🚀 Need a system like this for your business?
    </p>
    <p className="text-xs text-gray-600">
      Custom software, websites, and automation tools available on request.
    </p>
  </div>

  {/* Download Button */}
  <button
    onClick={() => {
      const code = prompt("Enter License Code");
      const correctCode = "tms.armazenith";

      if (code === correctCode) {
        const link = document.createElement("a");
        link.href = "/downloads/Tailor_Management_System_1.1.0.exe";
        link.download = "Tailor_Management_System_1.1.0.exe";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("Invalid License Code. Contact WhatsApp to get access.");
      }
    }}
    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition shadow-md"
  >
    ⬇ Download Application
  </button>

  {/* WhatsApp */}
  <a
    href="https://wa.me/923195341283"
    target="_blank"
    className="block text-center mt-4 text-sm text-gray-600 hover:text-gray-900"
  >
    Need License Code? Contact on WhatsApp
  </a>

  {/* Footer */}
  <div className="mt-5 text-xs text-gray-500 text-center">
    pashto-devzone.vercel.app/tms
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
