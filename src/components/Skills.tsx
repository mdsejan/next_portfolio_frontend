import Image from "next/image";
import react from "@/../public/assets/react.png";
import git from "@/../public/assets/git.png";
import firebase from "@/../public/assets/firebase.png";
import tailwindcss from "@/../public/assets/tailwindcss.png";
import html from "@/../public/assets/html.png";
import css from "@/../public/assets/css.png";
import javascript from "@/../public/assets/javascript.png";
import bootstrap from "@/../public/assets/bootstrap.png";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-[25rem] md:min-h-[30rem] bg-[#1d1d1d] shadow-sm px-0 py-16 xl:px-32 md:py-24 mt-[0.2rem]"
    >
      <h2 className="text-center text-3xl">
        Explore My
        <span className="text-[#c8f31d]"> Expertise & Abilities</span>
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
        {[
          { src: react, alt: "React", name: "React" },
          { src: firebase, alt: "Firebase", name: "Firebase" },
          { src: git, alt: "Git", name: "Git" },
          { src: tailwindcss, alt: "TailwindCSS", name: "TailwindCSS" },
          { src: bootstrap, alt: "Bootstrap", name: "Bootstrap" },
          { src: html, alt: "HTML", name: "HTML" },
          { src: css, alt: "CSS", name: "CSS" },
          { src: javascript, alt: "JavaScript", name: "JavaScript" }
        ].map((skill) => (
          <div
            key={skill.name}
            className="bg-black flex flex-col items-center p-3 md:p-6 rounded-md shadow-sm w-1/3 md:w-1/4 lg:w-1/6"
          >
            <Image src={skill.src} alt={skill.alt} width={64} height={64} />
            <h2 className="mt-4 text-sm md:text-base">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
