"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaBriefcase,
  FaFileAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Works", path: "/works", icon: <FaBriefcase /> },
    { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
    { name: "Contact", path: "/contact", icon: <FaPhone /> },
  ];

  return (
    <nav className="w-full bg-white text-black px-4 md:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* LEFT */}
        <div className="flex items-center gap-16">
          <Link href="/">
            <Image
              src="/pd_logo.png"
              alt="Logo"
              width={55}
              height={55}
              className="cursor-pointer"
            />
          </Link>

          {/* EMAIL */}
          <div className="hidden transition-all duration-300 hover:bg-red-600 hover:-rotate-3 hover:shadow-xl/30 hover:text-white px-2 py-2 md:flex items-center gap-2 text-sm cursor-pointer">
            <a
              target="_blank"
              href="mailto:armandevelopers1298@gmail.com"
              className="flex items-center gap-4 group"
            >
              <FaEnvelope />
              <span>armandevelopers1298@gmail.com</span>
            </a>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-3 text-sm font-medium">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className={`flex items-center gap-2 cursor-pointer px-2 py-2 transition-all duration-300 hover:text-white hover:bg-red-600 hover:-rotate-3 hover:shadow-xl/30 ${
                  pathname === item.path ? "text-red-500 font-bold" : ""
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {/* EMAIL */}
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope />
            <span>armandevelopers1298@gmail.com</span>
          </div>

          {/* LINKS */}
          <ul className="flex flex-col gap-4">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 px-2 py-2 transition-all duration-300 hover:bg-red-600 hover:text-white ${
                    pathname === item.path ? "text-red-500 font-bold" : ""
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="social flex gap-5.5">
            <li>
              <a target="_blank" href="https://github.com/ADgroupofcompanies">
                <FaGithub className="text-xl ml-4" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/muhammad-yaseen-arman-webdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin className="text-xl ml-4" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.tiktok.com/@pashto_devzone">
                <FaTiktok className="text-xl ml-4" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://youtube.com/@pashto_devzone?si=KNUxsiikRH80tKPo">
                <FaYoutube className="text-xl ml-4" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://wa.me/923195341283">
                <FaWhatsapp className="text-xl ml-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
