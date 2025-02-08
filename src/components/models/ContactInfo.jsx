import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const ContactInfo = () => {
  const { setMode, selectedClass, setSelectedClass } = useContext(AdminContext);
  return (
    <>
      <div className="pt-4 h-[300px] overflow-y-auto">
        <div className="flex flex-col gap-3">
          <label htmlFor="fee" className="text-lg font-semibold text-gray-600">
            Fee Per Session:
          </label>
          <input
            type="text"
            name="fee"
            onChange={(e) => {
              setSelectedClass({
                ...selectedClass,
                details: {
                  ...selectedClass.details,
                  fee: e.target.value,
                },
              });
            }}
            placeholder="Enter fees for session"
            className="bg-slate-100 px-3 py-3 border rounded-lg placeholder:text-lg outline-slate-500"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="fullName"
            className="text-lg font-semibold text-gray-600"
          >
            Full Name :
          </label>
          <input
            type="text"
            name="fullName"
            onChange={(e) => {
              setSelectedClass({
                ...selectedClass,
                details: {
                  ...selectedClass.details,
                  fullName: e.target.value,
                },
              });
            }}
            placeholder="Enter your full name"
            className="bg-slate-100 px-3 py-3 border rounded-lg placeholder:text-lg outline-slate-500"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-gray-600"
          >
            Email Address :
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setSelectedClass({
                ...selectedClass,
                details: {
                  ...selectedClass.details,
                  email: e.target.value,
                },
              });
            }}
            placeholder="Enter your email address"
            className="bg-slate-100 px-3 py-3 border rounded-lg placeholder:text-lg outline-slate-500"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="mobile"
            className="text-lg font-semibold text-gray-600"
          >
            Mobile Number:
          </label>
          <input
            type="text"
            name="mobile"
            onChange={(e) => {
              setSelectedClass({
                ...selectedClass,
                details: {
                  ...selectedClass.details,
                  mobile: e.target.value,
                },
              });
            }}
            placeholder="Enter your mobile number"
            className="bg-slate-100 px-3 py-3 border rounded-lg placeholder:text-lg outline-slate-500"
            required
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 pt-5">
        <button
          onClick={() => {
            setMode("addressDetails");
          }}
          type="button"
          className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ContactInfo;
