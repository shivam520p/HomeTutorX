import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const TitleSection = () => {
  const { allTitle, getAllQuotes } = useContext(AdminContext);
  useEffect(() => {
    getAllQuotes();
  }, []);
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="container mx-auto px-4 pb-10">
          <div className="">
            {allTitle.map((title, index) => (
              <div key={index} className="py-5 ">
                <h1 className="text-black text-2xl font-medium border-b-2 ">
                  {title.titleName}
                </h1>
                <p className="text-gray-600 text-base">{title.titleContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TitleSection;
