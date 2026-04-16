"use client"
import React from "react";
import Navbar from "../components/Navbar";
import {
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPhp,
  SiGithub,
  SiNpm,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";
import { TbBrandVercel } from "react-icons/tb";
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
                  <a target="_blank" href="https://github.com/ADgroupofcompanies">
                    <FaGithub className="text-2xl ml-14" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/muhammad-yaseen-arman-webdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FaLinkedin className="text-2xl ml-14" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.tiktok.com/@pashto_devzone">
                    <FaTiktok className="text-2xl ml-14" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://youtube.com/@pashto_devzone?si=KNUxsiikRH80tKPo">
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
                transition={{ duration: 0.6 }} className="w-[98%] md:w-[85%] flex flex-col items-center justify-center gap-10 mx-4 md:mr-12 mb-8">
            <div className="flex w-full flex-col gap-4 justify-center items-start">
            <h3 className="text-2xl md:text-xl font-semibold">Tech I Use</h3>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-800"></div>
              <div className="h-1 w-32 bg-red-800"></div>
            </div>
            </div>

            {/* ALL TECH BLOCKS */}
            <div className="flex flex-col gap-8 w-full">
              {/* ================= FRONTEND ================= */}
              <div className="bg-[#F6F6F7] p-8 md:p-10 rounded-xl">
                <p className="text-black text-sm md:text-base mb-6">
                  Frontend technologies I use for building interactive
                  client-side applications
                </p>

                <div className="flex flex-wrap gap-6 text-4xl">
                  {[
                    {
                      icon: <FaHtml5 />,
                      name: "HTML",
                      color: "text-orange-500",
                    },
                    {
                      icon: <FaCss3Alt />,
                      name: "CSS",
                      color: "text-blue-500",
                    },
                    {
                      icon: <FaJs />,
                      name: "JavaScript",
                      color: "text-yellow-400",
                    },
                    {
                      icon: <SiTailwindcss />,
                      name: "Tailwind",
                      color: "text-cyan-500",
                    },
                    {
                      icon: <FaBootstrap />,
                      name: "Bootstrap",
                      color: "text-purple-600",
                    },
                    { icon: <FaReact />, name: "React", color: "text-sky-500" },
                    {
                      icon: <SiNextdotjs />,
                      name: "Next.js",
                      color: "text-black",
                    },
                  ].map((tech, i) => (
                    <div key={i} className="group relative cursor-pointer">
                      <div className="text-black grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-300">
                        {tech.icon}
                      </div>

                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= BACKEND ================= */}
              <div className="bg-[#F6F6F7] p-8 md:p-10 rounded-xl">
                <p className="text-black text-sm md:text-base mb-6">
                  Backend technologies I use for APIs, databases and server-side
                  logic
                </p>

                <div className="flex flex-wrap gap-6 text-4xl">
                  {[
                    { icon: <FaNodeJs />, name: "Node.js" },
                    { icon: <SiExpress />, name: "Express" },
                    { icon: <SiMongodb />, name: "MongoDB" },
                    { icon: <SiMysql />, name: "MySQL" },
                    { icon: <SiPhp />, name: "PHP" },
                  ].map((tech, i) => (
                    <div key={i} className="group relative cursor-pointer">
                      <div className="text-black grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-300">
                        {tech.icon}
                      </div>

                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= TOOLS & DEPLOYMENT ================= */}
              <div className="bg-[#F6F6F7] p-8 md:p-10 rounded-xl">
                <p className="text-black text-sm md:text-base mb-6">
                  Tools, version control and deployment platforms I use in
                  development workflow
                </p>

                <div className="flex flex-wrap gap-6 text-4xl">
                  {[
                    { icon: <SiGit />, name: "Git" },
                    { icon: <SiGithub />, name: "GitHub" },
                    { icon: <SiNpm />, name: "NPM" },
                    { icon: <SiPostman />, name: "Postman" },
                    { icon: <SiVercel />, name: "Vercel" },
                    { icon: <SiNetlify />, name: "Netlify" },
                  ].map((tech, i) => (
                    <div key={i} className="group relative cursor-pointer">
                      <div className="text-black grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-300">
                        {tech.icon}
                      </div>

                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
          <End/>
      </div>
    </>
  );
};

export default page;
