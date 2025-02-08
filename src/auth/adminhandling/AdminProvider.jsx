import React, { createContext, useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { toast } from "react-hot-toast";
import axios from "axios";

export const AdminContext = createContext();
export const AdminProvider = ({ children }) => {
  const [popUp, setPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [id, setId] = useState("");
  const [titleBtn, setTitleBtn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [allTutor, setAllTutor] = useState([]);
  const [searchTutors, setSearchTutors] = useState([]);
  const [allStudent, setAllStudent] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [tutorCourses, setTutorCourses] = useState([]);
  const [bookedPlan, setBookedPlan] = useState([]);
  const [handleLink, setHandleLink] = useState("contactForm");
  const [materialId, setMaterialId] = useState(null);
  const [allSubjects, setAllSubjects] = useState([]);
  const [newSubjects, setNewSubjects] = useState({
    subjectName: "",
    image: "",
  });

  const [allClasses, setAllClasses] = useState([]);
  const [newClasses, setNewClasses] = useState({
    className: "",
    image: "",
  });
  const [allLanguage, setAllLanguage] = useState([]);
  const [newLanguage, setNewLanguage] = useState({
    languageName: "",
  });
  const [allContactUs, setAllContactUs] = useState([]);
  const [quoteForm, setQuoteFrom] = useState({
    titleName: "",
    titleContent: "",
  });

  const [allTitle, setAllTile] = useState([]);
  const [selectedClass, setSelectedClass] = useState({
    classesId: "",
    subjectName: [],
    mode: "",
    details: {
      fullName: "",
      mobile: "",
      email: "",
      fee: "",
    },
    addressDetails: {
      street: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
    },
  });
  const [mode, setMode] = useState("");
  const [allLeads, setAllLeads] = useState([]);
  const [searchLead, setSearchLead] = useState([]);

  const [planList, setPlanList] = useState({
    name: "",
    description: "",
    price: "",
    leadlimit: "",
    duration: "",
    features: [],
  });
  const [newFeature, setNewFeature] = useState(""); // State to handle new feature input

  const subjectHandleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      if (file) {
        if (file.type.startsWith("image/")) {
          setNewSubjects({ ...newSubjects, image: file });
        } else {
          toast.error("Please select an image file");
        }
      }
    } else {
      setNewSubjects({ ...newSubjects, [name]: value });
    }
  };

  const languageHandleChange = (e) => {
    const { name, value } = e.target;
    setNewLanguage({ ...newLanguage, [name]: value });
  };

  const addLanguage = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/admin/createlanguage",
        newLanguage
      );

      if (response.status === 200) {
        toast.success("Language added successfully..!!");
        setPopUp(false);
        setNewLanguage({
          languageName: "",
        });
        getAllLanguage();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateLanguage = async (e) => {
    if (window.confirm("Are you sure you want to update this..??")) {
      e.preventDefault();
      try {
        const response = await axiosInstance.put(
          `/admin/updatelanguage/${id}`,
          newLanguage
        );
        if (response.status === 200) {
          toast.success("Language Updated successfully..!!");
          setEditPopUp(false);
          setNewLanguage({
            languageName: "",
          });
          getAllLanguage();
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      return false;
    }
  };
  const getAllLanguage = async () => {
    try {
      const response = await axiosInstance.get("/admin/getlanguage");
      if (response.status === 200) {
        setAllLanguage(response.data.languages);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteLanguage = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(
          `/admin/removeLanguage/${id}`
        );
        if (response.status === 200) {
          toast.success("Language deleted successfully!");
          getAllLanguage();
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      return false;
    }
  };

  const addSubject = async (e) => {
    e.preventDefault();
    // Validate form data
    if (!newSubjects.subjectName || !newSubjects.image) {
      toast.error("Please fill all required fields");
      return;
    }
    const formData = new FormData();
    formData.append("subjectName", newSubjects.subjectName);
    formData.append("image", newSubjects.image);
    try {
      const response = await axiosInstance.post(
        "/admin/createsubject",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setPopUp(false);
        toast.success("Subject added successfully!");
        // Clear the form
        setNewSubjects({
          subjectName: "",
          image: "",
        });
        // Refresh the subjects list
        getAllSubjects();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateSubject = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to update this..??")) {
      if (!newSubjects.subjectName || !newSubjects.image) {
        toast.error("Please fill all required fields");
        return;
      }
      const formData = new FormData();
      formData.append("subjectName", newSubjects.subjectName);
      formData.append("image", newSubjects.image);
      try {
        const response = await axiosInstance.put(
          `/admin/updatesubject/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          setEditPopUp(false);
          toast.success("Subject Updated successfully!");
          setNewSubjects({
            subjectName: "",
            image: "",
          });
          getAllSubjects();
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      return false;
    }
  };

  const getAllSubjects = async () => {
    try {
      const response = await axiosInstance.get("/admin/getsubject");
      if (response.status === 200) {
        setAllSubjects(response.data.subjects);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSubject = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(
          `/admin/removesubject/${id}`
        );
        if (response.status === 200) {
          toast.success("Subject deleted successfully!");
          getAllSubjects();
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      return false;
    }
  };

  const classHandleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      if (file) {
        if (file.type.startsWith("image/")) {
          setNewClasses({ ...newClasses, image: file });
        } else {
          toast.error("Please select an image file");
        }
      }
    } else {
      setNewClasses({ ...newClasses, [name]: value });
    }
  };

  const addClass = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!newClasses.className || !newClasses.image) {
      toast.error("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("className", newClasses.className);
    formData.append("image", newClasses.image);

    try {
      const response = await axiosInstance.post(
        "/admin/createclass",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setPopUp(false);
        toast.success("Class added successfully!");
        setNewClasses({
          className: "",
          image: "",
        });
        getAllClasses();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateClass = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to update this..??")) {
      // Validate form data
      if (!newClasses.className || !newClasses.image) {
        toast.error("Please fill all required fields");
        return;
      }

      const formData = new FormData();
      formData.append("className", newClasses.className);
      formData.append("image", newClasses.image);

      try {
        const response = await axiosInstance.put(
          `/admin/updateclass/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          setEditPopUp(false);
          toast.success("Class Updated successfully!");
          setNewClasses({
            className: "",
            image: "",
          });
          getAllClasses();
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      return false;
    }
  };

  const getAllClasses = async () => {
    try {
      const response = await axiosInstance.get("/admin/getclass");
      if (response.status === 200) {
        setAllClasses(response.data.classes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteClass = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(`/admin/removeclass/${id}`);
        if (response.status === 200) {
          toast.success("Class deleted successfully!");
          getAllClasses();
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      return false;
    }
  };

  const getAllCourses = async () => {
    try {
      const response = await axiosInstance.get("/admin/getcourseDetails");
      if (response.status === 200) {
        setAllCourses(response.data.course_Data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await axiosInstance.get("/admin/getallDetails");
      if (response.status === 200) {
        setAllStudent(response.data.student_Data);
        setAllTutor(response.data.Tutor_Data);
        setSearchTutors(response.data.Tutor_Data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const tutorDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(`/admin/removeTutor/${id}`);
        if (response.status === 200) {
          toast.success("Tutor deleted successfully...!!");
          getAllUsers();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  };
  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(
          `/admin/removestudent/${id}`
        );
        if (response.status === 200) {
          toast.success("Student deleted successfully...!!");
          getAllUsers();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  };

  const getAllContactUs = async () => {
    try {
      const response = await axiosInstance.get("/admin/getallcontactsmessages");
      if (response.status === 200) {
        setAllContactUs(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getTutorCourses = async () => {
    try {
      const response = await axiosInstance.get("/tutor/getourcourses");
      if (response.status === 200) {
        setTutorCourses(response.data.coursesByCreateUser);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const tutorVerify = async (tutor) => {
    try {
      if (tutor.isBlocked) {
      } else {
        const response = await axiosInstance.put(
          `/admin/updatestatus/${tutor._id}`
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          getAllUsers();
        }
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  const tutorBlock = async (block, id) => {
    try {
      let blockTutor = "";
      if (block) {
        blockTutor = "unblock";
      } else {
        blockTutor = "block";
      }
      const response = await axiosInstance.put(`/admin/blocked/${id}`, {
        action: blockTutor,
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        getAllUsers();
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
  const studentBlock = async (block, id) => {
    try {
      let blockStudent = "";
      if (block) {
        blockStudent = "unblock";
      } else {
        blockStudent = "block";
      }
      const response = await axiosInstance.put(`/admin/blocked/${id}`, {
        action: blockStudent,
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        getAllUsers();
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
  const [tutorScreen, setTutorScreen] = useState([]);

  const getAllTutors = async () => {
    try {
      const response = await axiosInstance.get("/admin/verify");
      if (response.status === 200) {
        setTutorScreen(response.data.fliterTutor);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitQuary = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "lead/postleads",
        selectedClass
      );
      console.log();
      if (response.status === 201) {
        toast.success("Session booked!! Your tutor will connect soon.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllLeadsFromUser = async () => {
    try {
      const response = await axiosInstance.get("lead/getleads");
      if (response.status === 200) {
        setAllLeads(response?.data?.lead);
        setSearchLead(response?.data?.lead);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const quoteHandleChange = (e) => {
    const { name, value } = e.target;
    setQuoteFrom({ ...quoteForm, [name]: value });
  };
  const quoteSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/title/posttitle", quoteForm);
      if (response.status === 200) {
        toast.success(response.data.message);
        setQuoteFrom({ titleName: "", titleContent: "" });
        getAllQuotes();
      }
    } catch (err) {
      toast.error("All Fields are required..!!");
      console.log(err);
    }
  };

  const quoteUpdate = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to update this..??")) {
      try {
        const response = await axiosInstance.put(
          `/title/updatetitle/${id}`,
          quoteForm
        );
        if (response.status === 200) {
          toast.success(response.data.mesage);
          setQuoteFrom({ titleName: "", titleContent: "" });
          getAllQuotes();
        }
      } catch (err) {
        toast.error("All Fields are required..!!");
        console.log(err);
      }
    }
  };
  const getAllQuotes = async () => {
    try {
      const response = await axiosInstance.get("/title/getalltitle");
      if (response.status === 200) {
        setAllTile(response.data.titles);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteQuotes = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(`/title/removetitle/${id}`);
        if (response.status === 200) {
          toast.success("Quotes deleted successfully...!!");
          getAllQuotes();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  };

  const deleteLeads = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(`/lead/removeLead/${id}`);
        if (response.status === 200) {
          toast.success(response.data.message);
          getAllLeadsFromUser();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  };

  const statusOfLeads = async (value, id) => {
    try {
      const response = await axiosInstance.put(
        `lead/update-lead-status/${id}`,
        {
          status: value,
        }
      );
      if (response.status === 200) {
        getAllLeadsFromUser();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const planHandleChange = (e) => {
    const { name, value } = e.target;
    if (name === "features") {
      setNewFeature(value);
    } else {
      setPlanList({ ...planList, [name]: value });
    }
  };
  const handleAddFeature = () => {
    setPlanList({
      ...planList,
      features: [...planList.features, newFeature],
    });
  };

  const handlePlanSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/plan/subscribe", planList, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 201) {
        toast.success(response.data.message);
        setPopUp(false);
        setPlanList({
          name: "",
          description: "",
          price: "",
          duration: "",
          features: [],
        });
        getAllSubscriptions();
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
  const [allSubscriptions, setAllSubscriptions] = useState([]);
  const getAllSubscriptions = async () => {
    try {
      const response = await axiosInstance.get("plan/subscribe");
      if (response.status === 200) {
        setAllSubscriptions(response.data.plans);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSubscription = async (id) => {
    let confirm = window.confirm("Are you sure you want to delete this item?");
    if (confirm) {
      try {
        const response = await axiosInstance.delete(`plan/subscribe/${id}`);
        if (response.status === 200) {
          toast.success(response.data.message);
          getAllSubscriptions();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  };

  const removeInquaryForm = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(
          `admin/remove-contactsmessages/${id}`
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          getAllContactUs();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  };
  const [loading, setLoading] = useState(true); // To track loading state
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const getPlanOfSubscriptions = async (id) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put(`admin/generateQRCode/${id}`);
      if (response.status === 200) {
        setQrCodeUrl(response.data.data.qrCodeUrl);
      }
      const response2 = await axiosInstance.post(`admin/createLead/${id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getAllSubsribedPlan = async () => {
    try {
      const response = await axiosInstance.get("admin/get-all-Lead");
      console.log(response);
      if (response.status === 200) {
        setBookedPlan(response.data.findAll);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updatePlanStatus = async (value, id) => {
    try {
      const response = await axiosInstance.put(`admin/update-status/${id}`, {
        status: value,
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        getAllSubsribedPlan();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateMyLeadInfo = async (id) => {
    try {
      const response = await axiosInstance.get(`lead/select-lead/${id}`);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  const deletePlanPurched = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(`admin/remove-Lead/${id}`);
        if (response.status === 200) {
          toast.success(response.data.message);
          getAllSubsribedPlan();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return false;
    }
  };

  const tutorSearchByPinCode = async (pincode) => {
    try {
      const response = await axiosInstance.get(
        `admin/searchtutor?pinCode=${pincode}`
      );
      if (response.status === 200) {
        setSearchTutors(response.data.data);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  const leadSearchByPinCode = async (pincode) => {
    try {
      const response = await axiosInstance.get(
        `lead/searchlead?pinCode=${pincode}`
      );
      if (response.status === 200) {
        setSearchLead(response.data.leads);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  const [studyMaterialData, setStudyMaterialData] = useState({
    className: "",
    questionPdf: "",
    answerPdf: "",
    description: "",
  });
  const handleChangeStudyData = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setStudyMaterialData((prevData) => ({
        ...prevData,
        [name]: files[0], // Store the file for "questionPdf" or "answerPdf"
      }));
    } else {
      setStudyMaterialData((prevData) => ({
        ...prevData,
        [name]: value, // Update text input fields
      }));
    }
  };

  const submitStudyData = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page on submit

    const formData = new FormData();

    // Append each field to FormData
    formData.append("className", studyMaterialData.className);
    formData.append("description", studyMaterialData.description);

    // Check if files are present before appending
    if (studyMaterialData.questionPdf) {
      formData.append("questionPdf", studyMaterialData.questionPdf);
    }
    if (studyMaterialData.answerPdf) {
      formData.append("answerPdf", studyMaterialData.answerPdf);
    }

    // Log each field in FormData

    try {
      const response = await axiosInstance.post(
        "/study/upload-study-material",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setStudyMaterialData({
          className: "",
          questionPdf: "",
          answerPdf: "",
          description: "",
        });
        toast.success(response.data?.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.error);
      console.error("Error:", error);
    }
  };

  const [studyMaterials, setStudyMaterials] = useState([]);

  const getStudyMaterials = async (className) => {
    try {
      const response = await axiosInstance.get(
        `study/getall-study-material/${className}`
      );

      if (response.status === 200) {
        setStudyMaterials(response.data.studymaterial);
      }
    } catch (err) {
      setStudyMaterials([]);
      console.log(err);
    }
  };

  const deleteStudyMaterial = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(
          `study/remove-study-material/${id}`
        );
        if (response?.status === 200) {
          toast.success(response?.data?.message);
          const newStudyMaterial = studyMaterials.filter((study) => {
            return study._id !== id;
          });
          setStudyMaterials(newStudyMaterial);
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
        console.log(err);
      }
    } else {
      return false;
    }
  };
  const updateStudyData = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page on submit

    const formData = new FormData();

    // Append each field to FormData
    formData.append("className", studyMaterialData.className);
    formData.append("description", studyMaterialData.description);

    // Check if files are present before appending
    if (studyMaterialData.questionPdf) {
      formData.append("questionPdf", studyMaterialData.questionPdf);
    }
    if (studyMaterialData.answerPdf) {
      formData.append("answerPdf", studyMaterialData.answerPdf);
    }

    // Log each field in FormData

    try {
      const response = await axiosInstance.put(
        `/study/uploadpdf/${materialId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        getStudyMaterials();
        setStudyMaterialData({
          className: "",
          questionPdf: "",
          answerPdf: "",
          description: "",
        });
        toast.success(response.data?.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.error);
      console.error("Error:", error);
    }
  };
  const [addPhoto, setAddPhoto] = useState("");
  const [addVideo, setAddVideo] = useState("");
  const [allImages, setAllImages] = useState([]);

  const getAllImages = async () => {
    try {
      const response = await axiosInstance.get("/slider/get");
      setAllImages(response?.data?.findimage[0]?.images);
    } catch (err) {
      console.log(err);
    }
  };
  const submitPhoto = async (e) => {
    e.preventDefault();

    // Check if file is selected
    if (!addPhoto) {
      alert("You are not choosen any photo!!");
      return; // Exit function if no file is selected
    }

    const formData = new FormData();
    formData.append("imageUrl", addPhoto); // Append the selected file

    try {
      const response = await axiosInstance.post("/slider/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success(response?.data?.message);
        setAddPhoto("");
        getAllImages();
      }
    } catch (err) {
      toast.error(err?.response?.data?.error);
      console.log(err);
    }
  };

  const deleteImage = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(`/slider/delete/${id}`);
        toast.success(response?.data?.message);
        const newImages = allImages.filter((image) => image._id !== id);
        setAllImages(newImages);
      } catch (err) {
        toast.error(err?.response?.data?.message);
        console.log(err);
      }
    } else {
      return false;
    }
  };

  const [videos, setVideos] = useState([]);
  const getAllVideo = async () => {
    try {
      const response = await axiosInstance.get("/video/get");
      setVideos(response?.data?.findVideo);
      setAllImages(response?.data?.findimage[0]?.images);
    } catch (err) {
      console.log(err);
    }
  };

  const submitVideo = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("video", addVideo);

    try {
      const response = await axiosInstance.post(`/video/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success(response?.data?.message);
        setAddVideo("");
        getAllVideo();
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      console.log(err);
    }
  };
  // test paper section
  const [testPaperData, setTestPaperData] = useState({
    title: "",
    description: "",
    subject: "",
    classId: "",
    totalMarks: "",
    passingMarks: "",
    duration: "",
    questions: [],
  });
  const [questionData, setQuestionData] = useState({
    questionText: "",
    options: [],
    marks: 0,
  });
  const [optionData, setOptionData] = useState({
    optionText: "",
    isCorrect: false,
  });
  const [classId, setClassId] = useState(null);
  const [allTestPapers, setAllTestPapers] = useState([]);
  const getTestPapers = async (id) => {
    try {
      const response = await axiosInstance.get(`/test/test-by-class/${id}`);
      if (response?.data?.success) {
        setAllTestPapers(response?.data?.testPaper);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const submitTestPaper = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.1.7:8080/api/v1/test/upload-test-paper",
        testPaperData
      );
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        setTestPaperData({
          title: "",
          description: "",
          subject: "",
          classId: "",
          totalMarks: "",
          passingMarks: "",
          duration: "",
          questions: [],
        });
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      console.log(err);
    }
  };
  const [deleteIdx, setDeleteIdx] = useState(null);
  const [deletingTest, setDeletingTest] = useState(null);
  const [deletingConfirm, setDeletingConfirm] = useState(null);
  const deleteTestPaper = async (id) => {
    setDeletingTest(id);
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axiosInstance.delete(
          `/test/delete-test-paper/${id}`,
          {
            headers: {
              Token: localStorage.getItem("token"),
            },
          }
        );
        if (response?.data?.success) {
          setTimeout(() => {
            setDeletingTest(null);
            setDeleteIdx(id);
            setDeletingConfirm(id);
          }, 1500);
          setTimeout(() => {
            setDeletingConfirm(null);
            const filteredTest = allTestPapers.filter(
              (test) => test?._id !== id
            );
            setAllTestPapers(filteredTest);
          }, 3000);
          toast.success(response?.data?.message);
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
        console.log(err);
        setDeletingTest(null);
      }
    }
  };
  return (
    <AdminContext.Provider
      value={{
        deleteImage,
        videos,
        getAllImages,
        allImages,
        submitPhoto,
        submitVideo,
        getAllVideo,
        setAddVideo,
        setAddPhoto,
        statusOfLeads,
        getAllUsers,
        allStudent,
        allTutor,
        tutorDelete,
        deleteStudent,
        allCourses,
        getAllCourses,
        popUp,
        setPopUp,
        subjectHandleChange,
        addSubject,
        allSubjects,
        getAllSubjects,
        newSubjects,
        deleteSubject,
        addClass,
        allClasses,
        getAllClasses,
        newClasses,
        classHandleChange,
        deleteClass,
        allLanguage,
        getAllLanguage,
        newLanguage,
        languageHandleChange,
        addLanguage,
        deleteLanguage,
        allContactUs,
        getAllContactUs,
        tutorCourses,
        setTutorCourses,
        getTutorCourses,
        tutorVerify,
        selectedClass,
        setSelectedClass,
        mode,
        setMode,
        quoteForm,
        setQuoteFrom,
        quoteHandleChange,
        quoteSubmit,
        allTitle,
        setAllTile,
        getAllQuotes,
        deleteQuotes,
        submitQuary,
        allLeads,
        setAllLeads,
        getAllLeadsFromUser,
        deleteLeads,
        tutorBlock,
        studentBlock,
        planList,
        setPlanList,
        newFeature,
        setNewFeature,
        handleAddFeature,
        planHandleChange,
        handlePlanSubmit,
        allSubscriptions,
        getAllSubscriptions,
        deleteSubscription,
        isChecked,
        setIsChecked,
        removeInquaryForm,
        setNewSubjects,
        loading,
        setLoading,
        qrCodeUrl,
        setQrCodeUrl,
        getPlanOfSubscriptions,
        editPopUp,
        setEditPopUp,
        updateSubject,
        updateClass,
        id,
        setId,
        setNewClasses,
        setNewLanguage,
        updateLanguage,
        titleBtn,
        setTitleBtn,
        quoteUpdate,
        bookedPlan,
        setBookedPlan,
        getAllSubsribedPlan,
        updatePlanStatus,
        updateMyLeadInfo,
        deletePlanPurched,
        tutorSearchByPinCode,
        searchTutors,
        setSearchTutors,
        searchLead,
        setSearchLead,
        leadSearchByPinCode,
        studyMaterials,
        getStudyMaterials,
        studyMaterialData,
        setStudyMaterialData,
        handleChangeStudyData,
        submitStudyData,
        deleteStudyMaterial,
        handleLink,
        setHandleLink,
        materialId,
        setMaterialId,
        updateStudyData,
        tutorScreen,
        getAllTutors,
        testPaperData,
        setTestPaperData,
        questionData,
        setQuestionData,
        optionData,
        setOptionData,
        allTestPapers,
        getTestPapers,
        submitTestPaper,
        deletingTest,
        deletingConfirm,
        deleteIdx,
        setDeleteIdx,
        setClassId,
        deleteTestPaper,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
