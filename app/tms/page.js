"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaShieldAlt,
  FaDatabase,
  FaCalendarAlt,
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
            <div className="w-full max-w-5xl mx-auto px-3 md:px-6 py-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                {/* Main Download Section */}
                <div className="flex flex-col md:flex-row justify-between gap-6 p-6">
                  {/* Left Side */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/tms-logo.ico"
                        alt="Tailor Management System"
                        width={100}
                        height={100}
                        className="rounded-2xl border border-gray-200"
                      />
                    </div>

                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">
                        Tailor Management System
                      </h1>

                      <p className="text-gray-500 mt-1">By Pashto DevZone</p>

                      <p className="text-sm text-gray-500 mt-3">
                        Version 1.1.0
                      </p>

                      <p className="text-sm text-gray-600 mt-2">
                        Professional desktop software for tailoring shops,
                        boutiques, garment stores, and custom clothing
                        businesses.
                      </p>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex flex-col items-center justify-center">
                    <button
                      onClick={() => {
                        const code = prompt("Enter License Code");

                        if (code === "tms.armazenith") {
                          const link = document.createElement("a");
                          link.href =
                            "/downloads/Tailor_Management_System_1.1.0.exe";
                          link.download = "Tailor_Management_System_1.1.0.exe";
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        } else {
                          alert(
                            "Invalid License Code. Contact WhatsApp to get access.",
                          );
                        }
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-md transition cursor-pointer"
                    >
                      Download Application (82.06 MB)
                    </button>

                    <a
                      href="https://wa.me/923195341283"
                      target="_blank"
                      className="text-blue-600 text-sm mt-3 hover:underline"
                    >
                      Need License Code? Contact WhatsApp
                    </a>
                  </div>
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-3 py-5">
                    <FaCalendarAlt className="text-green-600 text-xl" />
                    <div>
                      <p className="font-semibold">Last Updated</p>
                      <p className="text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 py-5 border-y md:border-y-0 md:border-x border-gray-200">
                    <FaShieldAlt className="text-green-600 text-xl" />
                    <div>
                      <p className="font-semibold">Security</p>
                      <p className="text-sm text-gray-500">
                        Verified & Protected
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 py-5">
                    <FaDatabase className="text-green-600 text-xl" />
                    <div>
                      <p className="font-semibold">Offline Support</p>
                      <p className="text-sm text-gray-500">
                        Works Without Internet
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Tailor Management System
                </h2>

                <p className="text-gray-600 leading-8">
                  Tailor Management System is a complete desktop solution
                  designed for tailoring businesses. It helps manage customers,
                  measurements, orders, delivery dates, and business records in
                  a professional and organized way. The system is built for
                  speed, simplicity, and offline usage, making it suitable for
                  both small and large tailoring shops.
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-xl mb-3">Main Features</h3>

                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Customer Management</li>
                    <li>✓ Measurement Management</li>
                    <li>✓ Order Tracking System</li>
                    <li>✓ Delivery Date Tracking</li>
                    <li>✓ Dashboard Analytics</li>
                    <li>✓ Search & Filter Records</li>
                    <li>✓ Offline Data Storage</li>
                    <li>✓ Fast and Lightweight Desktop Software</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-xl mb-3">Available Pages</h3>

                  <div className="grid md:grid-cols-2 gap-3 text-gray-600">
                    <div>• Dashboard</div>
                    <div>• Add Customer</div>
                    <div>• Customer Records</div>
                    <div>• Order Management</div>
                    <div>• Measurements</div>
                    <div>• Search Orders</div>
                    <div>• Delivery Tracking</div>
                    <div>• Business Analytics</div>
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-xl bg-gray-50 border border-gray-200">
                  <h3 className="font-bold mb-2">Need Custom Software?</h3>

                  <p className="text-gray-600">
                    I develop custom business software, automation tools,
                    management systems, websites, and AI-powered solutions
                    tailored to your business requirements. Contact me to
                    discuss your project.
                  </p>
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
