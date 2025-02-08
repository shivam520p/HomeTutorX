import React, { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { toast } from "react-hot-toast";
import { AdminContext } from "../adminhandling/AdminProvider";
import axios from "axios";

export const TutorContext = createContext();
export const TutorProvider = ({ children }) => {
  const [toUpadate, setToUpdate] = useState("");
  const { getTutorCourses } = useContext(AdminContext);
  const [popUp, setPopUp] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);
  const [selectedLead, setSelectedLead] = useState([]);
  useEffect(() => {
    setProfileEdit(true);
  }, []);
  const [tutor, setTutor] = useState(null);
  const [tutorName, setTutorName] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });
  const [studentName, setStudentName] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });
  const [studentProfile, setStudentProfile] = useState({
    gender: "",
    dateOfBirth: "",
    state: "",
    city: "",
    pinCode: "",
    country: "",
    studentSubject: "",
    about: "",
  });

  const [tutorProfile, setTutorProfile] = useState({
    type: "address",
    gender: "",
    dateOfBirth: "",
    street: "",
    state: "",
    city: "",
    pinCode: "",
    country: "",
    language: "",
    sessionsFee: "",
    about: "",
  });

  const [educationDetails, setEducationDetails] = useState({
    type: "qualifications",
    degree: "",
    institution: "",
    country: "",
    city: "",
    startDate: "",
    yearOfCompletion: "",
  });

  const [experienceDetails, setExperienceDetails] = useState({
    type: "experience",
    role: "",
    employmentType: "",
    institutionName: "",
    location_Type: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
  });

  const [certificatesDetails, setCertificatesDetails] = useState({
    type: "certifications",
    certificationPic: "",
    name: "",
    issuingOrganization: "",
    issuedDate: "",
    expireDate: "",
  });

  const [newPassword, setNewPassword] = useState({
    Password: "",
    newPassword: "",
  });
  const [allSessionBook, setAllSessionBook] = useState([]);

  const passwordHandleChange = (e) => {
    const { name, value } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tutorCourses, setTutorCourses] = useState({
    course_title: "",
    description: "",
    duration: "",
    coursePrice: "",
    courseImage: "",
  });

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(
        "/users/changepassword",
        newPassword
      );
      if (response.status === 200) {
        toast.success("Your password has been changed successfully");
        setNewPassword({
          Password: "",
          newPassword: "",
        });
      }
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  };

  const studentProfileHandleChange = (e) => {
    const { name, value } = e.target;
    setStudentProfile({ ...studentProfile, [name]: value });
  };
  const studentProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(
        "/student/updatestudentdetails",
        studentProfile
      );
      if (response.status === 200) {
        toast.success("Your Profile Details has been Submitted successfully");
        setProfileEdit(true);
        getStudentProfileDetails();
      }
    } catch (err) {
      toast.error(toast.success.message);
      console.log(err);
    }
  };
  const getStudentProfileDetails = async () => {
    try {
      const response = await axiosInstance.get("/student/getourDetails");
      if (response.status === 200) {
        setStudentName({
          fullName: response?.data?.user?.fullName,
          email: response?.data?.user?.email,
          avatar: response?.data?.user?.avatar,
        });
        setStudentProfile({
          gender: response?.data.date.gender,
          dateOfBirth: response?.data.date.dateOfBirth,
          language: response?.data.date.language,
          city: response?.data.date.address.city,
          country: response?.data.date.address.country,
          state: response?.data.date.address.state,
          pinCode: response?.data.date.address.pinCode,
          about: response?.data.date.about,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const tutorProfileHandleChange = (e) => {
    const { name, value } = e.target;
    setTutorProfile({ ...tutorProfile, [name]: value });
  };
  const tutorProfileUpdate = async (e) => {
    e.preventDefault();
    if (!toUpadate) {
      try {
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          tutorProfile
        );
        if (response.status === 200) {
          setProfileEdit(true);
          toast.success(response.data.message);
          getTutorDetails();
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          tutorProfile
        );
        if (response.status === 200) {
          setProfileEdit(true);
          toast.success(response.data.message);
          getTutorDetails();
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    }
  };

  const educationDetailsHandleChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails({ ...educationDetails, [name]: value });
  };

  const educationDetailsUpdate = async (e) => {
    e.preventDefault();
    if (!educationDetails.degree) {
      try {
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          educationDetails
        );
        if (response.status === 200) {
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          educationDetails
        );
        if (response.status === 200) {
          setProfileEdit(true);
          toast.success(response.data.message);
          getTutorDetails();
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    }
  };

  const experienceDetailsHandleChange = (e) => {
    const { name, value } = e.target;
    setExperienceDetails({ ...experienceDetails, [name]: value });
  };
  const experienceDetailsUpdate = async (e) => {
    e.preventDefault();
    if (!experienceDetails.role) {
      try {
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          experienceDetails
        );
        if (response.status === 200) {
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          experienceDetails
        );
        if (response.status === 200) {
          setProfileEdit(true);
          toast.success(response.data.message);
          getTutorDetails();
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    }
  };

  const certificateHandleChange = (e) => {
    const { name, value } = e.target;

    if (name === "certificationPic") {
      const file = e.target.files[0];
      setCertificatesDetails((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setCertificatesDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const certificatesDetailsUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Add type
    formData.append("type", "certifications");
    // Add all fields individually
    formData.append("name", certificatesDetails.name);
    formData.append(
      "issuingOrganization",
      certificatesDetails.issuingOrganization
    );
    formData.append("issuedDate", certificatesDetails.issuedDate);
    formData.append("expireDate", certificatesDetails.expireDate);

    if (certificatesDetails?.certificationPic) {
      formData.append("certificationPic", certificatesDetails.certificationPic);
    }

    if (!certificateDone) {
      try {
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              token: localStorage.getItem("token"),
            },
          }
        );

        if (response.status === 200) {
          toast.success(
            "Certificate details have been submitted successfully!"
          );
          setProfileEdit(true);
          getTutorDetails();
        }
      } catch (err) {
        toast.error("An error occurred: " + err.response.data.message);
        console.log(err);
      }
    } else {
      console.log(certificatesDetails);

      try {
        const response = await axiosInstance.put(
          "/tutor/updateTutorDetails",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Token: localStorage.getItem("token"),
            },
          }
        );
        if (response.status === 200) {
          toast.success("Certificate details have been updated successfully!");
          setProfileEdit(true);
          getTutorDetails();
        }
      } catch (err) {
        toast.error("An error occurred: " + err.message);
        console.log(err);
      }
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("avatar", file);
    setLoading(true);
    try {
      const response = await axiosInstance.put("/users/addavatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        setTutorName({
          avatar: response.data.data.avatar,
        });
        setStudentName({
          avatar: response.data.data.avatar,
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const editAgainProfile = () => {
    setProfileEdit(false);
  };

  const [tutorDetails, setTutorDetails] = useState(null);
  const [certificateDone, setCertificateDone] = useState(false);
  const getTutorDetails = async () => {
    try {
      const response = await axiosInstance.get("tutor/getourdetails");
      console.log(response);
      if (response.status === 200) {
        setToUpdate(response?.data?.data?.address);
        setTutorName(response?.data?.user);
        if (response?.data?.data?.certifications) {
          setCertificateDone(true);
        }
        setTutorProfile({
          type: "address",
          gender: response.data.data.address.gender,
          dateOfBirth: response.data.data.address.dateOfBirth,
          state: response.data.data.address.state,
          street: response.data.data.address.street,
          sessionsFee: response.data.data.address.sessionsFee,
          city: response.data.data.address.city,
          pinCode: response.data.data.address.pinCode,
          country: response.data.data.address.country,
          language: response.data.data.address.language,
          about: response.data.data.address.about,
        });
        setEducationDetails({
          type: "qualifications",
          degree: response?.data?.data?.qualifications[0]?.degree,
          institution: response?.data?.data?.qualifications[0]?.institution,
          country: response?.data?.data?.qualifications[0]?.country,
          city: response?.data?.data?.qualifications[0]?.city,
          startDate: response?.data?.data?.qualifications[0]?.startDate,
          yearOfCompletion:
            response?.data?.data?.qualifications[0]?.yearOfCompletion,
        });
        setExperienceDetails({
          type: "experience",
          role: response?.data?.data?.experience[0]?.role,
          employmentType: response?.data?.data?.experience[0]?.employmentType,
          institutionName: response?.data?.data?.experience[0]?.institutionName,
          location_Type: response?.data?.data?.experience[0]?.location_Type,
          city: response?.data?.data?.experience[0]?.city,
          country: response?.data?.data?.experience[0]?.country,
          startDate: response?.data?.data?.experience[0]?.startDate,
          endDate: response?.data?.data?.experience[0]?.endDate,
        });
        setCertificatesDetails({
          type: "certifications",
          certificationPic:
            response?.data?.data?.certifications[0]?.certificationPic,
          name: response?.data?.data?.certifications[0]?.name,
          issuingOrganization:
            response?.data?.data?.certifications[0]?.issuingOrganization,
          issuedDate: response?.data?.data?.certifications[0]?.issuedDate,
          expireDate: response?.data?.data?.certifications[0]?.expireDate,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCourseChange = (e) => {
    const { name } = e.target;
    if (e.target.type === "file") {
      setTutorCourses((prev) => ({
        ...prev,
        [name]: e.target.files[0],
      }));
    } else {
      setTutorCourses((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    }
  };
  const addTutorCourses = async (e) => {
    e.preventDefault();
    if (
      !tutorCourses ||
      !tutorCourses.course_title ||
      !tutorCourses.description
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const formData = new FormData();

    // Append fields to FormData
    formData.append("course_title", tutorCourses.course_title);
    formData.append("description", tutorCourses.description);
    formData.append("duration", tutorCourses.duration);
    formData.append("coursePrice", tutorCourses.coursePrice);

    // Ensure courseImage is a valid File object before appending
    if (tutorCourses.courseImage && tutorCourses.courseImage instanceof File) {
      formData.append("courseImage", tutorCourses.courseImage);
    } else if (tutorCourses.courseImage) {
      toast.error("Invalid course image.");
      return;
    } else {
      console.log("No course image provided.");
    }
    try {
      const response = await axiosInstance.post("/course/addcourse", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success("Course added successfully!");
        getTutorCourses();
        setPopUp(false);
      } else {
        toast.error("Failed to add course.");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error(error?.response?.data?.message || "Failed to add course");
    }
  };

  const deleteTutorCourse = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(
          `/course/removecourses/${id}`
        );
        if (response.status === 201) {
          toast.success(response.data.message);
          getTutorCourses();
        }
      } catch (err) {
        toast.error("Somthing went wrong..!!");
        console.log(err);
      }
    } else {
      return false;
    }
  };
  const getAllSessionBook = async () => {
    try {
      const response = await axiosInstance.get("/tutor/getbooksession");
      if (response.status === 200) {
        setAllSessionBook(response.data.findUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookSession = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(
          `/tutor/remove-booksession/${id}`
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          getAllSessionBook();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  };

  const getAllSelectedLead = async () => {
    try {
      const response = await axiosInstance.get("/tutor/getselectleads");
      if (response.status === 200) {
        setSelectedLead(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteSelectedLeads = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(`/lead/removeLead/${id}`);
        if (response.status === 200) {
          toast.success(response.data.message);
          getAllSelectedLead();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  };
  return (
    <TutorContext.Provider
      value={{
        popUp,
        setPopUp,
        tutorDetails,
        setTutorDetails,
        getTutorDetails,
        getStudentProfileDetails,
        tutorProfile,
        setTutorProfile,
        tutorProfileHandleChange,
        tutorProfileUpdate,
        editAgainProfile,
        profileEdit,
        educationDetails,
        setEducationDetails,
        educationDetailsHandleChange,
        educationDetailsUpdate,
        experienceDetails,
        setExperienceDetails,
        experienceDetailsHandleChange,
        experienceDetailsUpdate,
        certificatesDetails,
        setCertificatesDetails,
        certificatesDetailsUpdate,
        certificateHandleChange,
        changePassword,
        passwordHandleChange,
        newPassword,
        setNewPassword,
        handleFileChange,
        handleSubmit,
        loading,
        error,
        tutor,
        tutorName,
        studentName,
        setTutor,
        studentProfile,
        setStudentProfile,
        studentProfileHandleChange,
        studentProfileUpdate,
        tutorCourses,
        setTutorCourses,
        addTutorCourses,
        handleCourseChange,
        allSessionBook,
        setAllSessionBook,
        getAllSessionBook,
        deleteTutorCourse,
        deleteBookSession,
        setStudentName,
        selectedLead,
        getAllSelectedLead,
        deleteSelectedLeads,
      }}
    >
      {children}
    </TutorContext.Provider>
  );
};
