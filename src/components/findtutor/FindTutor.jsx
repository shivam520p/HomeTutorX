import React from "react";
import Tutors from "./Tutors";

export const FindTutor = () => {
  return (
    <>
      <section className="mt-20 md:mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-16">
          <h1 className="text-5xl font-bold text-gray-700">Instructor</h1>
          <div className="flex justify-center items-center gap-2 text-lg">
            <a href="/">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/findtutor" className="text-amber-500">
              Instructor
            </a>
          </div>
        </div>
      </section>
      <Tutors />
    </>
  );
};
