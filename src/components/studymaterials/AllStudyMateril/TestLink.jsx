import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

const TestLink = () => {
  const { getAllVideo, videos } = useContext(AdminContext);
  useEffect(() => {
    getAllVideo();
  }, []);

  return (
    <div className="flex flex-col gap-5 py-5 md:py-10">
      <h2 className="text-4xl underline font-medium text-center sm:text-left">
        Test Yourself
      </h2>
      <div className="flex flex-col sm:flex-row items-start justify-between gap-10 bg-white p-5 shadow-sm rounded-lg py-10">
        <div className="w-full sm:w-1/2 space-y-5 px-5 sm:px-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-blue-600">
            PRASAD MASTER CLASSES (SAVE YOUR STUDY TIME UPTO 40%)
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 tracking-wider">
            Explore your Exam Test Series!! Here?
          </p>
          <ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
            <li>CBSE Class XII Science</li>
            <li>CBSE Class IX</li>
            <li>IIT JEE</li>
            <li>Engineering</li>
            <li>School Level</li>
          </ul>
          <p className="text-xl text-gray-600 tracking-wide pl-5">
            For your more information visit the given Link...
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-between gap-10">
          <video
            className="w-full h-64 sm:h-96 object-cover bg-center border rounded-lg"
            controls
            autoplay
            loop
            src={videos[0]?.video}
          >
            Your browser does not support the video tag.
          </video>

          <a
            href="https://prasadmasterclasses.com/"
            target="_blank"
            className="text-blue-600 text-xl border border-blue-600 w-full py-3 text-center rounded-lg hover:bg-blue-500 hover:text-white duration-500 cursor-pointer"
          >
            Prasad Master Classes <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestLink;
