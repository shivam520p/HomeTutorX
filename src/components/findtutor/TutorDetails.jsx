import React from "react";
import { motion } from "framer-motion";
import DefaultImg from "../../assets/images/default_mentor_image.png";

const TutorDetails = ({ tutorData }) => {
  console.log(typeof tutorData?.subscriptionPlan?.leadlimit);
  console.log(typeof tutorData?.selectedLeads?.length);
  const abc = tutorData?.subscriptionPlan?.leadlimit;
  const def = tutorData?.selectedLeads?.length;
  const dataValue = abc - def;
  return (
    <>
      <div className="w-full px-4 py-4">
        <h1 className="text-3xl text-center font-semibold text-gray-600 underline underline-offset-4">
          Instructor Details
        </h1>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-3 sm:gap-10 px-4 py-6 sm:py-10">
          <div className="w-full lg:w-1/3 flex-shrink-0 px-3 py-3 bg-blue-100">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={tutorData?.userId?.avatar || DefaultImg}
                alt="Instructor"
                className="w-full h-96 object-cover lg:h-auto"
              />
            </div>
          </div>

          <div className="space-y-4 w-full lg:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <p className="text-blue-400 font-semibold text-2xl">
                  Personal Details:
                </p>

                <div className="text-gray-600">
                  <p>
                    <span className="font-semibold text-lg">Full Name:</span>{" "}
                    {tutorData?.userId?.fullName || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Email:</span>{" "}
                    {tutorData?.userId?.email || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Mobile:</span>{" "}
                    {tutorData?.userId?.mobile || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Gender:</span>{" "}
                    {tutorData?.address?.gender || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">
                      Date of Birth:
                    </span>{" "}
                    {tutorData?.address?.dateOfBirth || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Language:</span>{" "}
                    {tutorData?.address?.language || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Session Fee:</span>{" "}
                    ₹{tutorData?.address?.sessionsFee || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Address:</span>{" "}
                    {tutorData?.address?.city || "N/A"},
                    {tutorData?.address?.state || "N/A"}, <br />
                    {tutorData?.address?.country || "N/A"},{" "}
                    {tutorData?.address?.pinCode || "N/A"}
                  </p>
                </div>
              </motion.div>

              {/* Educational Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <p className="text-blue-400 font-semibold text-2xl">
                  Educational Details:
                </p>

                <div className="text-gray-600">
                  <p>
                    <span className="font-semibold text-lg">
                      Institution Name:
                    </span>{" "}
                    {tutorData?.qualifications[0]?.institution || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Degree Name:</span>{" "}
                    {tutorData?.qualifications[0]?.degree || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Start Date:</span>{" "}
                    {tutorData?.qualifications[0]?.startDate || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">End Date:</span>{" "}
                    {tutorData?.qualifications[0]?.yearOfCompletion || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">College City:</span>{" "}
                    {tutorData?.qualifications[0]?.city || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Country:</span>{" "}
                    {tutorData?.qualifications[0]?.country || "N/A"}
                  </p>
                </div>
              </motion.div>

              {/* Experience Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <p className="text-blue-400 font-semibold text-2xl">
                  Experience Details:
                </p>

                <div className="text-gray-600">
                  <p>
                    <span className="font-semibold text-lg">Role:</span>{" "}
                    {tutorData?.experience[0]?.role || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">
                      Institution Name:
                    </span>{" "}
                    {tutorData?.experience[0]?.institutionName || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">
                      Employment Location:
                    </span>{" "}
                    {tutorData?.experience[0]?.employmentType || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Start Date:</span>{" "}
                    {tutorData?.experience[0]?.startDate || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">End Date:</span>{" "}
                    {tutorData?.experience[0]?.endDate || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Address:</span>{" "}
                    {tutorData?.experience[0]?.city || "N/A"},
                    {tutorData?.experience[0]?.country || "N/A"}.
                  </p>
                </div>
              </motion.div>

              {/* Certification Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <p className="text-blue-400 font-semibold text-2xl">
                  Certification Details:
                </p>

                <div className="text-gray-600">
                  <p>
                    <span className="font-semibold text-lg">
                      Certificate Name:
                    </span>{" "}
                    {tutorData?.certifications[0]?.name || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">
                      Issuing Organization:
                    </span>{" "}
                    {tutorData?.certifications[0]?.issuingOrganization || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Issue Date:</span>{" "}
                    {tutorData?.certifications[0]?.issuedDate || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Expire Date:</span>{" "}
                    {tutorData?.certifications[0]?.expireDate || "N/A"}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <p className="text-blue-400 font-semibold text-2xl">
                  Subscription Details:
                </p>

                <div className="text-gray-600">
                  <p>
                    <span className="font-semibold text-lg">Plan Name:</span>{" "}
                    {tutorData?.subscriptionPlan?.name || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">
                      Plan Duration:
                    </span>{" "}
                    {tutorData?.subscriptionPlan?.duration || "N/A"}
                  </p>

                  <p>
                    <span className="font-semibold text-lg">Plan Price:</span>{" "}
                    {tutorData?.subscriptionPlan?.price || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">
                      Plan Lead Limit:
                    </span>{" "}
                    {tutorData?.subscriptionPlan?.leadlimit || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Plan Expire:</span>{" "}
                    {new Date(
                      tutorData?.subscriptionPlan?.expirationDate
                    ).toLocaleString() || "N/A"}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <p className="text-blue-400 font-semibold text-2xl">
                  Lead Details:
                </p>

                <div className="text-gray-600">
                  <p>
                    <span className="font-semibold text-lg">
                      Purchased Lead:
                    </span>{" "}
                    {tutorData?.selectedLeads?.length || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-lg">
                      Remaining Lead:
                    </span>{" "}
                    {dataValue}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorDetails;
