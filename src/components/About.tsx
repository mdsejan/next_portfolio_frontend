"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const About: React.FC = () => {
  const openExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      id="about"
      className="flex flex-wrap min-h-[20rem] md:min-h-[30rem] bg-[#1d1d1d] shadow-sm p-4 md:px-32 md:py-24 mt-[0.2rem]"
    >
      {/* Left Column */}
      <div className="w-full lg:w-1/3 p-4 rounded-md border border-stone-500">
        <figure className="w-full h-[20rem] md:h-[28rem] lg:h-[20rem] relative">
          <Image
            src="https://i.pinimg.com/736x/41/59/e0/4159e01a63650ea90717383376389736.jpg"
            alt="Developer Profile"
            fill
            className="rounded-md object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            priority
          />
        </figure>
        <div className="text-center text-xl font-light py-5">
          <h4>Md. Sejan</h4>
          <p className="text-base text-[#646464] mt-1">Available For Work</p>
        </div>
        <div className="w-full flex justify-center items-center gap-5 text-xl mb-4">
          <button
            onClick={() =>
              openExternalLink("https://www.facebook.com/sejan.kp/")
            }
            className="p-2 text-white border border-gray-500 rounded-sm hover:bg-gray-200 hover:text-black cursor-pointer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </button>
          <button
            onClick={() => openExternalLink("https://github.com/mdsejan")}
            className="p-2 text-white border border-gray-500 rounded-sm hover:bg-gray-200 hover:text-black cursor-pointer"
            aria-label="GitHub"
          >
            <IoLogoGithub />
          </button>
          <button
            onClick={() =>
              openExternalLink("https://www.linkedin.com/in/sejan-kp/")
            }
            className="p-2 text-white border border-gray-500 rounded-sm hover:bg-gray-200 hover:text-black cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-2/3 py-14 lg:py-5 lg:px-16">
        <h2 className="text-3xl text-center mb-4 underline">About Me</h2>
        <p className="mt-2 font-poppins text-lg font-light lg:text-justify text-[#DADADA]">
          {`Hello there! 👋 I'm Sejan, a Front-End Developer passionate about crafting seamless digital experiences.`}
          <br />
          <span className="my-2 block">
            Starting with <span>HTML, CSS, and JavaScript,</span> {`I've`}
            refined my skills in frameworks like React, Bootstrap, and
            TailwindCSS. I thrive on building dynamic applications using&nbsp;
            <span className="text-[#c8f31d] font-medium">
              Firebase, Axios, and Tanstack Query,&nbsp;
            </span>
            and {`I'm`} skilled in version control with&nbsp;
            <span className="text-[#c8f31d] font-medium">Git and GitHub</span>
            .&nbsp;Venturing beyond the front-end,&nbsp;
            <span className="text-[#c8f31d] font-medium">
              I have explored Express.js, JSON Web Tokens, MongoDB, and the
              Stripe Payment Gateway
            </span>
            .
          </span>
          {`Seeking opportunities to contribute my expertise in a collaborative IT environment, I'm eager to push boundaries and create impactful solutions. Let's connect and create something remarkable together!`}
        </p>
      </div>
    </div>
  );
};

export default About;
