import React, { useContext, useEffect, useState } from "react";
import StudyPdf from "./AllStudyMateril/StudyPdf";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import TestLink from "./AllStudyMateril/TestLink";
import { useNavigate } from "react-router-dom";
import TestPaperMaterial from "./AllStudyMateril/TestPaperMaterial";

const StudySection1 = () => {
  const navigate = useNavigate();
  const { allClasses, getAllClasses, getStudyMaterials,getTestPapers,allTestPapers,setClassId } =
    useContext(AdminContext);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [activePart,setActivePart]=useState('Pdf')
  const user = JSON.parse(localStorage.getItem("userData"));
   useEffect(() => {
    const fetchClasses = async () => {
      setIsLoading(true);
      await getAllClasses();
      if (allClasses && allClasses.length > 0) {
        setSelectedLevel(allClasses[0]?.className);
      }
      setIsLoading(false);
    };
    fetchClasses();
  }, []);

  useEffect(() => {
    if (selectedLevel) {
      const fetchMaterials = async () => {
        setIsLoading(true);
        await getStudyMaterials(selectedLevel);
        setIsLoading(false);
      };
      fetchMaterials();
    }
  }, []);

  return (
    <>
      <section className="flex justify-center items-start py-10">
        <div className="flex w-full gap-5 flex-col lg:flex-row">
          <div className="w-full">
            <div className="flex justify-between">
            <h1 className="text-center md:text-left text-3xl lg:text-4xl font-medium underline underline-offset-8 pb-5">
              Study Material Available
            </h1>
            <div className="w-1/4 flex justify-center items-end mb-1 ">
              <span onClick={()=>setActivePart('Pdf')} className={`${activePart==='Pdf'?'rounded-lg bg-blue-400 text-white':'bg-white'} py-2 px-8  cursor-pointer`}>Pdf</span>
              <span onClick={()=>setActivePart('TestPaper')} className={`${activePart==='TestPaper'?'rounded-lg bg-blue-400 text-white':'bg-white'}  py-2  lg:px-4 cursor-pointer`}>Test Paper</span>
            </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4">
              {/* Sidebar */}
              <aside className="w-full lg:w-1/5 bg-white shadow-sm min-h-[300px] max-h-[500px] overflow-auto mb-5 lg:mb-0">
                <h3 className="text-2xl font-semibold pt-3 px-5">
                  Education Levels
                </h3>
                <div>
                  <ul className="p-3">
                    {allClasses &&
                      allClasses.map((level, index) => (
                        <li
                          key={index}
                          className={`px-4 py-2 transition duration-300 cursor-pointer text-base rounded-md ${
                            selectedLevel === level?.className
                              ? "bg-blue-500 text-white"
                              : "hover:bg-blue-100"
                          }`}
                          onClick={() => {
                            if (user) {
                              getStudyMaterials(level?.className);
                              getTestPapers(level?._id);
                              setSelectedLevel(level?.className);
                              setClassId(level?._id)
                            } else {
                              navigate("/register");
                            }
                          }}
                        >
                          {level?.className}
                        </li>
                      ))}
                  </ul>
                </div>
              </aside>

              {/* Main Content */}
              <main className="w-full lg:w-4/5">
                <div className="bg-white p-1 lg:p-3 shadow-sm">
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
                    </div>
                  ) : (
                    activePart==='Pdf' ?<StudyPdf />: allTestPapers?.length>0 ?<TestPaperMaterial/>:(<div className="p-3"><h2 className="w-full text-center text-xl text-gray-300">No test paper is present</h2></div>)
                  )}
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>
      <TestLink />
    </>
  );
};

export default StudySection1;
