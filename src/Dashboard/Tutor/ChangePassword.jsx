import React, { useContext } from "react";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";
import ChangePass from "../../assets/images//ChangePass.png";

const ChangePassword = () => {
  const { changePassword, passwordHandleChange, newPassword } =
    useContext(TutorContext);
  return (
    <div className="w-full h-screen bg-blue-100 rounded-lg shadow-md p-3 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 bg-white w-full h-full overflow-hidden xl:px-40">
        <div className="w-full md:w-2/3 lg:w-1/2 px-8">
          <div className="pt-10">
            <h1 className="text-3xl sm:text-4xl text-center font-medium text-gray-700">
              Change Your Password
            </h1>
            <p className="px-4 py-2 text-center text-lg text-gray-500">
              For your account security, choose a strong password that you
              haven’t used before...!!
            </p>
          </div>
          <form className="space-y-6" onSubmit={changePassword}>
            <div className="space-y-6 lg:px-0 px-4 py-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Password"
                  className="text-lg text-gray-600 font-medium"
                >
                  Old Password :
                </label>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  value={newPassword?.Password}
                  onChange={passwordHandleChange}
                  placeholder="Enter your current password"
                  className="w-full p-3 rounded-md border-2 border-blue-200 outline-blue-600 placeholder:text-lg"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="newPassword"
                  className="text-lg text-gray-600 font-medium"
                >
                  New Password :
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={newPassword?.newPassword}
                  onChange={passwordHandleChange}
                  placeholder="Enter your new password"
                  className="w-full p-3 rounded-md border-2 border-blue-200 outline-blue-600 placeholder:text-lg"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2 px-4 lg:px-0">
          <img
            src={ChangePass}
            alt="Change Password"
            className="w-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
