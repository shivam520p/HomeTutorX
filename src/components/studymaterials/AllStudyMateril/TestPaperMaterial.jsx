import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { ImEnlarge2, ImShrink2 } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const TestPaperMaterial = () => {
  const { allTestPapers, deleteTestPaper, deleteIdx, deletingTest,deletingConfirm } =
    useContext(AdminContext);
    const location=useLocation();   
useEffect(()=>{
},[allTestPapers])
  const [activeTestPaper, setActiveTestPaper] = useState(null);
  return (
    <div
      className={`${
        activeTestPaper === null
          ? "md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1  gap-2"
          : "grid-cols-1 gap-3"
      } grid  transition-all duration-[0.4s] `}
    >
      {allTestPapers?.map((testPaper, index) => (
        <div className="relative">
          <div
            className={`relative rounded-lg p-5 flex flex-col gap-1 items-start border transition-all duration-[0.7s] ${
              activeTestPaper === index
                ? "h-screen overflow-auto  w-full "
                : activeTestPaper === null
                ? "overflow-hidden w-50 h-20 md:h-20 lg:h-32"
                : "hidden"
            } ${deleteIdx === testPaper?._id && "scale-0"} `}
          >
            <div className="w-full flex justify-between ">
             {location.pathname==='/dashboard' && <FaTrash
                onClick={() => {
                  deleteTestPaper(testPaper?._id);
                }}
                className="text-sm hover:text-red-400 cursor-pointer "
              />}
              {activeTestPaper !== index && (
                <ImEnlarge2
                  className=" hover:text-gray-500 cursor-pointer"
                  onClick={() => setActiveTestPaper(index)}
                />
              )}
              {activeTestPaper === index && (
                <ImShrink2
                  className=" hover:text-gray-500 cursor-pointer"
                  onClick={() => setActiveTestPaper(null)}
                />
              )}
            </div>
            <h2
              className={`text-md lg:text-2xl font-serif underline text-center w-full`}
            >
              {testPaper?.title}
            </h2>
            <div className="flex justify-between gap-2 text-xs lg:text-[16px] font-mono w-full py-2 border-b ">
              <h1>
                Class:
                <span className=" text-gray-600 ">
                  {testPaper?.classId?.className}
                </span>
              </h1>
              <h1>
                Subject:
                <span className=" text-gray-600 ">
                  {testPaper?.subject?.subjectName}
                </span>
              </h1>
            </div>
            {testPaper?.questions?.map((question, index) => (
              <div
                key={index}
                className="transition-all duration-[0.5s]  p-4 w-full "
              >
                <div className="gap-2 flex justify-between">
                  <p className="text-xl font-bold">{`${index + 1}) ${
                    question?.questionText
                  }?`}</p>
                  <span className="text-gray-400">
                    {question?.marks} {question?.marks > 1 ? "Marks" : "Mark"}
                  </span>
                </div>
                <div className="grid grid-cols-2 p-2">
                  {question?.options?.map((option, optionIndex) => (
                    <p
                      key={optionIndex}
                      className={`w-1/2 px-2 py-1 rounded-lg`}
                    >
                      {`${String.fromCharCode(97 + optionIndex)}) ${
                        option?.optionText
                      }`}
                    </p>
                  ))}
                </div>
              </div>
        ))}
          {deletingTest===testPaper?._id && <div className="border-2 animate-spin border-t-transparent rounded-full w-12 h-12 absolute left-[40%] border-blue-600"></div>}
        </div>
        <div className={`text-xl absolute left-[30%] top-10 text-gray-400 ${deletingConfirm===testPaper?._id?'scale-100':'scale-0'} transition-all duration-[0.7s]`}>Test Paper deleted</div>
          </div>
      ))}
    </div>
  );
};

export default TestPaperMaterial;
