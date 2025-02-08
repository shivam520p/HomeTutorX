import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import AllTileOnScreen from "./AllTitleOnScreen";

const WriteContent = () => {
  const {  quoteForm, quoteHandleChange, quoteUpdate, quoteSubmit, titleBtn } =
    useContext(AdminContext);
  return (
    <>
      <div>
        <AllTileOnScreen />
      </div>
      <div className="p-5">
        <div className="py-5">
          <h2 className="text-2xl font-bold">Write a New Quote</h2>
          <p>Write something here to display on the screen...!!</p>
        </div>
        <form className="space-y-4" onSubmit={titleBtn? quoteUpdate:quoteSubmit}>
          <div>
            <label htmlFor="title" className="block text-lg font-medium mb-1">
              Enter Titile :
            </label>
            <input
              type="text"
              id="title"
              name="titleName"
              value={quoteForm.titleName}
              onChange={quoteHandleChange}
              placeholder="Enter title name..."
              className="md:w-1/2 w-full px-4 py-3 border rounded-lg outline-blue-500 placeholder:text-lg"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subtitle"
              className="block text-lg font-medium mb-1"
            >
              Enter your content here :
            </label>
            <textarea
              type="text"
              id="subtitle"
              name="titleContent"
              value={quoteForm.titleContent}
              onChange={quoteHandleChange}
              rows={8}
              placeholder="Write something here...."
              className="w-full md:w-1/2 px-4 py-3 border rounded-lg outline-blue-500 placeholder:text-lg"
              required
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            {!titleBtn && <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>}
            {titleBtn &&<button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>}
          </div>
        </form>
      </div>
    </>
  );
};

export default WriteContent;
