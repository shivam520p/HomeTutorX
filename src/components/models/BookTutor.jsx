import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import SubjectChange from "./SubjectChange";
import Mode from "./Mode";
import ContactInfo from "./ContactInfo";
import AddressDetail from "./AddressDetail";
const BookTutor = ({ subject }) => {
  const {
    mode,
    setMode,
    setPopUp,
    selectedClass,
    setSelectedClass,
    allClasses,
    getAllClasses,
  } = useContext(AdminContext);
  useEffect(() => {
    getAllClasses();
  }, []);
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-20">
        <div className="relative p-3 w-full max-w-md max-h-full bg-blue-100 rounded-md">
          <div className="p-4 bg-white rounded-md">
            <div className="flex justify-between items-center pb-4 border-b border-gray-300">
              <div className="text-xl font-semibold text-gray-800">
                Looking for a {subject} tutor?
              </div>
              <i
                onClick={() => {
                  setPopUp(false);
                  setMode("");
                }}
                className="hover:cursor-pointer text-xl text-gray-500 fa-solid fa-xmark"
              ></i>
            </div>

            <form className="space-y-2">
              {mode === "" && (
                <div className="pt-4">
                  <label className="block text-lg font-medium text-gray-600">
                    Class? Course student studying in?
                    <sup className="text-red-500">*</sup>
                  </label>
                  <div className="max-h-[300px] overflow-y-auto">
                    {allClasses.map((classObject, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 border-2 py-2 px-2 m-1"
                      >
                        <input
                          type="radio"
                          name="class"
                          onClick={() =>
                            setSelectedClass({
                              ...selectedClass,
                              classesId: classObject.className,
                            })
                          }
                          value={classObject.className}
                          id={`course-${index}`}
                        />
                        <label htmlFor="className">
                          {classObject.className}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-end gap-x-6 pt-5">
                    <button
                      onClick={() => {
                        setMode("subjectChange");
                      }}
                      type="button"
                      className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </form>
            {mode === "subjectChange" && <SubjectChange />}
            {mode === "mode" && <Mode />}
            {mode === "contactInfo" && <ContactInfo />}
            {mode === "addressDetails" && <AddressDetail />}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTutor;
