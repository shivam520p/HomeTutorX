import React, { useContext } from "react";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";
const EducationSettings = () => {
  const {

    editAgainProfile,
    educationDetails,
    educationDetailsHandleChange,
    educationDetailsUpdate,
    profileEdit,
  } = useContext(TutorContext);
  return (
    <>
      <div className="flex itmes-center justify-center">
        <div className="h-screen w-full lg:w-2/3 p-3 lg:p-5 rounded-xl">
          <h3 className="text-xl lg:text-2xl text-semibold">
            Education Details
          </h3>
          <p className="text-sm lg:text-lg text-gray-700">
            Please provide your educational qualifications below to complete
            your profile
          </p>
          <form
            onSubmit={educationDetailsUpdate}
            className="w-full flex flex-col pt-10 gap-6"
          >
            <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
              <label htmlFor="fullName">Degree Name: </label>
              <input
                type="text"
                name="degree"
                value={educationDetails?.degree}
                onChange={educationDetailsHandleChange}
                disabled={profileEdit}
                placeholder="Enter your degree name"
                className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                required
              />
            </div>
            <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
              <label htmlFor="institution">Institution: </label>
              <input
                type="text"
                name="institution"
                value={educationDetails?.institution}
                onChange={educationDetailsHandleChange}
                disabled={profileEdit}
                placeholder="Enter your institution"
                className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                required
              />
            </div>
            <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
              <label htmlFor="startDate">Start Date: </label>
              <input
                type="date"
                name="startDate"
                value={educationDetails?.startDate}
                onChange={educationDetailsHandleChange}
                readOnly={profileEdit}
                className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                required
              />
            </div>
            <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
              <label htmlFor="yearOfCompletion">Year of Completion: </label>
              <input
                type="date"
                name="yearOfCompletion"
                value={educationDetails?.yearOfCompletion}
                onChange={educationDetailsHandleChange}
                readOnly={profileEdit}
                className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                required
              />
            </div>
            <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
              <label htmlFor="city" className="block text-m">
                City:
              </label>
              <input
                id="city"
                name="city"
                type="text"
                readOnly={profileEdit}
                value={educationDetails?.city}
                onChange={educationDetailsHandleChange}
                className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                required
              />
            </div>
            <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
              <label htmlFor="region" className="block text-m">
                Country
              </label>
              <select
                name="country"
                value={educationDetails?.country}
                onChange={educationDetailsHandleChange}
                disabled={profileEdit}
                className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                required
              >
                <option value="" disabled selected>
                  Select a Country
                </option>
                <option value="United States<">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="Italy">Italy</option>
                {/* More options */}
              </select>
            </div>
            <div className="flex items-center justify-end gap-5 pb-10">
              <button
                onClick={editAgainProfile}
                type="button"
                className="rounded-md px-4 py-2 text-sm font-semibold bg-blue-500 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
              >
                Edit
              </button>
              {!profileEdit && (
                <button
                  type="submit"
                  className={`rounded-md px-4 py-2 text-sm font-semibold bg-blue-500 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700`}
                >
                  Save & Update
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EducationSettings;
