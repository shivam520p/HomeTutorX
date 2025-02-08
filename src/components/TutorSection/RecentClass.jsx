import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import { useNavigate } from "react-router-dom";

const RecentClass = () => {
  const { allLeads, getAllLeadsFromUser } = useContext(AdminContext);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    getAllLeadsFromUser();
  }, []);

  // Limit the number of leads displayed to 5
  const leadsToDisplay = allLeads.slice(0, 5);

  return (
    <motion.div
      className="p-6 bg-gray-100 drop-shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl text-center pb-5">Recent Classes</h3>
      <div className="container mx-auto overflow-x-auto">
        <table className="table-auto w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-2 py-2 border">Enquiry ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Class</th>
              <th className="px-4 py-2 border">Subject</th>
              <th className="px-4 py-2 border">Area</th>
              <th className="px-4 py-2 border">Posted On</th>
              <th className="px-4 py-2 border">Contact No.</th>
              <th className="px-4 py-2 border">Mode</th>
            </tr>
          </thead>
          <tbody>
            {leadsToDisplay.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`text-gray-700 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="border text-center">{index + 1}</td>
                <td className="border text-center">
                  {item?.details?.fullName}
                </td>
                <td className="border text-center">
                  {item?.classesId?.className}
                </td>
                <td className="border text-center">
                  {item?.subjectName?.map((subject) => (
                    <p>{subject.subjectName}</p>
                  ))}
                </td>
                <td className="border text-center">
                  {item?.addressDetails?.city} , {item?.addressDetails?.state}{" "}
                  <br /> {item?.addressDetails?.country}
                </td>
                <td className="border text-center">
                  {new Date(item?.createDate).toLocaleString()}
                </td>
                <td className="border text-center">
                  {item?.details?.mobile
                    ? item?.details?.mobile.slice(0, 2) + "XXXXXXXX"
                    : "N/A"}
                </td>
                <td className="border text-center">{item?.mode}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => {
            if (!userData) {
              navigate("/register");
            }
          }}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:shadow-md"
        >
          View More Classes
        </button>
      </motion.div>
    </motion.div>
  );
};

export default RecentClass;
