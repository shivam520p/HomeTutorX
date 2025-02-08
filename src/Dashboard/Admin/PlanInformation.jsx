import React, { useContext, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const PlanInformation = () => {
  const {
    bookedPlan,
    getAllSubsribedPlan,
    updatePlanStatus,
    deletePlanPurched,
  } = useContext(AdminContext);
  useEffect(() => {
    getAllSubsribedPlan();
  }, []);
  console.log(bookedPlan);

  return (
    <>
      <section>
        <div className="bg-blue-100 w-full h-auto p-4 md:p-6 rounded-lg">
          <h1 className="text-xl md:text-3xl pb-4 md:pb-6 px-2 font-semibold">
            Purchased Subscription Plan Information
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-2 px-4 text-center text-sm md:text-base">
                    Sr No.
                  </th>
                  <th className="py-2 px-4 text-center text-sm md:text-base">
                    Name
                  </th>
                  <th className="hidden md:table-cell py-2 px-4 text-center text-sm md:text-base">
                    Contact
                  </th>
                  <th className="py-2 px-4 text-center text-sm md:text-base">
                    Plan Name
                  </th>
                  <th className="py-2 px-4 text-center text-sm md:text-base">
                    Plan Duration
                  </th>
                  <th className="hidden md:table-cell py-2 px-4 text-center text-sm md:text-base">
                    Date
                  </th>
                  <th className="py-2 px-4 text-center text-sm md:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookedPlan &&
                  bookedPlan.map((plan, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-2 px-4 text-center text-sm md:text-base">
                        {index + 1}.
                      </td>
                      <td className="py-2 px-4 text-center text-sm md:text-base">
                        {plan?.tutorId?.userId?.fullName}
                      </td>
                      <td className="hidden md:table-cell py-2 px-4 text-sm md:text-base text-center">
                        <p>{plan?.tutorId?.userId?.email}</p>
                        <p>{plan?.tutorId?.userId?.mobile}</p>
                      </td>
                      <td className="py-2 px-4 text-center text-sm md:text-base">
                        {plan?.SubscriptionPlan?.name}
                      </td>
                      <td className="py-2 px-4 text-center text-sm md:text-base">
                        {plan?.SubscriptionPlan?.duration}
                      </td>
                      <td className="hidden md:table-cell py-2 px-4 text-sm md:text-base text-center">
                        {new Date(plan.createdAt).toLocaleString()}
                      </td>
                      <td className="py-2 px-4 text-center text-sm md:text-base">
                        <div className="flex gap-4 items-center justify-center">
                          <select
                            id="status"
                            name="status"
                            value={plan?.status}
                            onChange={(e) => {
                              updatePlanStatus(e.target.value, plan._id);
                            }}
                            className="p-2 rounded-md border text-gray-500 border-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                          <button
                            onClick={() => {
                              deletePlanPurched(plan._id);
                            }}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash className="text-lg" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanInformation;
