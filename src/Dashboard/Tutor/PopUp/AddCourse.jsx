import React, { useContext } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { TutorContext } from "../../../auth/TutorHandling/TutorProvider";

const AddCourse = () => {
  const { setPopUp } = useContext(AdminContext);
  const { tutorCourses, handleCourseChange, addTutorCourses } =
    useContext(TutorContext);
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="relative p-3 w-full max-w-md max-h-full bg-blue-100 rounded-md">
          <div className="p-4 bg-white rounded-md">
            <div className="flex justify-between items-center pb-4 border-b border-gray-300">
              <div className="text-xl font-semibold text-gray-800">
                Add new course
              </div>
              <div className=" flex justify-end items-end">
                <i
                  onClick={() => {
                    setPopUp(false);
                  }}
                  className="hover:cursor-pointer text-xl text-gray-500 fa-solid fa-xmark"
                ></i>
              </div>
            </div>
            <form className="space-y-2" onSubmit={addTutorCourses}>
              <div className="pt-4">
                <label
                  htmlFor="courseTitle"
                  className="block text-base font-medium text-gray-600"
                >
                  Add your course title
                  <sup className="text-red-500">*</sup>
                </label>
                <input
                  name="course_title"
                  type="text"
                  placeholder="Enter your course title.."
                  value={tutorCourses?.course_title}
                  onChange={handleCourseChange}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-gray-600"
                />
              </div>
              <div>
                <label
                  htmlFor="coursePrice"
                  className="block text-base font-medium text-gray-600"
                >
                  Add your course price
                  <sup className="text-red-500">*</sup>
                </label>
                <input
                  name="coursePrice"
                  type="text"
                  placeholder="Enter your course price.."
                  value={tutorCourses?.coursePrice}
                  onChange={handleCourseChange}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-gray-600"
                />
              </div>
              <div>
                <label
                  htmlFor="courseImage"
                  className="block text-base font-medium text-gray-600"
                >
                  Choose a course image
                  <sup className="text-red-500">*</sup>
                </label>
                <input
                  name="courseImage"
                  type="file"
                  onChange={handleCourseChange}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-gray-600"
                />
              </div>
              <div className="">
                <label
                  htmlFor="duration"
                  className="block text-base font-medium text-gray-600"
                >
                  Add your course duration
                  <sup className="text-red-500">*</sup>
                </label>
                <input
                  name="duration"
                  type="text"
                  placeholder="Enter your course duration.."
                  value={tutorCourses?.duration}
                  onChange={handleCourseChange}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-gray-600"
                />
              </div>
              <div className="">
                <label
                  htmlFor="courseTitle"
                  className="block text-base font-medium text-gray-600"
                >
                  Add your course description
                  <sup className="text-red-500">*</sup>
                </label>
                <input
                  name="description"
                  type="text"
                  placeholder="Enter your course description.."
                  value={tutorCourses?.description}
                  onChange={handleCourseChange}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-gray-600"
                />
              </div>
              <div className="flex items-center justify-end gap-x-6 pt-5">
                <button
                  type="submit"
                  className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
                >
                  Add +
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
