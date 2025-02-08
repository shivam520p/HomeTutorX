import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import { FaTrash, FaRegEdit } from "react-icons/fa";

const AllTileOnScreen = () => {
  const { allTitle, getAllQuotes, deleteQuotes,setQuoteFrom, setTitleBtn, setId } =
    useContext(AdminContext);
  useEffect(() => {
    getAllQuotes();
  }, []);

  return (
    <>
      <section className="flex items-center justify-center">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-300">
              <th className="px-4 py-3 text-left">Heading</th>
              <th className="px-4 py-3 text-left">Content</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allTitle.map((title, index) => (
              <>
                <tr key={index} className="border-b">
                  <td className="px-4 py-3 text-black font-medium">
                    {title.titleName}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {title.titleContent}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => {
                        setTitleBtn(true);
                        setQuoteFrom(title);
                        setId(title._id);
                      }}
                      className="text-blue-700 hover:text-blue-800 p-2"
                    >
                      <FaRegEdit className="text-base sm:text-xl" />
                    </button>
                    <button
                      onClick={() => {
                        deleteQuotes(title._id);
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash className="text-base sm:text-xl" />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AllTileOnScreen;
