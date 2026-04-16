"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import {
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Work from '../components/Work';
import { motion } from "framer-motion";
import End from '../components/End';

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
                     transition={{ duration: 0.6 }} className="w-[98%] md:w-[85%] felx items-center justify-center">
     
               <Work/>
     
               </motion.div>
             </div>
               <End/>
           </div>




    </>
  )
}

export default page
