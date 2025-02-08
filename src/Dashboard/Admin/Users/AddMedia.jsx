import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

const AddMedia = () => {
  const {
    setAddPhoto,
    setAddVideo,
    submitPhoto,
    submitVideo,
    getAllImages,
    allImages,
    deleteImage,
    getAllVideo,
    videos,
  } = useContext(AdminContext);

  useEffect(() => {
    getAllImages();
    getAllVideo();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-4 lg:p-8">
      {/* Add Image Section */}
      <div className="w-full flex flex-col gap-5 h-auto border border-gray-300 p-5 rounded-xl">
        <label
          htmlFor=""
          className="text-3xl text-left text-gray-400 underline"
        >
          Add Image
        </label>
        <div className="w-full flex flex-col sm:flex-row gap-5 justify-between border border-gray-400 p-2 rounded-xl">
          <input
            type="file"
            className="p-2 w-full"
            onChange={(e) => setAddPhoto(e.target.files[0])}
          />
          <button
            className="bg-blue-500 px-5 py-1 rounded-lg text-white text-xl"
            onClick={submitPhoto}
          >
            Add+
          </button>
        </div>

        {/* Display Images */}
        <section className="flex flex-wrap gap-4 sm:gap-8 justify-center md:justify-start mt-4">
          {allImages?.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer flex flex-col border justify-between p-2 items-start w-[130px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[220px] rounded-2xl"
            >
              <img
                src={image?.imageUrl}
                alt="image"
                className="w-full rounded-md h-4/5"
              />
              <button
                onClick={() => deleteImage(image._id)}
                className="w-full bg-red-500 p-2 rounded-lg cursor-pointer text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </section>
      </div>

      {/* Add Video Section */}
      <div className="w-full flex flex-col gap-10 justify-between border border-gray-300 px-5 py-3 rounded-xl">
        <label
          htmlFor=""
          className="text-3xl text-left text-gray-400 underline"
        >
          Add Video
        </label>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          {/* File Upload and Button */}
          <div className="w-full sm:w-1/2 flex flex-col sm:flex-row justify-between items-center border rounded-lg border-gray-400 px-4 py-2">
            <input
              type="file"
              className="p-3 w-full border md:border-none mb-3 md:mb-0 rounded-lg sm:w-3/5"
              onChange={(e) => setAddVideo(e.target.files[0])}
            />
            <button
              className="py-2 bg-blue-500 px-5 rounded-lg text-white text-xl w-full sm:w-auto"
              onClick={submitVideo}
            >
              Add+
            </button>
          </div>

          {/* Video Player */}
          <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-end mt-6 sm:mt-0">
            <video
              src={videos[0]?.video}
              controls
              loop
              className="w-full max-w-lg h-full"
              autoPlay
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedia;
