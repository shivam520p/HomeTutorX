import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import AddNewClass from "../PopUp/AddNewClass";
import EditClasses from "../PopUp/EditClasses";

const AllClasses = () => {
  const {
    allClasses,
    getAllClasses,
    setPopUp,
    popUp,
    editPopUp,
    setEditPopUp,
    deleteClass,
    setNewClasses,
    setId,
  } = useContext(AdminContext);
  useEffect(() => {
    getAllClasses();
  }, []);
  return (
    <>
      <div className="bg-blue-100 w-full h-auto p-2 sm:p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-3">
          <h1 className="text-2xl sm:text-3xl pb-2 sm:pb-5 px-1">
            All Classes
          </h1>
          <button
            onClick={() => {
              setPopUp(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Add New Class
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
                  Class Name
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-sm sm:text-base">
                  Image
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-sm sm:text-base">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allClasses &&
                allClasses.map((classObject, index) => (
                  <>
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base">
                        {index + 1}.
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base">
                        {classObject.className}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <img
                          src={classObject.image}
                          alt={classObject.className}
                          className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-cover"
                        />
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                        <button
                          onClick={() => {
                            setEditPopUp(true);
                            setId(classObject._id);
                            setNewClasses(classObject);
                          }}
                          className="text-blue-700 hover:text-blue-800 p-2"
                        >
                          <FaRegEdit className="text-base sm:text-xl" />
                        </button>
                        <button
                          onClick={() => {
                            deleteClass(classObject._id);
                          }}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <FaTrash className="text-base sm:text-lg" />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {popUp && <AddNewClass />}
      {editPopUp && <EditClasses />}
    </>
  );
};

export default AllClasses;
