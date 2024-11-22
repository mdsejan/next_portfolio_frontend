import React from "react";

const Education: React.FC = () => {
  return (
    <div
      id="education"
      className="min-h-[25rem] md:min-h-[30rem] bg-[#1d1d1d] shadow-sm p-4 md:px-16 md:py-24 mt-[0.2rem]"
    >
      <div className="mb-8">
        <p className="text-center text-xl my-4 text-[#646464]">About My</p>
        <h2 className="text-center text-3xl">
          Educational
          <span className="text-[#c8f31d]"> Qualifications</span>
        </h2>
      </div>

      <div className="max-w-[80%] xl:max-w-[50%] mx-auto py-16">
        <ol className="relative border-s-2 border-gray-700">
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border-2 border-white bg-[#c8f31d]" />
            <time className="text-md font-normal leading-none text-[#c8f31d]">
              2021
            </time>
            <h3 className="text-lg font-medium text-white my-4">
              Bachelor of Science (B.Sc.) | Geography And Environment
            </h3>
            <p className="text-base font-normal text-[#646464]">
              National University | Passing Year: 2021
            </p>
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <p className="text-center text-xl my-4 text-[#646464]">About My</p>
        <h2 className="text-center text-3xl">
          Completed
          <span className="text-[#c8f31d]"> Courses</span>
        </h2>
      </div>

      <div className="max-w-[80%] xl:max-w-[50%] mx-auto py-16">
        <ol className="relative border-s-2 border-gray-700">
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border-2 border-white bg-[#c8f31d]" />
            <time className="text-md font-normal leading-none text-[#c8f31d]">
              Dec 2023
            </time>
            <h3 className="text-lg font-medium text-white my-4">
              Complete Web Development
            </h3>
            <p className="text-base font-normal text-[#646464]">
              Programming Hero
            </p>
          </li>
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border-2 border-white bg-[#c8f31d]" />
            <time className="text-md font-normal leading-none text-[#c8f31d]">
              Jun 2021
            </time>
            <h3 className="text-lg font-medium text-white my-4">
              Web Design and Development
            </h3>
            <p className="text-base font-normal text-[#646464]">
              Learning & Earning Development Project - LEDP
            </p>
          </li>
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border-2 border-white bg-[#c8f31d]" />
            <time className="text-md font-normal leading-none text-[#c8f31d]">
              Dec 2020
            </time>
            <h3 className="text-lg font-medium text-white my-4">
              WordPress Theme Customization
            </h3>
            <p className="text-base font-normal text-[#646464]">
              National Academy for Computer Training & Research (NACTAR)
            </p>
          </li>
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border-2 border-white bg-[#c8f31d]" />
            <time className="text-md font-normal leading-none text-[#c8f31d]">
              July 2020
            </time>
            <h3 className="text-lg font-medium text-white my-4">
              Webpage Design
            </h3>
            <p className="text-base font-normal text-[#646464]">
              National Academy for Computer Training & Research (NACTAR)
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Education;
