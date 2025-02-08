import React, { useContext } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

export const AddPlan = () => {
  const {
    newFeature,
    setPopUp,
    planList,
    setPlanList,
    setNewFeature,
    planHandleChange,
    handleAddFeature,
    handlePlanSubmit,
  } = useContext(AdminContext);

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative p-3 bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-blue-500 dark:text-white border-b-2 border-blue-500">
                  Add a New Plan...!!
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setPopUp(false);
                    setPlanList({
                      name: "",
                      description: "",
                      price: "",
                      duration: "",
                      features: [],
                    });
                    setNewFeature("");
                  }}
                  className="end-2.5 text-blue-500 bg-transparent hover:bg-gray-200 hover:text-blue-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5">
                <form className="space-y-2" onSubmit={handlePlanSubmit}>
                  <div>
                    <label
                      htmlFor="planName"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Plan Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={planList.name}
                      onChange={planHandleChange}
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Plan Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={planList.price}
                      onChange={planHandleChange}
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="leadLimit"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Lead Limit
                    </label>
                    <input
                      type="number"
                      name="leadlimit"
                      value={planList.leadlimit}
                      onChange={planHandleChange}
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="duration"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Plan Duration
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={planList.duration}
                      onChange={planHandleChange}
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Plan Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      value={planList.description}
                      onChange={planHandleChange}
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <label
                      htmlFor="features"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Features
                    </label>
                    <input
                      type="text"
                      name="features"
                      value={newFeature || ""}
                      onChange={planHandleChange}
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => {
                        handleAddFeature();
                        setNewFeature("");
                      }}
                      className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:shadow-md"
                    >
                      Add
                    </button>
                  </div>
                  {planList.features.length > 0 && (
                    <ol>
                      {planList.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ol>
                  )}

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="submit"
                      className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
