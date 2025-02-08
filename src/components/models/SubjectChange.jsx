import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const SubjectChange = () => {
  const {
    setMode,
    selectedClass,
    setSelectedClass,
    allSubjects,
    getAllSubjects,
    
  } = useContext(AdminContext);
  useEffect(() => {
    getAllSubjects();
  },[]);
  return (
    <>
      <div className="pt-4 h-[300px] overflow-y-auto">
        <label
          htmlFor="subjectsValue"
          className="block text-lg font-medium text-gray-600"
        >
          Subjects you want to learn?
          <sup className="text-red-500">*</sup>
        </label>
        {allSubjects.map((subject, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-2 border-2 py-2 px-2 m-1"
            >
              <input
                type="checkbox"
                value={subject.subjectName}
                name="subjectName"
                onClick={(e) =>
                  setSelectedClass({
                    ...selectedClass,
                    subjectName: [...selectedClass.subjectName, subject.subjectName],
                  })
                }
              />
              <label htmlFor="subjects">{subject.subjectName}</label>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-end gap-x-6 pt-5">
        <button
          onClick={() => {
            setMode("mode");
          }}
          type="button"
          className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SubjectChange;
