import React, { useContext } from 'react'
import { AdminContext } from '../../../auth/adminhandling/AdminProvider'

const AddLinkClass = ({allClasses}) => {
    const {linkData,handleLinkChange,submitLink}=useContext(AdminContext) 
     return (
    <div className=" w-[40%] p-5">
    <div className="py-5 text-center">
      <h2 className="text-2xl font-semibold">
        Upload Study Link for Particular Class
      </h2>
    </div>

    <form
      className="space-y-6 max-w-3xl mx-auto"
      onSubmit={submitLink}
    >
      {/* Class Name */}
      <div>
        <label
          htmlFor="classname"
          className="block text-lg font-medium mb-2"
        >
          Class-Name:
        </label>
        <select
          type="text"
        value={linkData.className}
        onChange={handleLinkChange}
          id="classname"
          name="className"
          placeholder="Enter class name..."
          className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg"
          required
        >
          <option value="Class-Name">Class-Name</option>
          {
            allClasses.map((classObject,index)=>{
                return <option key={index} value={classObject.className}>{classObject.className}</option>
            })
          }
        </select>
      </div>

      {/* Question File */}
      <div>
        <label
          htmlFor="Title"
          className="block text-lg font-medium mb-2"
        >
          Title:
        </label>
        <input
          type="text"
          value={linkData.title}
          onChange={handleLinkChange}
          id="title"
          name="title"
          className="w-full bg-white px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"

        />
      </div>

      {/* Answer File */}
      <div>
        <label
          htmlFor="linkurl"
          className="block text-lg font-medium mb-2"
        >
          Enter Link-Url:
        </label>
        <input
          type="text"
          value={linkData.linkurl}
          onChange={handleLinkChange}
          id="linkurl"
          name="linkurl"
          className="w-full bg-white px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
         
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center sm:justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default AddLinkClass