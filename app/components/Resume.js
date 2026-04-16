import React from "react";
import Image from "next/image";
import { FaCode, FaPenNib, FaFeatherAlt, FaChess } from "react-icons/fa";
import { MdOutlineBolt } from "react-icons/md";

const Resume = () => {
  return (
    <>
      <section className="resume">
        <div className="resume min-h-screen w-[98%] md:w-[70%] rounded-lg bg-[#F6F6F7] mx-auto my-24 drop-shadow-lg shadow-2xl p-2 md:p-4">
          <div className="top flex gap-8 h-[50%]">
            <div className="image w-[50%]">
              <Image
                src="/resume_img.png"
                alt="Logo"
                width={585}
                height={585}
                className="cursor-pointer rounded-lg"
              />
            </div>
            <div className="data flex flex-col gap-4 md:gap-10 mt-3 w-[50%]">
              <h2 className="text-xl md:text-3xl underline font-bold cursor-pointer">Yaseen Arman</h2>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 md:gap-3 text-gray-800">
                  <FaCode className="text-red-500 text-sm md:text-xl" />
                  <span className="text-sm md:font-medium">Web Developer</span>
                </div>

                {/* Vibe Coder */}
                <div className="flex items-center gap-2 md:gap-3 text-gray-800">
                  <MdOutlineBolt className="text-yellow-500 text-sm md:text-xl" />
                  <span className="text-sm md:font-medium">Vibe Coder</span>
                </div>

                {/* Writer */}
                <div className="flex items-center gap-2 md:gap-3 text-gray-800">
                  <FaPenNib className="text-blue-500 text-sm md:text-xl" />
                  <span className="text-sm md:font-medium">Writer</span>
                </div>

                {/* Pashto Poet */}
                <div className="flex items-center gap-2 md:gap-3 text-gray-800">
                  <FaFeatherAlt className="text-green-600 text-sm md:text-xl" />
                  <span className="text-sm md:font-medium">Pashto Poet</span>
                </div>

                {/* Fun Fact */}
                <div className="flex items-center gap-2 md:gap-3 text-gray-800">
                  <FaChess className="text-purple-600 text-sm md:text-xl" />
                  <span className="text-sm md:font-medium">
                    Fun Fact: Playing Chess ♟️
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom my-4 mt-16 h-[50%]">
            <div className="heading flex flex-col gap-2.5">
              <h2 className="text-lg md:text-xl font-bold">README</h2>
              <div className="divide flex items-center">
                <div className="circle h-2 w-2 rounded-full bg-red-800"></div>
                <div className="line h-1 w-32 bg-red-800"></div>
              </div>
            </div>
            <div className="text text-sm md:text-lg flex flex-col gap-3 my-2.5">
              <p>
                I am an exceptional MERN Stack Developer with solid knowledge
                and experience in the ever-evolving realm of technology and as a
                person, I have a strong discipline to learn, improve, and
                evolve.
              </p>

              <p>
                My career has been marked by a dedication to technical
                excellence and my expertise lies within the JavaScript
                ecosystem, where I've honed my skills to deliver efficient and
                user-centric software solutions. With a passion for solving
                complex problems, I am committed to pushing the boundaries of
                what's possible in Web Development.
              </p>

              <p>
                When I am not coding, I am either playing chess, writing potry,
                reading books, or watching movies. Other times I enjoy spending
                time in nature and continuously upskilling myself to stay
                updated with modern technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
