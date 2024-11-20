import React from "react";
import reactLogo from "@/../public/assets/react.png";
import gitLogo from "@/../public/assets/git.png";
import firebaseLogo from "@/../public/assets/firebase.png";
import tailwindLogo from "@/../public/assets/tailwindcss.png";
import bootstrapLogo from "@/../public/assets/bootstrap.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="min-h-[25rem] md:min-h-[30rem] bg-[#1d1d1d] rounded-t-xl md:rounded-t-3xl shadow-sm p-4 md:p-8 mt-4">
      <div className="w-full h-[25rem] md:h-[30rem] flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl my-4 font-poppins text-[#646464] font-semibold">
          Hi There 👋
        </h2>
        <h2 className="text-3xl md:text-6xl text-center leading-[1.5em]">
          I’m
          <span className="text-[#c8f31d] font-medium"> Sejan</span>, Front-end
          Developer
        </h2>
        <div className="py-10 flex flex-wrap justify-center gap-4 md:gap-6">
          {/* React Logo */}
          <div className="bg-black p-[6px] w-8 md:w-12 rounded-lg">
            <Image src={reactLogo} alt="React" />
          </div>
          {/* Firebase Logo */}
          <div className="bg-black p-[6px] w-8 md:w-12 rounded-lg">
            <Image src={firebaseLogo} alt="Firebase" />
          </div>
          {/* Git Logo */}
          <div className="bg-black p-[6px] w-8 md:w-12 rounded-lg">
            <Image src={gitLogo} alt="Git" />
          </div>
          {/* TailwindCSS Logo */}
          <div className="bg-black p-[6px] w-8 md:w-12 rounded-lg">
            <Image src={tailwindLogo} alt="TailwindCSS" />
          </div>
          {/* Bootstrap Logo */}
          <div className="bg-black p-[6px] w-8 md:w-12 rounded-lg">
            <Image src={bootstrapLogo} alt="Bootstrap" />
          </div>
        </div>
        <div>
          <a
            href="/sejan-resume.pdf"
            download
            type="button"
            className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-[#c8f31d] hover:bg-[#c8f31d] text-[#c8f31d] hover:text-black font-normal py-2 px-4 rounded"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
