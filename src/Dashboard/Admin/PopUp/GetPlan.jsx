import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

const GetPlan = ({ setPlan }) => {
  const { loading, qrCodeUrl, getPlanOfSubscriptions } =
    useContext(AdminContext);
  useEffect(() => {
    getPlanOfSubscriptions();
  }, []);
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="relative p-3 w-full max-w-md max-h-full bg-blue-100 rounded-lg">
          <div className="p-3 bg-white rounded-lg">
            <div className="flex items-center justify-between border-b-2 rounded-t dark:border-gray-600">
              <h2 className="text-xl font-medium text-gray-800 pb-2">
                Get Started with a Subscription Plan
              </h2>
              <button
                type="button"
                onClick={() => setPlan(false)}
                className="end-2.5 text-red-600 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Show loading indicator */}
            {loading ? (
              <div className="flex justify-center items-center py-5">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
              </div>
            ) : (
              // Display QR Code once loaded
              <div className="flex justify-center items-center py-5">
                <div className="">
                  {qrCodeUrl ? (
                    <>
                    <img src={qrCodeUrl} alt="QR Code" className="w-96 h-80 object-cover" />
                    <h2 className="text-lg font-medium text-green-600 text-center pt-4">Scan this QR code to pay with any UPI app</h2>
                    </>
                  ) : (
                    <p>Failed to load QR code</p>
                  )}

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPlan;
