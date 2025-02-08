import React, { useContext } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

const LeadViewCard = ({ lead }) => {
  const { setPopUp } = useContext(AdminContext);
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="relative p-3 w-full max-w-md max-h-full bg-blue-100 rounded-lg">
          <div className="p-3 bg-white rounded-lg">
            <div className="flex justify-end pb-3">
              <span className="text-red-400 hover:text-red-600">
                <i
                  onClick={() => {
                    setPopUp(false);
                  }}
                  className="hover:cursor-pointer text-xl fa-solid fa-xmark"
                ></i>
              </span>
            </div>
            <div>
              <table className="border-2 w-full border-collapse border-blue-100">
                <tbody>
                  <tr>
                    <td className="border-2 border-blue-100 font-semibold px-4 py-2">
                      Name
                    </td>
                    <td className="border-2 border-blue-100 px-4 py-2">
                      {lead?.details?.fullName}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-100 font-semibold px-4 py-2">
                      Email
                    </td>
                    <td className="border-2 border-blue-100 px-4 py-2">
                      {userData.role === "2"
                        ? lead.details?.email?.slice(0, 1) + "xxxxx@gmail.com"
                        : lead.details?.email}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-100 font-semibold px-4 py-2">
                      Mobile
                    </td>
                    <td className="border-2 border-blue-100 px-4 py-2">
                      {userData.role === "2"
                        ? lead?.details?.mobile?.slice(0, 1) + "XXXXXXXX"
                        : lead?.details?.mobile}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-100 font-semibold px-4 py-2">
                      Address
                    </td>
                    <td className="border-2 border-blue-100 px-4 py-2">
                      {userData.role === "2"
                        ? lead.addressDetails?.street?.slice(0, 1) + "xxxxx"
                        : lead.addressDetails?.street}
                      {","}
                      {lead?.addressDetails?.city} ,
                      <br />
                      {lead?.addressDetails?.state} ,{" "}
                      {lead?.addressDetails?.pinCode} ,
                      <br />
                      {lead?.addressDetails?.country}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-100 font-semibold px-4 py-2">
                      ClassName
                    </td>
                    <td className="border-2 border-blue-100 px-4 py-2">
                      {lead?.classesId?.className}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-100 font-semibold px-4 py-2">
                      Subjects
                    </td>
                    <td className="border-2 border-blue-100 px-4 py-2">
                      {lead?.subjectName?.map((subject, index) => (
                        <td key={index} className="flex flex-col">
                          {subject?.subjectName}
                          {index % 2 === 0 ? <br /> : ""}
                        </td>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-100 font-semibold px-4 py-2">
                      Mode
                    </td>
                    <td className="border-2 border-blue-100 px-4 py-2">
                      {lead?.mode}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-100 font-semibold px-4 py-2">
                      Fee
                    </td>
                    <td className="border-2 border-blue-100 px-4 py-2">
                      ₹{lead?.details?.fee || "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-100 font-semibold px-4 py-2">
                      Status
                    </td>
                    <td className="border-2 border-blue-100 px-4 py-2">
                      {lead?.status === "0"
                        ? "Pending"
                        : lead?.status === "1"
                        ? "Complete"
                        : lead?.status === "2"
                        ? "Rejected"
                        : "Expired"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadViewCard;
