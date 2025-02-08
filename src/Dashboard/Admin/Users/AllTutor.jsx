import React, { useContext, useEffect, useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import ToggleBtn from "../PopUp/ToggleBtn";
import BlockTutor from "../PopUp/BlockTutor";
import DefaultImg from "../../../assets/images/default_mentor_image.png";
import TutorDetails from "../../../components/findtutor/TutorDetails";

const AllTutor = () => {
  const {
    tutorBlock,
    getAllUsers,
    searchTutors,
    setSearchTutors,
    allTutor,
    tutorDelete,
    tutorVerify,
    tutorSearchByPinCode,
  } = useContext(AdminContext);

  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [tutorData, setTutorData] = useState({});
  const [section, setSection] = useState("all");

  const handleSearch = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPincode(value);
    if ((value.length === 6 && !isNaN(value)) || value.length === 0) {
      setError("");
    } else {
      setSearchTutors(allTutor);
      setError("Pincode should be exactly 6 digits.");
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {section === "all" && (
        <div className="p-2 md:p-5">
          <div className="flex justify-between py-3">
            <h2 className="text-2xl font-semibold pb-4">All Tutor</h2>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-1 rounded-full w-full max-w-xs">
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
                      tutorSearchByPinCode(pincode);
                    }}
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
              {error && (
                <div className="text-red-500 mt-2 text-sm">{error}</div>
              )}{" "}
              {/* Display error if there's one */}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Display the tutors */}
            {searchTutors &&
              searchTutors.map((tutor, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center items-center bg-blue-100 shadow-md rounded-lg p-3 ${
                    tutor.isBlocked ? "text-gray-300 bg-gray-300" : ""
                  }`}
                >
                  <span className="transform rotate-[-30deg] text-2xl text-red-400">
                    {tutor.isBlocked ? "Blocked!!" : ""}
                  </span>
                  <div className="w-full bg-white p-4 rounded-lg overflow-hidden">
                    <div className="w-full flex justify-end">
                      {!tutor.isBlocked && (
                        <button
                          onClick={() => {
                            tutorDelete(tutor._id);
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash className="text-lg" />
                        </button>
                      )}
                    </div>

                    <div
                      className={`${
                        tutor.isBlocked ? "grayscale" : ""
                      } flex flex-col justify-between items-center pb-2`}
                    >
                      <img
                        src={tutor?.userId?.avatar || DefaultImg}
                        alt=""
                        className="w-32 h-32 border object-cover rounded-full shadow-md"
                      />
                    </div>

                    <div
                      className={`w-full flex flex-col justify-start items-start border-t-2 ${
                        tutor.isBlocked ? "border-gray-300" : "border-red-300"
                      } pt-2`}
                    >
                      <div className="w-full overflow-hidden">
                        <h3 className="text-xl">
                          Name:{" "}
                          <span
                            className={`${
                              tutor.isBlocked
                                ? "text-gray-300"
                                : "text-gray-700"
                            } text-lg`}
                          >
                            {tutor?.userId?.fullName}
                          </span>
                        </h3>
                        <p className="text-xl">
                          Email:
                          <span
                            className={`${
                              tutor.isBlocked
                                ? "text-gray-300"
                                : "text-gray-700"
                            } text-lg`}
                          >
                            {tutor?.userId?.email}
                          </span>
                        </p>
                        <p className="text-xl">
                          Mobile:
                          <span
                            className={`${
                              tutor.isBlocked
                                ? "text-gray-300"
                                : "text-gray-700"
                            } text-lg`}
                          >
                            {tutor?.userId?.mobile}
                          </span>
                        </p>
                        <p className="text-xl">
                          Date Of Birth:
                          <span
                            className={`${
                              tutor.isBlocked
                                ? "text-gray-300"
                                : "text-gray-700"
                            } text-lg`}
                          >
                            {tutor?.address?.dateOfBirth}
                          </span>
                        </p>
                        <div className="w-full flex items-center justify-between">
                          <p className="text-xl">
                            Gender:
                            <span
                              className={`${
                                tutor.isBlocked
                                  ? "text-gray-300"
                                  : "text-gray-700"
                              } text-lg`}
                            >
                              {tutor?.address?.gender}
                            </span>
                          </p>
                          <button
                            onClick={() => {
                              setTutorData(tutor);
                              setSection("single");
                            }}
                            className="text-blue-500 hover:underline hover:duration-500"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>

                      <div className="w-full py-2 flex justify-between border-y border-gray-200 ">
                        <span className="text-gray-400">
                          Verification : {tutor?.status}
                        </span>
                        <span>
                          <ToggleBtn tutor={tutor} tutorVerify={tutorVerify} />
                        </span>
                      </div>

                      <div className="w-full flex items-center justify-between pt-2">
                        <span className="text-gray-400">
                          {tutor?.isBlocked ? "Blocked" : "Unblocked"}
                        </span>
                        <span>
                          <BlockTutor tutor={tutor} tutorBlock={tutorBlock} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      {section === "single" && <TutorDetails tutorData={tutorData} />}
    </>
  );
};

export default AllTutor;
