import React, { useContext } from "react";
import { DataProvider } from "../../auth/user/UserVerification";

const AddNewPassword = ({ token }) => {
  const { resetData, setResetData, resetPassword } =
    useContext(DataProvider);
 
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="relative p-3 w-full max-w-md max-h-full bg-blue-100 rounded-lg">
          <div className="p-3 bg-white rounded-lg">
            <div className="flex justify-between">
              <div className="text-3xl font-medium px-5">
                <h1>Enter New Password</h1>
              </div>
              {/* <span>
                <i
                  onClick={() => {
                    setForPopUp(false);
                  }}
                  className="hover:cursor-pointer text-xl fa-solid fa-xmark"
                ></i>
              </span> */}
            </div>

            <p className="text-gray-500 text-base px-5 py-3">
              We'll send a link on your email to reset your password ??
            </p>
            <form
              className="px-4"
              onSubmit={(e) => {
                resetPassword(token)(e);
              }}
            >
              <div>
                <label htmlFor="newPassword" className="text-lg">
                  New Password
                </label>
                <input
                  type="password"
                  name="newpassword"
                  value={resetData?.newpassword}
                  onChange={(e) => {
                    setResetData({ ...resetData, newpassword: e.target.value });
                  }}
                  placeholder="Enter new password..."
                  className="w-full px-3 py-3 bg-blue-50 border-b-2 border-gray-600 placeholder:text-lg outline-none"
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-x-6 pt-3">
                <button
                  type="submit"
                  className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewPassword;
