import React, { useContext, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import DefaultImg from "../../../assets/images/default_mentor_image.png"
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import BlockStudent from "../PopUp/BlockStudent";

const AllStudent = () => {
  const { getAllUsers, allStudent, deleteStudent } = useContext(AdminContext);

  useEffect(() => {
    if (!localStorage.getItem("student")) {
      getAllUsers();
      localStorage.setItem("student", true);
    }
    return () => {
      localStorage.removeItem("student");
    };
  }, []);

  return (
    <div className="p-2 md:p-5">
      <h2 className="text-2xl font-semibold pb-4">All Student</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Students mapping */}
        {allStudent &&
          allStudent.map((student) => (
            <>
              <div
                key={student.userId._id}
                className="flex flex-col justify-center items-center bg-blue-100 shadow-md rounded-lg p-3"
              >
                <span className="transform rotate-[-30deg] text-2xl text-red-400">
                  {student.isBlocked ? "Blocked!!" : ""}
                </span>
                <div className="w-full bg-white p-4 rounded-lg flex flex-col justify-between h-full overflow-hidden">
                  <div className="w-full flex justify-end">
                    {!student.isBlocked && (
                      <button
                        onClick={() => {
                          deleteStudent(student._id);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col justify-center items-center pb-2">
                    <img
                      src={student.userId.avatar || DefaultImg}
                      alt=""
                      className={`${
                        student.isBlocked && "grayscale"
                      } w-32 h-32 border object-cover rounded-full shadow-lg`}
                    />
                  </div>
                  <div
                    className={`w-full flex flex-col justify-start items-start border-t-2 ${
                      student.isBlocked ? "border-gray-300" : "border-red-300"
                    } pt-2`}
                  >
                    <div
                      className={`${
                        student.isBlocked ? "text-gray-300" : "text-black"
                      }`}
                    >
                      <h3 className="text-xl">
                        Name:{" "}
                        <span
                          className={`${
                            student.isBlocked
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          {student.userId.fullName}
                        </span>
                      </h3>
                      <p className="text-xl">
                        Email:
                        <span
                          className={`${
                            student.isBlocked
                              ? "text-gray-300"
                              : "text-gray-700"
                          } text-lg`}
                        >
                          {student.userId.email}
                        </span>
                      </p>
                      <p className="text-xl">
                        Mobile:
                        <span
                          className={`${
                            student.isBlocked
                              ? "text-gray-300"
                              : "text-gray-700"
                          } text-lg`}
                        >
                          {student.userId.mobile}
                        </span>
                      </p>
                      <p className="text-xl">
                        Date Of Birth:
                        <span
                          className={`${
                            student.isBlocked
                              ? "text-gray-300"
                              : "text-gray-700"
                          } text-lg`}
                        >
                          {student.dateOfBirth}
                        </span>
                      </p>
                      <p className="text-xl">
                        Gender:
                        <span
                          className={`${
                            student.isBlocked
                              ? "text-gray-300"
                              : "text-gray-700"
                          } text-lg`}
                        >
                          {student.gender}
                        </span>
                      </p>
                      <p className="text-xl">
                        Address:
                        <span
                          className={`${
                            student.isBlocked
                              ? "text-gray-300"
                              : "text-gray-700"
                          } text-lg`}
                        >
                          {student.address.city}, {student.address.state}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between py-2">
                    <span className="text-gray-400">
                      {student.isBlocked ? "Blocked" : ""}
                    </span>
                    <span>
                      <BlockStudent student={student} />
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default AllStudent;
