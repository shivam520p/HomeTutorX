import React, { useContext, useEffect } from "react";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";
import { FaTrash } from "react-icons/fa";

const TutorLeadView = () => {
  const { selectedLead, getAllSelectedLead, deleteSelectedLeads } =
    useContext(TutorContext);
  useEffect(() => {
    getAllSelectedLead();
  }, []);
  return (
    <>
      <section>
        <div className="bg-blue-100 w-full h-auto p-2 md:p-4 rounded-lg">
          <h1 className="text-xl md:text-3xl pb-3 md:pb-5 px-1">
            Purchased Leads
          </h1>
          <div>
            <table className="w-full bg-white shadow-md rounded-lg md:overflow-scroll">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Sr No.
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Name
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base  md:table-cell">
                    Class Name
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base  md:table-cell">
                    Subject Name
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base  md:table-cell">
                    Fee
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base  md:table-cell">
                    Mode
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base  md:table-cell">
                    Contact
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base md:table-cell">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedLead &&
                  selectedLead?.map((leads, index) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        {index + 1}
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <p>{leads?.details?.fullName}</p>
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center  md:table-cell">
                        <p>{leads?.classesId?.className}</p>
                      </td>

                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center  md:table-cell">
                        {leads?.subjectName?.map((subject, index) => (
                          <td key={index} className="flex flex-col">
                            {subject?.subjectName}
                            {index % 2 === 0 ? <br /> : ""}
                          </td>
                        ))}
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center  md:table-cell">
                        {leads?.details?.fee || "N/A"}
                      </td>

                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center  md:table-cell">
                        <p>{leads?.mode?.split(" ")[0]}</p>
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center  md:table-cell">
                        <p>{leads?.details?.mobile}</p>
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <button
                          onClick={() => {
                            deleteSelectedLeads(leads._id);
                          }}
                        >
                          <FaTrash className="text-lg text-red-400 hover:text-red-700" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default TutorLeadView;
