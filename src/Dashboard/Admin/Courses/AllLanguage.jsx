import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import AddLanguage from "../PopUp/AddLanguage";
import EditLanguage from "../PopUp/EditLanguage";

const AllLanguage = () => {
  const {
    allLanguage,
    getAllLanguage,
    setNewLanguage,
    setPopUp,
    popUp,
    setId,
    editPopUp,
    setEditPopUp,
    deleteLanguage,
  } = useContext(AdminContext);

  useEffect(() => {
    getAllLanguage();
  }, []);
  return (
    <>
      <div className="bg-blue-100 w-full h-auto p-2 sm:p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-3 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl pb-2 sm:pb-5 px-1">
            All Languages
          </h1>
          <button
            onClick={() => {
              setPopUp(true);
            }}
            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add New Language
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-sm sm:text-base">
                  Sr No.
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-sm sm:text-base">
                  Language Name
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-sm sm:text-base">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Students mapping */}
              {allLanguage &&
                allLanguage.map((languageObject, index) => (
                  <>
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base">
                        {index + 1}.
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base">
                        {languageObject.languageName}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                        <button
                          onClick={() => {
                            setEditPopUp(true);
                            setId(languageObject._id)
                            setNewLanguage(languageObject);
                          }}
                          className="text-blue-700 hover:text-blue-800 lg:p-5 p-3"
                        >
                          <FaRegEdit className="text-base sm:text-xl" />
                        </button>
                        <button
                          onClick={() => {
                            deleteLanguage(languageObject._id);
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {popUp && <AddLanguage />}
      {editPopUp && <EditLanguage />}
    </>
  );
};

export default AllLanguage;
