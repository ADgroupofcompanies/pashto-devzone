import React from "react";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <>
      <section className="work mx-4 md:mx-0 flex flex-col gap-4">
        <div className="heading flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-bold">MY WORKS</h2>
          <h3>Few of my Past and present Projects</h3>
          <div className="divide flex items-center">
            <div className="circle h-2 w-2 rounded-full bg-red-800"></div>
            <div className="line h-1 w-32 bg-red-800"></div>
          </div>
        </div>
        <div className="web flex flex-col gap-4 mb-3">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Web Applications</h2>
          </div>
          <div className="projects flex flex-col md:flex-row justify-center items-center md:mr-12 gap-8">
            <div className="project_card hover:-translate-y-2 shadow-2xl transition-all">
              <a target="_blank" href="https://your-todo-app-omega.vercel.app/">
              <div className="img relative group w-fit overflow-hidden rounded-lg">
                <Image
                  src="/todo_app.png"
                  alt="Logo"
                  width={585}
                  height={585}
                  className="cursor-pointer rounded-lg"
                />

                {/* Overlay */}
                <div
                  className="absolute left-0 bottom-0 w-full h-[35%] 
                  bg-black/60 text-white p-4
                  translate-y-full 
                  group-hover:translate-y-0
                  transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold">Todo App</h3>
                  <p className="text-sm opacity-80">
                    A modern task management app with clean UI.
                  </p>
                </div>
              </div>
              </a>
            </div>

            <div className="project_card hover:-translate-y-2 shadow-2xl transition-all">
              <a target="_blank" href="https://password-manager-ad.vercel.app/">
              <div className="img relative group w-fit overflow-hidden rounded-lg">
                <Image
                  src="/password_manager.png"
                  alt="Logo"
                  width={585}
                  height={585}
                  className="cursor-pointer rounded-lg"
                />

                {/* Overlay */}
                <div
                  className="absolute left-0 bottom-0 w-full h-[40%] 
                  bg-black/60 text-white p-4
                  translate-y-full 
                  group-hover:translate-y-0
                  transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold">Todo App</h3>
                  <p className="text-sm opacity-80">
                    Manage and protect your passwords with a clean and
                    user-friendly interface.
                  </p>
                </div>
              </div></a>
            </div>
          </div>
        </div>

        <div className="web flex flex-col gap-4 mb-3">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Vibe Coding Projects</h2>
          </div>
          <div className="projects flex flex-col md:flex-row justify-center items-center md:mr-12 gap-8">
            <div className="project_card hover:-translate-y-2 shadow-2xl transition-all">
              <a target="_blank" href="https://melody-makers-hub-28.lovable.app/">
              <div className="img relative group w-fit overflow-hidden rounded-lg">
                <Image
                  src="/melody.png"
                  alt="Logo"
                  width={585}
                  height={585}
                  className="cursor-pointer rounded-lg"
                />

                {/* Overlay */}
                <div
                  className="absolute left-0 bottom-0 w-full h-[40%] 
                  bg-black/60 text-white p-4
                  translate-y-full 
                  group-hover:translate-y-0
                  transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold">DevAPIHub</h3>
                  <p className="text-sm opacity-80">
                    A powerful API marketplace offering fast, secure, and
                    scalable integrations.
                  </p>
                </div>
              </div></a>
            </div>

            <div className="project_card hover:-translate-y-2 shadow-2xl transition-all">
              <a target="_blank" href="https://parizad-shop.lovable.app/">
              <div className="img relative group w-fit overflow-hidden rounded-lg">
                <Image
                  src="/parizad.png"
                  alt="Logo"
                  width={585}
                  height={585}
                  className="cursor-pointer rounded-lg"
                />

                {/* Overlay */}
                <div
                  className="absolute left-0 bottom-0 w-full h-[35%] 
                  bg-black/60 text-white p-4
                  translate-y-full 
                  group-hover:translate-y-0
                  transition-all duration-500 ease-in-out"
                >
                  <h3 className="text-lg font-bold">PariZad Collection</h3>
                  <p className="text-sm opacity-80">
                    A sleek e-commerce platform in Pakistan with smooth UX.
                  </p>
                </div>
              </div></a>
            </div>
          </div>
        </div>

        <div className="resumeLink flex shadow-2xl h-36 w-full md:w-1/2 mt-3 mb-16">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 px-8">
            <p className="font-bold">I cook with these ingredients 👉</p>
            <Link href="/resume">
              <button className="relative inline-flex items-center overflow-hidden cursor-pointer rounded-full px-4 py-4 font-bold group">
                <span className="absolute left-0 top-0 h-full w-14 bg-red-300 transition-all duration-300 group-hover:w-full group-hover:bg-red-500 rounded-full"></span>
                <span className="relative z-10 flex text-black group-hover:text-white transition-colors duration-300">
                  <span className="mr-1">SEE</span>
                  <span>MY RESUME</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
