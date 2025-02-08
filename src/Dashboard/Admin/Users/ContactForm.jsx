import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { FaTrash } from "react-icons/fa";

const ContactForm = () => {
  const { allContactUs, getAllContactUs, removeInquaryForm } =
    useContext(AdminContext);
  useEffect(() => {
    getAllContactUs();
  }, []);

  return (
    <>
      <div className="bg-blue-100 w-full h-auto p-2 md:p-4 rounded-lg">
        <h1 className="text-xl md:text-3xl pb-3 md:pb-5 px-1">
          User Inquiries
        </h1>
        <div className="overflow-x-scroll">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">
                  Sr No.
                </th>
                <th className="hidden md:block py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">
                  Name
                </th>
                <th className="md:table-cell py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">
                  Email
                </th>
                <th className="  py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">
                  Subject
                </th>
                <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                  Message
                </th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allContactUs &&
                allContactUs.map((contact, index) => (
                  <tr
                    key={contact._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                      {index + 1}.
                    </td>
                    <td className="hidden md:block py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                      <div>
                        <p>{contact.fullName}</p>
                        <div className="md:hidden text-xs text-gray-500">
                          <p>{contact.email}</p>
                          <p>{contact.subject}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                      {contact.email}
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                      {contact.subject}
                    </td>
                    <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base max-w-xl">
                      {contact.message}
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                      <button
                        onClick={() => {
                          removeInquaryForm(contact._id);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
