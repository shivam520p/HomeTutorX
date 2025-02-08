import React, { useContext } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const StudyPdf = () => {
  const {
    studyMaterials,
    deleteStudyMaterial,
    setHandleLink,
    setStudyMaterialData,
    setMaterialId,
  } = useContext(AdminContext);
  console.log(studyMaterials)
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <section className="flex flex-col gap-6 max-h-screen overflow-y-auto p-4">
      {/* Adjust max-height and overflow */}
      {studyMaterials.length > 0 ? (
        studyMaterials.map((material, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg">
            {user?.role === "3" && location.pathname === "/dashboard" && (
              <div className="flex justify-end gap-5 text-lg">
                <FaRegEdit
                  onClick={() => {
                    setHandleLink("studyMaterials");
                    setStudyMaterialData(material);
                    setMaterialId(material._id);
                  }}
                  className="hover:text-indigo-700 cursor-pointer"
                />
                <FaTrash
                  className="hover:text-red-400 cursor-pointer"
                  onClick={() => {
                    deleteStudyMaterial(material._id);
                  }}
                />
              </div>
            )}
            <p className="text-base text-gray-700 mb-4">{material.description}</p>

            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 py-5">
              {material.questionPdf && (
                <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-5">
                  <p className="text-sm sm:text-base text-gray-600 font-semibold">
                    Question PDF
                  </p>
                  <a
                    href={material.questionPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 rounded-md cursor-pointer transition duration-300 ease-in-out"
                    download
                  >
                    View or Download Question PDF
                  </a>
                </div>
              )}

              {material.answerPdf && (
                <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-5">
                  <p className="text-sm sm:text-base text-gray-600 font-semibold">
                    Answer PDF
                  </p>
                  <a
                    href={material.answerPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 rounded-md cursor-pointer transition duration-300 ease-in-out"
                    download
                  >
                    View or Download Answer PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center px-2">
          <h2 className="text-gray-300 text-xl ">No Pdf present for this class</h2>
        </div>
      )}
    </section>
  );
};

export default StudyPdf;
