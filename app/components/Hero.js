import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="hero flex">
        <div className="right flex h-[60%] md:h-[90%] md:w-[85%] md:flex-row flex-col items-center justify-center">
          <div className="text w-[90%] px-4 md:px-0 md:w-[35%]">
            <div className="flex flex-col justify-center items-start gap-4 md:gap-8">
              <div className="relative inline-block px-2 md:px-4 py-1 md:py-3 text-sm md:text-lg md:font-medium text-white bg-gray-900 rounded-sm shadow-lg">
                It's me
                {/* { <!-- Bottom-right triangle -->} */}
                <div
                  className="absolute -bottom-2 right-4 w-0 h-0 
                border-l-8 border-r-8 border-t-8 
                border-l-transparent border-r-transparent 
                border-t-gray-900"
                ></div>
              </div>
              <div>
                <h1 className="font-bold text-3xl md:text-5xl w-60 md:w-72 text-slate-700">
                  Muhammad{" "}
                  <span className="text-2xl md:text-4xl">Yaseen Arman</span>
                </h1>
                <h3 className="text-xl md:text-2xl font-bold ">
                  Web developer
                </h3>
              </div>
              <span className="animate-[fadeUp_0.7s_ease-out]">
                Yaseen Arman. Web Developer from Peshawar, Pakistan with
                rock-solid in building complex web applications with cutting
                edge technologies.
              </span>
              <a
                target="_blank"
                className="ml-12"
                href="https://wa.me/+923195341283"
              >
                <button
                  className="bg-red-600 border-12 cursor-pointer border-red-400 rounded-full font-bold text-cyan-50 h-20 md:h-24 w-20 md:w-24
  glow-btn
  hover:shadow-[0_0_35px_rgba(248,113,113,1)]
  transition-all duration-300"
                >
                  <span>Let's</span>
                  <span className="px-1"> Talk</span>
                </button>
              </a>
            </div>
          </div>
          <div className="img animate-[fadeUp_0.7s_ease-out] ml-16 md:ml-0 w-[90%] md:w-[65%]">
            <Image
              src="/hero.png"
              alt="Logo"
              width={585}
              height={585}
              loading="eager"
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
