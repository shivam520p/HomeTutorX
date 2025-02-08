import React, { useContext, useEffect } from "react";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";

const PersonalDetails = () => {
  const {
    studentName,
    studentProfile,
    studentProfileHandleChange,
    getStudentProfileDetails,
    studentProfileUpdate,
    editAgainProfile,
    profileEdit,
    handleFileChange,
    handleSubmit,
    loading,
    error,
  } = useContext(TutorContext);
  useEffect(()=>{
    getStudentProfileDetails();
  },[])

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen p-2">
      <div className="w-full lg:w-2/3 p-3 lg:p-5 rounded-xl">
        <h3 className="text-xl lg:text-2xl font-semibold mb-2">Personal Details</h3>
        <p className="text-sm lg:text-base text-gray-700 mb-6">
          Please provide your personal information below to complete your profile
        </p>

        <form onSubmit={studentProfileUpdate} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 border-t-2 border-gray-300 py-4">
            <label htmlFor="fullName" className="w-full sm:w-1/5 text-sm lg:text-base">
              Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              value={studentName?.fullName}
              readOnly
              placeholder="Enter your full name"
              className="w-full sm:w-4/5 px-4 py-2 rounded-md bg-slate-100"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 border-t-2 border-gray-300 py-4">
            <label htmlFor="email" className="w-full sm:w-1/5 text-sm lg:text-base">
              Email:
            </label>
            <input
              type="email"
              name="email"
              readOnly
              value={studentName?.email}
              placeholder="Enter your email"
              className="w-full sm:w-4/5 px-4 py-2 rounded-md bg-slate-100"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 border-t-2 border-gray-300 py-4">
            <label htmlFor="gender" className="w-full sm:w-1/5 text-sm lg:text-base">
              Gender:
            </label>
            <div className="flex space-x-4 items-center justify-start w-full sm:w-4/5">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={studentProfileHandleChange}
                  checked={studentProfile?.gender === "Male"}
                  disabled={profileEdit}
                  required
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={studentProfileHandleChange}
                  checked={studentProfile?.gender === "Female"}
                  disabled={profileEdit}
                  required
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={studentProfileHandleChange}
                  checked={studentProfile?.gender === "Other"}
                  disabled={profileEdit}
                  required
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 border-t-2 border-gray-300 py-4">
            <label htmlFor="dateOfBirth" className="w-full sm:w-1/5 text-sm lg:text-base">
              Date of Birth:
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={studentProfile?.dateOfBirth}
              onChange={studentProfileHandleChange}
              readOnly={profileEdit}
              className="w-full sm:w-4/5 px-4 py-2 rounded-md bg-slate-100"
              required
            />
          </div>

          <div className="flex flex-col gap-4 border-t-2 border-gray-300 py-4">
            <label className="w-full sm:w-1/5 text-sm lg:text-base">Address:</label>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">City</label>
                  <input
                    name="city"
                    type="text"
                    value={studentProfile?.city}
                    onChange={studentProfileHandleChange}
                    readOnly={profileEdit}
                    className="w-full bg-slate-100 px-4 py-2 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">State / Province</label>
                  <select
                    name="state"
                    value={studentProfile?.state}
                    onChange={studentProfileHandleChange}
                    disabled={profileEdit}
                    className="w-full bg-slate-100 px-4 py-2 rounded-md"
                    required
                  >
                    <option value="" disabled selected>
                      Select a State
                    </option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">
                      Arunachal Pradesh
                    </option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">
                      Himachal Pradesh
                    </option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Country</label>
                  <select
                    name="country"
                    value={studentProfile?.country}
                    onChange={studentProfileHandleChange}
                    disabled={profileEdit}
                    className="w-full bg-slate-100 px-4 py-2 rounded-md"
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
                    
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">ZIP / Postal Code</label>
                  <input
                    id="postal-code"
                    name="pinCode"
                    type="text"
                    value={studentProfile?.pinCode}
                    onChange={studentProfileHandleChange}
                    readOnly={profileEdit}
                    className="w-full bg-slate-100 px-4 py-2 rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 border-t-2 border-gray-300 py-4">
            <label htmlFor="language" className="w-full sm:w-1/5 text-sm lg:text-base">
              Language:
            </label>
            <select
              name="language"
              value={studentProfile.language}
              onChange={studentProfileHandleChange}
              disabled={profileEdit}
              className="w-full sm:w-4/5 px-4 py-2 rounded-md bg-slate-100"
              required
            >
              <option value="" disabled selected>
                Select a Language
              </option>
              <option value="HINDI">HINDI</option>
              <option value="ENGLISH">ENGLISH</option>
              <option value="HINGLISH">HINGLISH</option>
            </select>
          </div>

          <div className="flex flex-col gap-4 border-t-2 border-gray-300 py-4">
            <label className="w-full sm:w-1/5 text-sm lg:text-base">Discription:</label>
            <textarea
              rows="5"
              name="about"
              value={studentProfile.about}
              onChange={studentProfileHandleChange}
              readOnly={profileEdit}
              placeholder="Enter your message..."
              className="w-full px-4 py-2 rounded-md bg-slate-100"
            ></textarea>
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

      <div className="w-full lg:w-1/3 p-4">
        <div className="rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Profile Photo</h3>
          <div className="relative w-48 h-48 mx-auto">
            <img
              src={studentName?.avatar || "/default-avatar.png"}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-gray-200"
            />
            <label
              htmlFor="photo-upload"
              className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600 p-2 rounded-full cursor-pointer shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Upload a new photo</p>
            <p className="text-xs text-gray-500">
              Supported formats: JPG, PNG, GIF (Max size: 5MB)
            </p>
            {loading && <p className="text-blue-500">Uploading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              {loading ? "Uploading..." : "Upload Photo"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
