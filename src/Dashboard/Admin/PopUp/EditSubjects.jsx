import React, { useContext } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

const EditSubjects = () => {
  const { setEditPopUp, newSubjects, subjectHandleChange, updateSubject} =
    useContext(AdminContext);
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="relative p-3 w-full max-w-md max-h-full bg-blue-100 rounded-md">
          <div className="p-3 bg-white">
            <form className="space-y-2" action="#" onSubmit={updateSubject}>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="subjectName"
                    className="block text-lg font-medium text-gray-700 pb-4"
                  >
                    Added Subject
                    <sup className="text-red-500">*</sup>
                  </label>
                  <span>
                    <i
                      onClick={() => {
                        setEditPopUp(false);
                      }}
                      className="hover:cursor-pointer text-xl fa-solid fa-xmark"
                    ></i>
                  </span>
                </div>
                <input
                  name="subjectName"
                  type="text"
                  placeholder="Enter subject name to add.."
                  value={newSubjects.subjectName}
                  onChange={subjectHandleChange}
                  className="w-full px-3 py-3 rounded-lg bg-white border border-gray-600 placeholder:text-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-lg font-medium text-gray-700 pb-4"
                >
                  Choose New Image
                  <sup className="text-red-500">*</sup>
                </label>
                <input
                  name="image"
                  type="file"
                  placeholder="Choose a pic to add.."
                  onChange={subjectHandleChange}
                  className="w-full px-3 py-3 rounded-lg bg-white border border-gray-600"
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-x-6 pt-5">
                <button
                  type="submit"
                  className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
                >
                  Add <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSubjects;
