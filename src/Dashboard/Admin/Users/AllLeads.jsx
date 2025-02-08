import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { FaEye, FaTrash, FaSearch } from "react-icons/fa";
import LeadViewCard from "./LeadViewCard";

const AllLeads = () => {
  const {
    statusOfLeads,
    allLeads,
    getAllLeadsFromUser,
    popUp,
    setPopUp,
    deleteLeads,
    updateMyLeadInfo,
    searchLead,
    setSearchLead,
    leadSearchByPinCode,
  } = useContext(AdminContext);

  const [lead, setLead] = useState(null);
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPincode(value);
    if ((value.length === 6 && !isNaN(value)) || value.length === 0) {
      setError("");
    } else {
      setSearchLead(allLeads);
      setError("Pincode should be exactly 6 digits.");
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("tutors")) {
      getAllLeadsFromUser();
      localStorage.setItem("tutors", true);
    }
    return () => {
      localStorage.removeItem("tutors");
    };
  }, []);
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <section>
        <div className="bg-blue-100 w-full h-auto p-2 md:p-4 rounded-lg">
          <div className="flex justify-between py-3">
            <h1 className="text-xl md:text-3xl pb-3 md:pb-5 px-1">
              All Leads Form User
            </h1>
            <div className="flex flex-col items-center">
              <div className="bg-blue-200 p-1 rounded-full w-full max-w-xs">
                <div className="bg-white p-1 rounded-full flex items-center">
                  <input
                    type="text"
                    className="px-3 outline-none w-full"
                    maxLength={6}
                    placeholder="Enter 6-digit Pincode"
                    value={pincode}
                    onChange={handleSearch}
                  />
                  <button
                    className="bg-gray-100 p-2 rounded-full"
                    onClick={() => {
                      leadSearchByPinCode(pincode);
                    }}
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
              {error && (
                <div className="text-red-500 mt-2 text-sm">{error}</div>
              )}
            </div>
          </div>
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
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base hidden md:table-cell">
                    Contact
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base hidden md:table-cell">
                    Address
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base hidden md:table-cell">
                    Lead Created
                  </th>
                  {userData.role === "2" && (
                    <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                      Status
                    </th>
                  )}
                  {userData.role === "3" && (
                    <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                      Status
                    </th>
                  )}

                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchLead &&
                  searchLead.map((leads, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        {index + 1}.
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <p>{leads.details?.fullName}</p>
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center hidden md:table-cell">
                        <p>
                          {leads.details?.email
                            ? leads.details.email.slice(0, 2) +
                              "xxxxx@gmail.com"
                            : "N/A"}
                        </p>
                        <p>
                          {leads.details?.mobile
                            ? leads.details.mobile.slice(0, 2) + "XXXXXXXX"
                            : "N/A"}
                        </p>
                      </td>

                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center hidden md:table-cell">
                        <p>
                          {userData.role === "2"
                            ? leads.addressDetails?.street?.slice(0, 2) +
                              "xxxxx"
                            : null}
                          {leads.addressDetails?.street || "N/A"}
                          {leads.addressDetails?.city || "N/A"}
                        </p>
                        <p>
                          {leads.addressDetails?.state || "N/A"},{" "}
                          {leads.addressDetails?.pinCode || "N/A"}
                        </p>
                      </td>

                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center hidden md:table-cell">
                        <p>{new Date(leads.status).toLocaleString()}</p>
                      </td>
                      {userData.role === "3" && (
                        <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center text-gray-600">
                          <select
                            value={leads.status}
                            onChange={(e) => {
                              statusOfLeads(e.target.value, leads._id);
                            }}
                            className="p-2 rounded-md border border-blue-300 outline-red-400"
                          >
                            <option value="0">Pending</option>
                            <option value="1">Completed</option>
                            <option value="2">Rejected</option>
                          </select>
                        </td>
                      )}
                      {userData.role === "2" && (
                        <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center md:table-cell">
                          <p>
                            {leads?.status === "0"
                              ? "Pending"
                              : leads?.status === "1"
                              ? "Complete"
                              : leads?.status === "2"
                              ? "Rejected"
                              : "Expired"}
                          </p>
                        </td>
                      )}
                      <td className="flex gap-5 items-center justify-center py-2 md:py-6 px-2 md:px-4">
                        {(userData.role === "3" && (
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => {
                                setPopUp(true);
                                setLead(leads);
                              }}
                            >
                              <FaEye className="text-2xl text-blue-400 hover:text-blue-700" />
                            </button>
                            <button
                              onClick={() => {
                                deleteLeads(leads._id);
                              }}
                            >
                              <FaTrash className="text-lg text-red-400 hover:text-red-700" />
                            </button>
                          </div>
                        )) ||
                          (userData.role === "2" && (
                            <div
                              className={`${
                                leads.status === "1" ? "flex" : "hidden"
                              } items-center gap-3`}
                            >
                              <button
                                onClick={() => {
                                  setPopUp(true);
                                  setLead(leads);
                                }}
                              >
                                <FaEye className="text-2xl text-red-500 hover:text-red-700" />
                              </button>
                              <button
                                onClick={() => {
                                  updateMyLeadInfo(leads._id);
                                }}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
                              >
                                Get
                              </button>
                            </div>
                          ))}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {popUp && <LeadViewCard lead={lead} />}
    </>
  );
};

export default AllLeads;
