import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import AddNewSubjects from "../PopUp/AddNewSubject";
import EditSubjects from "../PopUp/EditSubjects";

const AllSubjects = () => {
  const {
    setId,
    allSubjects,
    getAllSubjects,
    setNewSubjects,
    setPopUp,
    popUp,
    editPopUp,
    setEditPopUp,
    deleteSubject,
  } = useContext(AdminContext);
  useEffect(() => {
    getAllSubjects();
  }, []);
  return (
    <>
      <div className="bg-blue-100 w-full h-auto p-2 sm:p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-4">
          <h1 className="text-2xl sm:text-3xl pb-2 sm:pb-5 px-1">
            All Subjects
          </h1>
          <button
            onClick={() => {
              setPopUp(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Add New Subject
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-2 sm:px-4 text-left">Sr No</th>
                <th className="py-3 px-2 sm:px-4 text-left">Subject Name</th>
                <th className="py-3 px-2 sm:px-4 text-left">Image</th>
                <th className="py-3 px-2 sm:px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Students mapping */}
              {allSubjects &&
                allSubjects.map((subject, index) => (
                  <>
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-2 sm:px-4">{index + 1}.</td>
                      <td className="py-3 px-2 sm:px-4 break-words">
                        {subject.subjectName}
                      </td>
                      <td className="py-3 px-2 sm:px-4">
                        <img
                          src={subject.image}
                          alt={subject.subjectName}
                          className="w-24 h-24 rounded-lg"
                        />
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        <button
                          onClick={() => {
                            setEditPopUp(true);
                            setId(subject._id);
                            setNewSubjects(subject)
                          }}
                          className="text-blue-700 hover:text-blue-800 p-2"
                        >
                          <FaRegEdit className="text-base sm:text-xl" />
                        </button>
                        <button
                          onClick={() => {
                            deleteSubject(subject._id);
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
      {popUp && <AddNewSubjects />}
      {editPopUp && <EditSubjects />}
    </>
  );
};

export default AllSubjects;
