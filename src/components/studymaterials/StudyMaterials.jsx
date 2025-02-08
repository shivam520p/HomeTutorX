import React from "react";
import StudySection1 from "./StudySection1";
import LibraryImg from "../../assets/images/LibraryImg.webp";

const StudyMaterials = () => {
  return (
    <>
      <section className="mt-20 lg:mt-24 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-8 sm:py-12 lg:py-16 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 text-center">
            Study Materials
          </h1>
          <div className="flex justify-center items-center gap-2 text-lg">
            <a
              href="/"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em className="text-gray-500">
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a
              href="/tutorsection"
              className="text-amber-500 hover:text-amber-600"
            >
              Study Materials
            </a>
          </div>
        </div>
      </section>
      <div className="w-full bg-red-200">
        {/* Responsive image height */}
        <img
          src={LibraryImg}
          alt="Library"
          className="w-full h-auto sm:h-[400px] md:h-[500px]"
        />
      </div>
      <div className="container mx-auto">
        <StudySection1 />
      </div>
    </>
  );
};

export default StudyMaterials;
