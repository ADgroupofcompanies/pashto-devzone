import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <section className="top-skills mt-16 flex flex-col gap-8">
        <div className="heading flex ml-8 md:ml-0 flex-col gap-3">
          <h2 className="font-bold text-3xl md:text-4xl">My Top Skills</h2>
          <h3 className="text-lg md:text-xl">What I do</h3>
          <div className="divide flex items-center">
            <div className="circle h-2 w-2 rounded-full bg-red-800"></div>
            <div className="line h-1 w-32 bg-red-800"></div>
          </div>
        </div>
        <div className="box min-h-[80%] flex flex-col md:flex-row justify-center items-center mb-6 rounded-lg shadow-lg mx-2 md:mr-12 bg-[#F6F6F7]">
          <div className="text w-[98%] md:w-[50%] flex flex-col justify-center items-center px-2 md:px-10 text-center py-4 pb-16 gap-6">
            <h2 className="text-xl font-bold">Backend</h2>
            <p>
              I build scalable and maintainable backend applications using
              cutting-edge technologies like ExpresJS, NodeJS, NextJS, Mongoose
              and MongoDB.
            </p>
            <h2 className="text-xl font-bold">Frontend</h2>
            <p>
              I build modern client-side applications using HTML, CSS, Tailwind
              CSS, JavaScript, React.js, and Redux, focusing on clean code and
              smooth, responsive user experiences.
            </p>
            <button className="relative inline-flex items-center overflow-hidden cursor-pointer rounded-full px-4 py-4 font-bold group">
              <span className="absolute left-0 top-0 h-full w-14 bg-red-300 transition-all duration-300 group-hover:w-full group-hover:bg-red-500 rounded-full"></span>

              <span className="relative z-10 flex text-black group-hover:text-white transition-colors duration-300">
                <span className="mr-1">SEE</span>
                <span>MY WORKS</span>
              </span>
            </button>
          </div>
          <div className="image w-[80%]">
            <Image
              src="/vector.jpg"
              alt="Logo"
              width={585}
              height={585}
              className="cursor-pointer mix-blend-multiply bg-[#F6F6F7]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
