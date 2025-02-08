import React, { useContext } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

const ToggleBtn = ({ tutorVerify, tutor }) => {
  const {getAllUsers}=useContext(AdminContext)
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className={`${tutor.isBlocked?'-z-10':'z-20'} sr-only peer`}
          checked={tutor.status === "complete" }
          onClick={() => {
            localStorage.removeItem('tutors')
            tutorVerify(tutor);
            getAllUsers();
          }}
        />
        <div className={`relative w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${tutor.isBlocked?'peer-checked:bg-gray-300':'peer-checked:bg-green-500'}`}></div>
      </label>
    </div>
  );
};

export default ToggleBtn;
