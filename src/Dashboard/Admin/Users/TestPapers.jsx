import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import "./Test.css";
import toast from "react-hot-toast";

const TestPapers = () => {
  const {
    testPaperData,
    setTestPaperData,
    questionData,
    setQuestionData,
    optionData,
    setOptionData,
    submitTestPaper,
    getAllSubjects,
    allClasses,
    allSubjects,
  } = useContext(AdminContext);

  // Add option
  const addOption = () => {
    if (!optionData?.optionText?.trim()) {
      toast.error("Please enter some text in option field");
    } else {
      setQuestionData({
        ...questionData,
        options: [...questionData.options, optionData],
      });
      setOptionData({ optionText: "", isCorrect: false });
    }
  };

  // Add question
  const addQuestion = () => {
    if (!questionData?.questionText?.trim() || questionData?.marks === 0) {
      toast.error("Enter question and marks before adding...");
    } else if (questionData?.options?.length < 2) {
      toast.error("At least enter 2 options for each question");
    } else {
      setTestPaperData({
        ...testPaperData,
        questions: [...testPaperData.questions, questionData],
      });
      setQuestionData({ questionText: "", options: [], marks: "" });
    }
  };

  // Removing options
  const removeOption = (id) => {
    const filteredOptions = questionData?.options?.filter(
      (option, index) => id !== index
    );
    setQuestionData({ ...questionData, options: filteredOptions });
  };

  // Remove question
  const removeQuestion = (id) => {
    const filteredQuestions = testPaperData?.questions?.filter(
      (question, index) => id !== index
    );
    setTestPaperData({ ...testPaperData, questions: filteredQuestions });
  };

  useEffect(() => {
    getAllSubjects();
  }, []);

  return (
    <section className="flex flex-col md:flex-row gap-4 p-0 md:p-10">
      {/* Left Section */}
      <div className="border rounded-lg p-4 w-full md:w-2/3">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg sm:text-xl font-medium mb-2"
          >
            Add Title:
          </label>
          <input
            value={testPaperData?.title}
            onChange={(e) =>
              setTestPaperData({ ...testPaperData, title: e.target.value })
            }
            id="title"
            name="title"
            placeholder="Enter title..."
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg sm:text-xl"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-lg sm:text-xl font-medium mb-2"
          >
            Enter description:
          </label>
          <textarea
            id="description"
            value={testPaperData?.description}
            onChange={(e) =>
              setTestPaperData({
                ...testPaperData,
                description: e.target.value,
              })
            }
            name="description"
            rows="3"
            placeholder="Write description..."
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Class Name and Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="subject"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Subject:
            </label>
            <select
              value={testPaperData?.subject}
              onChange={(e) =>
                setTestPaperData({ ...testPaperData, subject: e.target.value })
              }
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 sm:text-lg"
            >
              <option value="Subject" disabled>
                Subject Name
              </option>
              {allSubjects?.length > 0 &&
                allSubjects?.map((subject, index) => (
                  <option key={index} value={subject?.subjectName}>
                    {subject?.subjectName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="classId"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Class Name:
            </label>
            <select
              value={testPaperData?.classId}
              onChange={(e) =>
                setTestPaperData({ ...testPaperData, classId: e.target.value })
              }
              id="classId"
              name="classId"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 sm:text-lg"
            >
              <option value="" disabled>
                Class Name
              </option>
              {allClasses?.length > 0 &&
                allClasses?.map((classObject, index) => (
                  <option key={index} value={classObject?.className}>
                    {classObject?.className}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Marks and Duration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="totalMarks"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Total Marks:
            </label>
            <input
              type="number"
              value={testPaperData?.totalMarks}
              onChange={(e) =>
                setTestPaperData({
                  ...testPaperData,
                  totalMarks: e.target.value,
                })
              }
              id="totalMarks"
              name="totalMarks"
              placeholder="Enter total marks"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg sm:text-xl"
            />
          </div>
          <div>
            <label
              htmlFor="passingMarks"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Passing Marks:
            </label>
            <input
              type="number"
              value={testPaperData?.passingMarks}
              onChange={(e) =>
                setTestPaperData({
                  ...testPaperData,
                  passingMarks: e.target.value,
                })
              }
              id="passingMarks"
              name="passingMarks"
              placeholder="Enter passing marks"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg sm:text-xl"
            />
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Duration:
            </label>
            <input
              value={testPaperData?.duration}
              onChange={(e) =>
                setTestPaperData({ ...testPaperData, duration: e.target.value })
              }
              id="duration"
              name="duration"
              placeholder="Enter duration"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg sm:text-xl"
            />
          </div>
        </div>

        {/* Question Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="questionText"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Add Question:
            </label>
            <input
              value={questionData?.questionText}
              onChange={(e) =>
                setQuestionData({
                  ...questionData,
                  questionText: e.target.value,
                })
              }
              id="questionText"
              name="questionText"
              placeholder="Add Question..."
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg sm:text-xl"
            />
          </div>
          <div>
            <label
              htmlFor="marks"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Add Marks:
            </label>
            <input
              type="number"
              value={questionData?.marks}
              onChange={(e) =>
                setQuestionData({ ...questionData, marks: e.target.value })
              }
              id="marks"
              name="marks"
              placeholder="Add Marks..."
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg sm:text-xl"
            />
          </div>
        </div>

        {/* Option Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="optionText"
              className="block text-lg sm:text-xl font-medium mb-2"
            >
              Add Option:
            </label>
            <div className="flex items-center justify-between">
              <div className="flex w-full">
                <input
                  value={optionData?.optionText}
                  onChange={(e) =>
                    setOptionData({
                      ...optionData,
                      optionText: e.target.value,
                    })
                  }
                  id="optionText"
                  name="optionText"
                  placeholder="Add Option..."
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg sm:text-xl"
                />
                <input
                  type="checkbox"
                  checked={optionData?.isCorrect}
                  onChange={(e) =>
                    setOptionData({
                      ...optionData,
                      isCorrect: e.target.checked,
                    })
                  }
                  id="isCorrect"
                  name="isCorrect"
                  className="ml-2"
                />
              </div>
              <button
                onClick={addOption}
                className="bg-green-500 px-4 py-2 text-white rounded-full"
              >
                +
              </button>
            </div>
          </div>

          {/* Add Question Button */}
          <div className="flex items-center">
            <button
              onClick={addQuestion}
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
            >
              Add To List
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Preview Test Paper */}
      <div
        className={`w-full md:w-1/3 bg-blue-100 p-5 rounded-lg shadow-md overflow-auto max-h-[75vh]`}
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Test Paper Preview
        </h2>
        {testPaperData?.questions?.map((question, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <p className="font-bold">{`${index + 1}) ${
                question?.questionText
              }`}</p>
              <span className="text-sm text-gray-500">
                {question?.marks} Marks
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {question?.options?.map((option, idx) => (
                <div
                  key={idx}
                  className={`${
                    option?.isCorrect
                      ? "bg-green-200 text-green-500"
                      : "bg-red-200 text-red-500"
                  } p-2 rounded-lg`}
                >
                  {`${String.fromCharCode(97 + idx)}) ${option?.optionText}`}
                </div>
              ))}
            </div>
            <button
              onClick={() => removeQuestion(index)}
              className="text-red-500 mt-2 hover:text-red-700"
            >
              Remove Question
            </button>
          </div>
        ))}
        <div className="flex justify-end">
          <button
            onClick={submitTestPaper}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestPapers;
