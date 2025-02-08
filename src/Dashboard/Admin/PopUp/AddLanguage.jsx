import React, { useContext } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

const AddLanguage = () => {
  const { setPopUp, newLanguage, languageHandleChange, addLanguage } =
    useContext(AdminContext);
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="relative p-3 w-full max-w-md max-h-full bg-blue-100 rounded-lg">
          <div className="p-3 bg-white rounded-lg">
            <form className="space-y-2" onSubmit={addLanguage}>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="country"
                    className="block text-lg font-medium text-gray-700 pb-4"
                  >
                    Add New Language
                    <sup className="text-red-500">*</sup>
                  </label>
                  <span>
                    <i
                      onClick={() => {
                        setPopUp(false);
                      }}
                      className="hover:cursor-pointer text-xl fa-solid fa-xmark"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter language name to add.."
                  className="w-full px-3 py-3 rounded-lg bg-white border border-gray-600 placeholder:text-lg"
                  name="languageName"
                  value={newLanguage.languageName}
                  onChange={languageHandleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-x-6 pt-3">
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

export default AddLanguage;
