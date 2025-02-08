import React, { useContext, useEffect } from "react";
import CourseImg from "../../assets/images/educationPNG.png";
import { FaTrash } from "react-icons/fa";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import AddCourse from "./PopUp/AddCourse";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";

const AddYourCourse = () => {
  const { popUp, setPopUp, tutorCourses, getTutorCourses } =
    useContext(AdminContext);
  const { deleteTutorCourse } = useContext(TutorContext);
  useEffect(() => {
    getTutorCourses();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ">
        {tutorCourses?.map((course) => (
          <div
            key={course._id}
            className="bg-blue-50 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow "
          >
            <img
              src={course.courseImage || CourseImg}
              alt={course.title}
              className="w-full h-48 object-cover rounded-md mb-4 bg-white"
            />
            <h3 className="text-xl font-semibold mb-2">
              Title: {course.course_title}
            </h3>
            <span className="text-blue-500 font-medium">
              Price: {course.coursePrice}
            </span>
            <p>Duration: {course.duration}</p>
            <div className="flex justify-between items-center">
              <p>Description: {course.description}</p>
              <button
                onClick={() => deleteTutorCourse(course._id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <section className="flex justify-center items-center bg-gray-50 py-10">
        <div className="text-center space-y-6">
          <img src={CourseImg} alt="Add Course" className="w-64 h-64 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Start Creating Your Course
          </h2>
          <p className="text-gray-600 max-w-md">
            Share your knowledge with students by creating an engaging course
          </p>
          <button
            onClick={() => {
              setPopUp(true);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Course
          </button>
        </div>
      </section>
      {popUp && <AddCourse />}
    </>
  );
};

export default AddYourCourse;
