import React from "react";
import { Link } from "react-router-dom";
import Course1 from "../../assets/images/course-img1.png";
import Course2 from "../../assets/images/course-img2.png";
import Course3 from "../../assets/images/course-img3.png";
import Course4 from "../../assets/images/course-img4.png";
import Course5 from "../../assets/images/course-img5.png";
import Course6 from "../../assets/images/course-img6.png";

const Features2 = () => {

  const courses = [
    {
      id: 1,
      title: "Introduction to Digital Marketing",
      duration: "9h 36m",
      lessons: 20,
      level: "Beginner",
      rating: 4.7,
      reviews: "6.4k",
      instructor: "AnikaZ",
      price: 148,
      image: Course1,
    },
    {
      id: 2,
      title: "Introduction to Python Programming",
      duration: "25h 06m",
      lessons: 20,
      level: "Beginner",
      rating: 4.7,
      reviews: "6.4k",
      instructor: "Wade",
      price: 499,
      image: Course2,
    },
    {
      id: 3,
      title: "Introduction to Photography Masterclass",
      duration: "9h 36m",
      lessons: 20,
      level: "Beginner",
      rating: 4.7,
      reviews: "6.4k",
      instructor: "Cody",
      price: 457,
      image: Course3,
    },
    {
      id: 4,
      title: "Introduction to Python Programming",
      duration: "25h 06m",
      lessons: 20,
      level: "Beginner",
      rating: 4.7,
      reviews: "6.4k",
      instructor: "Wade",
      price: 499,
      image: Course4,
    },
    {
      id: 5,
      title: "Introduction to Python Programming",
      duration: "25h 06m",
      lessons: 20,
      level: "Beginner",
      rating: 4.7,
      reviews: "6.4k",
      instructor: "Wade",
      price: 499,
      image: Course5,
    },
    {
      id: 6,
      title: "Introduction to Python Programming",
      duration: "25h 06m",
      lessons: 20,
      level: "Beginner",
      rating: 4.7,
      reviews: "6.4k",
      instructor: "Wade",
      price: 499,
      image: Course6,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-700">
          Explore 4,000+ Free Online Courses For Students
        </h1>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Welcome to our diverse and dynamic course catalog, we're dedicated to
          providing you...
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 py-4 px-3 md:px-5 overflow-x-auto bg-slate-200 items-center justify-between rounded-xl">
        <div className="w-full md:w-auto">
          <ul className="flex flex-wrap md:flex-nowrap items-center justify-start md:justify-center gap-3 md:gap-8">
            <li className="bg-gray-700 text-white px-3 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap">
              <i className="fa-solid fa-list"></i> All Categories
            </li>
            <li className="hover:bg-gray-100 px-3 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap">
              <i className="fa-solid fa-palette"></i> Courses
            </li>
            <li className="hover:bg-gray-100 px-3 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap">
              <i className="fa-solid fa-code"></i> Subjects
            </li>
            <li className="hover:bg-gray-100 px-3 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap">
              <i className="fa-solid fa-globe"></i> Languages
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto text-center">
          <Link to="/courses" className="inline-block px-5 py-3 bg-gray-100 rounded-full hover:bg-gray-700 hover:text-white text-sm md:text-base whitespace-nowrap">
            See All Courses →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-sm">
                {course.duration}
              </div>
              <button className="absolute top-4 right-4 text-red-500">
                <i className="fa-regular fa-heart text-2xl md:text-3xl"></i>
              </button>
            </div>

            <div className="p-3 md:p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">{course.title}</h3>
              <div className="flex items-center gap-4 text-xs md:text-sm text-gray-600 mb-2">
                <span>{course.lessons} Lessons</span>
                <span>{course.level}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm">{course.rating}</span>
                  <span className="text-gray-500 text-sm">({course.reviews})</span>
                </div>
                <div className="flex-grow"></div>
                <div className="flex items-center gap-2">
                  <img
                    src={`/path/to/${course.instructor}.jpg`}
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm">{course.instructor}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg md:text-xl text-orange-500">${course.price}</span>
                <Link
                  to={`/enroll/${course.id}`}
                  className="text-blue-500 hover:underline text-sm md:text-base"
                >
                  Enroll Now →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Features2;
