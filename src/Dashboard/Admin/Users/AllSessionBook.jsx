import React, { useContext, useEffect } from "react";
import { TutorContext } from "../../../auth/TutorHandling/TutorProvider";
import { FaTrash } from "react-icons/fa";

const AllSessionBook = () => {
  const {
    allSessionBook,
    getAllSessionBook,
    deleteBookSession,
  } = useContext(TutorContext);
  useEffect(() => {
    getAllSessionBook();
  }, []);

  return (
    <div className="bg-blue-100 w-full h-auto p-2 md:p-4 rounded-lg">
      <h1 className="text-xl md:text-3xl pb-3 md:pb-5 px-1">
        All Session Book
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                Sr.No
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                Name
              </th>
              <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                Email
              </th>
              <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                Mobile
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                Book Date
              </th>
              <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                Start Time
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                End Time
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Map over allSessionBook and display session data */}
            {allSessionBook &&
              allSessionBook.map((session, index) => (
                <>
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                      {index + 1}.
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                      {session.studentId?.fullName}
                    </td>
                    <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                      {session.studentId?.email}
                    </td>
                    <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                      {session.studentId?.mobile}
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                      {new Date(session.date).toLocaleString()}
                    </td>
                    <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                      {session.startTime}
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                      {session.endTime}
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                      <button
                        onClick={() => {
                          deleteBookSession(session._id)
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSessionBook;
