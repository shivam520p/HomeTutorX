import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import TestPapers from "./TestPapers";

const UploadFiles = () => {
  const {
    getAllClasses,
    studyMaterialData,
    handleChangeStudyData,
    submitStudyData,
    allClasses,
    materialId,
    updateStudyData,
  } = useContext(AdminContext);
  const [activePart, setActivePart] = useState("Pdf");
  useEffect(() => {
    getAllClasses();
  }, []);

  return (
    <div className={`p-5 sm:p-10 md:p-12 `}>
      <div className="flex justify-end">
        <select
          name=""
          id=""
          onChange={(e) => setActivePart(e.target.value)}
          className="rounded-full px-4 py-2 cursor-pointer bg-gray-300 hover:text-gray-500"
        >
          <option value="Pdf">Pdf</option>
          <option value="Test-Papers">Test-Papers</option>
        </select>
      </div>
      <div className="py-5 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Upload Study Materials for Students
        </h2>
        {activePart === "Pdf" && (
          <p className="text-lg sm:text-xl text-gray-600 mt-2">
            Provide the necessary files for the class, including questions,
            answers, and additional content.
          </p>
        )}
        {activePart === "Test-Papers" && (
          <p className="text-lg sm:text-xl text-gray-600 mt-2">
            Create Your Test Paper For Students
          </p>
        )}
      </div>

      {activePart === "Pdf" && (
        <form
          className={`space-y-6 max-w-3xl mx-auto`}
          onSubmit={materialId ? updateStudyData : submitStudyData}
        >
          {/* Class Name */}
          <div>
            <label
              htmlFor="classname"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Class Name:
            </label>
            <select
              value={studyMaterialData.className}
              onChange={handleChangeStudyData}
              id="classname"
              name="className"
              placeholder="Enter class name..."
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg sm:text-xl"
              required
            >
              <option value="Class-Name">Class-Name</option>
              {allClasses.length > 0 &&
                allClasses?.map((classObject, index) => (
                  <option key={index} value={classObject.className}>
                    {classObject.className}
                  </option>
                ))}
            </select>
          </div>

          {/* Question File */}
          <div>
            <label
              htmlFor="questionFile"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Select Question File:
            </label>
            <input
              type="file"
              onChange={handleChangeStudyData}
              id="questionFile"
              name="questionPdf"
              className="w-full bg-white px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Answer File */}
          <div>
            <label
              htmlFor="answerFile"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Select Answer File:
            </label>
            <input
              type="file"
              onChange={handleChangeStudyData}
              id="answerFile"
              name="answerPdf"
              className="w-full bg-white px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Content Description */}
          <div>
            <label
              htmlFor="titleContent"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Enter content about the file:
            </label>
            <textarea
              id="titleContent"
              value={studyMaterialData.description}
              onChange={handleChangeStudyData}
              name="description"
              rows="6"
              placeholder="Write something about the files..."
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center sm:justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 w-full md:w-32 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      {activePart === "Test-Papers" && <TestPapers />}
    </div>
  );
};

export default UploadFiles;
