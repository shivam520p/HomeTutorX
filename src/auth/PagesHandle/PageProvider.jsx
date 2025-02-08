import React, { createContext, useContext } from "react";
import { useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { toast } from "react-hot-toast";
import { TutorContext } from "../TutorHandling/TutorProvider";

export const PageContext = createContext();
export const PageProvider = ({ children }) => {
  const {setPopUp}=useContext(TutorContext);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [bookSession,setBookSession]=useState({
    date:"",
    startTime:"",
    endTime:"",
  });

  const contactHandleChange = (e) => {
    const {name,value}=e.target;
    setContactForm({...contactForm,[name]:value});
  };
  const contactHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/contact", contactForm);
      if(response.status===200){
        toast.success(response.data.message);
        setContactForm({fullName:"",email:"",subject:"",message:""});
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const bookSessionHandleChange = (e) => {
    const {name,value}=e.target;
    setBookSession({...bookSession,[name]:value});
  };
  const bookSessionHandleSubmit = (e)=>async(tutorId)=> {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`/student/booksession/${tutorId}`, bookSession);
     if(response.status===201){
      toast.success(response.data.message);
      setPopUp(false);
     }

    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
 
  return (
    <>
      <PageContext.Provider
        value={{
          contactForm,
          setContactForm,
          contactHandleChange,
          contactHandleSubmit,
          bookSession,
          setBookSession,
          bookSessionHandleChange,
          bookSessionHandleSubmit,
        }}
      >
        {children}
      </PageContext.Provider>
    </>
  );
};
