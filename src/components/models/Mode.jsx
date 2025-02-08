import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const Mode = () => {
  const { setMode, selectedClass, setSelectedClass } = useContext(AdminContext);
  const modeValue = [
    "Online (via Zoom, Google Meet, Skype etc)",
    "Offline (Tuition at My Home)",
  ];
  return (
    <>
      <div className="pt-4 h-[300px] overflow-y-auto">
        <label className="block text-lg font-medium text-gray-600">
          Subjects you want to learn?
          <sup className="text-red-500">*</sup>
        </label>
        {modeValue.map((subject, index) => (
          <div
            key={subject}
            className="flex items-center gap-2 border-2 py-2 px-2 m-1"
          >
            <input
              type="radio"
              name={subject}
              value={subject}
              onClick={() => 
                setSelectedClass({
                  ...selectedClass,
                  mode: subject,
                })
              }
            />
            <label htmlFor={`mode-${index}`}>{subject}</label>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-x-6 pt-5">
        <button
            onClick={()=>{setMode("contactInfo")}}
          type="button"
          className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Mode;
