import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import { FaTrash } from "react-icons/fa";
import GetPlan from "./PopUp/GetPlan";
import toast from "react-hot-toast";
const SubscriptionCards = () => {
  const [plan, setPlan] = useState(false);
  const {
    allSubscriptions,
    getAllSubscriptions,
    deleteSubscription,
    getPlanOfSubscriptions,
  } = useContext(AdminContext);
  useEffect(() => {
    getAllSubscriptions();
  }, []);
  console.log(allSubscriptions);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const showButton = userData.role === "3";
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
        {allSubscriptions?.map((subscription, index) => (
          <>
            <div
              key={index}
              className="bg-blue-100 shadow-lg rounded-lg overflow-hidden p-2 flex flex-col"
            >
              <div className="bg-white p-4 rounded-lg flex flex-col min-h-0 max-w-full">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {subscription.name}
                  </h2>
                  <div>
                    {showButton && (
                      <>
                        <button
                          onClick={() => {
                            deleteSubscription(subscription._id);
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash className="text-lg" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mt-2">₹{subscription.price}</p>
                <div className="mt-4">
                  <button
                    onClick={() => {
                      if (userData.role === "2") {
                        getPlanOfSubscriptions(subscription._id);
                        setPlan(true);
                      } else {
                        toast.error("Admin only add a plan..!!");
                      }
                    }}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Get Plan
                  </button>
                </div>
                <ul className="mt-2">
                  <span className="text-xl font-medium">Features:</span>
                  {subscription?.features?.map((feature, index) => (
                    <li key={index}>
                      <i class="fa-solid fa-check text-blue-600 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xl font-semibold">
                  <span className="text-lg font-medium text-gray-800">
                    Subscription Validation:
                  </span>{" "}
                  {subscription.duration}
                </p>
                <p className="text-xl font-semibold">
                  <span className="text-lg font-medium text-gray-800">
                    Subscription Lead Limit:
                  </span>{" "}
                  {subscription.leadlimit}
                </p>
                <p className="mt-2">{subscription.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      {plan && <GetPlan setPlan={setPlan} />}
    </>
  );
};

export default SubscriptionCards;
