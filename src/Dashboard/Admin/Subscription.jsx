import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import { AddPlan } from "./PopUp/AddPlan";
import SubscriptionCards from "./SubscriptionCards";

const Subscription = () => {
  const { popUp, setPopUp } = useContext(AdminContext);
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 space-y-4 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium">
            Add a New Plan
          </h1>
          <p className="text-base sm:text-lg md:text-base">
            "Choose a plan that suits your goals—simple, flexible, and designed
            to fit your needs and budget."
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <button
            onClick={() => {
              setPopUp(true);
            }}
            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Plan <i className="fa-solid fa-plus ml-2"></i>
          </button>
        </div>
      </div>

      <SubscriptionCards />
      {popUp && <AddPlan />}
    </>
  );
};

export default Subscription;
