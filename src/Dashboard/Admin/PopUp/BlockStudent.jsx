import React, { useContext } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

const   BlockStudent = ({ student }) => {
  const { studentBlock,getAllUsers}=useContext(AdminContext)
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={student?.isBlocked}
          onClick={() => {
            studentBlock(student?.isBlocked,student?._id);
            getAllUsers()
          }}
        />
        <div className={`relative w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${student.isBlocked?'peer-checked:bg-red-500':'peer-checked:bg-gray-500'}`}></div>
      </label>
    </div>
  );
};

export default BlockStudent;
