import React from "react";

const LocationTutor = () => {
  // Array of cities with image URLs and names
  const cities = [
    { name: "DELHI", imgSrc: "" },
    { name: "MUMBAI", imgSrc: "" },
    { name: "JAIPUR", imgSrc: "" },
    { name: "KOLKATA", imgSrc: "" },
    { name: "BENGALURU", imgSrc: "" },
    { name: "CHENNAI", imgSrc: "" },
    { name: "HYDERABAD", imgSrc: "" },
    { name: "PUNE", imgSrc: "" },
    { name: "AHMEDABAD", imgSrc: "" },
    { name: "Kochi", imgSrc: "" },
    { name: "GOA", imgSrc: "" },
    { name: "SURAT", imgSrc: "" },
  ];

  return (
    <>
      <div className="mx-auto p-10">
        <h1 className="text-center text-2xl font-bold mb-6">
          Home Tutoring - in your City
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-primary text-white rounded-lg p-4 shadow-lg"
            >
              <div className="w-16 h-16 mb-2 rounded-full overflow-hidden">
                <img
                  src={city.imgSrc}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold">{city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationTutor;
