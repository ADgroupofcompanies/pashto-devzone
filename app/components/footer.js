"use client"
import React from "react";
import Image from "next/image";
import {
  FaBriefcase,
  FaFileAlt,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {

const pathname = usePathname();
  const navItems = [
      { name: "Works", path: "/works", icon: <FaBriefcase /> },
      { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
      { name: "Contact", path: "/contact", icon: <FaPhone /> },
    ];


  return (
    <>
    <div className="flex flex-col gap-2 mb-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-58">
        <Image
          src="/pd_logo.png"
          alt="Logo"
          width={55}
          height={55}
          className="cursor-pointer mix-blend-multiply"
        />

        <ul className="flex items-center gap-3 text-sm font-medium">
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

        <div className="right">© 2026 PDZ. all rights reserved</div>
      </div>
      <div className="h-3.5 w-[75%] flex mx-auto">
        <div className="red w-full bg-red-600"></div>
        <div className="orange w-full bg-orange-400"></div>
        <div className="gray w-full bg-gray-700"></div>
        <div className="blue w-full bg-blue-700"></div>
      </div>
      </div>
    </>
  );
};

export default Footer;
