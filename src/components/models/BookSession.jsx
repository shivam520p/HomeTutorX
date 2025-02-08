import React, { useContext } from "react";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";
import { PageContext } from "../../auth/PagesHandle/PageProvider";

const BookSession = ({ tutor }) => {
  const { setPopUp } = useContext(TutorContext);
  const { bookSessionHandleSubmit, bookSessionHandleChange, bookSession } =
    useContext(PageContext);
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
                  Book a Session...!!
                </h3>
                <button
                  type="button"
                  onClick={() => setPopUp(false)}
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
                <form
                  className="space-y-2"
                  onSubmit={(e) => {
                    bookSessionHandleSubmit(e)(tutor._id);
                  }}
                >
                  <div>
                    <label
                      htmlFor="date"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={bookSession.date}
                      onChange={bookSessionHandleChange}
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="startTime"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Start Time
                    </label>
                    <input
                      type="time"
                      name="startTime"
                      value={bookSession.startTime}
                      onChange={bookSessionHandleChange}
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="endTime"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      End Time
                    </label>
                    <input
                      type="time"
                      name="endTime"
                      value={bookSession.endTime}
                      onChange={bookSessionHandleChange}
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
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

export default BookSession;
