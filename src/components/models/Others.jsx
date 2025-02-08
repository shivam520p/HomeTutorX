import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

export const Others = () => {
  const { setMode, selectedClass, setSelectedClass } = useContext(AdminContext);

  const subjects = [
    "RRB Group D",
    "RRB NTPC",
    "SSC Multi-Tasking Staff",
    "SSC CHSL",
    "IBPS Clerk Exam",
    "TET",
    "CTET",
    "Delhi Police Constable",
    "IBPS Clerk Exam",
    "Indian Army",
  ];
  return (
    <>
      <div className="pt-4 max-h-[300px] overflow-y-auto">
        <label
          htmlFor="subjectsValue"
          className="block text-lg font-medium text-gray-600"
        >
          Subjects you want to learn?
          <sup className="text-red-500">*</sup>
        </label>
        {subjects.map((subject) => (
          <div
            key={subject}
            className="flex items-center gap-2 border-2 py-2 px-2 m-1"
          >
            <input
              type="checkbox"
              name="class"
              onClick={() => {
                setSelectedClass({
                  ...selectedClass,
                  subjectName: [...(selectedClass.subjectName || []), subject],
                });
              }}
            />
            <label htmlFor="subjects">{subject}</label>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-x-6 pt-5">
        <button
        onClick={()=>{setMode("mode")}}
          type="button"
          className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
        >
          Next
        </button>
      </div>
    </>
  );
};
