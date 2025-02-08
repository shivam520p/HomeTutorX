import React, { createContext, useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";

export const DataProvider = createContext();
export const UserVerification = ({ children }) => {
  const navigate = useNavigate();
  // Student Register AP=
  // I fetching start
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    role: "",
  });
  const [otpVisible, setOtpVisible] = useState(false);
  const [forPopUp, setForPopUp] = useState(false);
  const [otp, setOtp] = useState({
    fullName: registerData.fullName,
    email: registerData.email,
    mobile: registerData.mobile,
    password: registerData.password,
    role: "1",
    otp: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [tutorRegisterData, setTutorRegisterData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    role: "2",
  });
  const [tutorOtp, setTutorOtp] = useState({
    fullName: tutorRegisterData.fullName,
    email: tutorRegisterData.email,
    mobile: tutorRegisterData.mobile,
    password: tutorRegisterData.password,
    role: "2",
  });
  const [tutorLoginData, setTutorLoginData] = useState({
    email: "",
    password: "",
  });
  const [forgotData, setForgotData] = useState({
    email: "",
  });

  const [resetData, setResetData] = useState({
    newpassword: "",
  });
  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/users/getuser");
      if (response.status === 200) {
        localStorage.setItem("userData", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const submitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/users/register",
        registerData
      );
      if (response.status === 200) {
        toast.success("OTP Sent Successfully!! In your Entered Email");
        setOtpVisible(true);
      }
    } catch (error) {
      toast.error("Something Went Wrong!! Please Try Again");
      console.log(error);
    }
  };
  const handleChangeOtp = (e) => {
    const { name, value } = e.target;
    setOtp({
      fullName: registerData.fullName,
      email: registerData.email,
      mobile: registerData.mobile,
      password: registerData.password,
      role: registerData.role,
      otp: value,
    });
  };
  const submitOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/register", otp);
      if (response.status === 201) {
        toast.success("User Registered Successfully...!!");
        localStorage.setItem("token", response.data.token);
        const userData = jwtDecode(response.data.token);
        localStorage.setItem("userData", JSON.stringify(userData.user));
        if (userData.user.role === "1") {
          navigate("/");
          window.location.reload();
        } else if (userData.user.role === "2") {
          navigate("/tutordashboard");
          window.location.reload();
        } else {
          navigate("/dashboard");
          window.location.reload();
        }
      }
    } catch (error) {
      toast.error("Something Went Wrong!! Please Try Again");
      console.log(error);
    }
  };
  const loginHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/login", loginData);
      if (response.status === 201) {
        toast.success("User Login Successfully...!!");
        localStorage.setItem("token", response.data.token);
        const userData = jwtDecode(response.data.token);
        localStorage.setItem("userData", JSON.stringify(userData.user));
        if (userData.user.role === "1") {
          navigate("/");
          window.location.reload();
        } else if (userData.user.role === "2") {
          navigate("/tutordashboard");
          window.location.reload();
        } else {
          navigate("/dashboard");
          window.location.reload();
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  // Student Register API fetching end

  // Tutor Register API fetching start

  const tutorHandleChange = (e) => {
    const { name, value } = e.target;
    setTutorRegisterData({ ...tutorRegisterData, [name]: value });
  };
  const tutorSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/users/register",
        tutorRegisterData
      );
      if (response.status === 200) {
        toast.success("OTP Sent Successfully!! In your Entered Email");
        setOtpVisible(true);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  const tutorHandleOtp = (e) => {
    const { name, value } = e.target;
    setTutorOtp({
      fullName: tutorRegisterData.fullName,
      email: tutorRegisterData.email,
      mobile: tutorRegisterData.mobile,
      password: tutorRegisterData.password,
      role: tutorRegisterData.role,
      otp: value,
    });
  };
  const tutorSubmitOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/register", tutorOtp);
      if (response.status === 201) {
        toast.success("Tutor Registered Successfully!!");
        localStorage.setItem("token", response.data.token);
        const userData = jwtDecode(response.data.token);
        localStorage.setItem("userData", JSON.stringify(userData.user));
        navigate("/");
        getUserData();
        if (userData.user.role === "2") {
          navigate("/tutordashboard");
          window.location.reload();
        } else {
          window.location.reload();
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  const tutorLoginHandleChange = (e) => {
    const { name, value } = e.target;
    setTutorLoginData({ ...tutorLoginData, [name]: value });
  };
  const tutorLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/login", tutorLoginData);
      if (response.status === 201) {
        toast.success("Tutor Login Successfully...!!");
        localStorage.setItem("token", response.data.token);
        const userData = jwtDecode(response.data.token);
        localStorage.setItem("userData", JSON.stringify(userData.user));
        navigate("/");
        getUserData();
        if (userData.user.role === "2") {
          navigate("/tutordashboard");
          window.location.reload();
        } else {
          window.location.reload();
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "users/forgetpassword",
        forgotData
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        setForPopUp(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const resetPassword = (token) => async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        `/users/resetpassword/${token}`,
        resetData
      );
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DataProvider.Provider
      value={{
        getUserData,
        registerData,
        setRegisterData,
        otp,
        setOtp,
        loginData,
        setLoginData,
        handleChangeRegister,
        submitRegister,
        handleChangeOtp,
        submitOtp,
        loginHandleChange,
        submitLogin,
        otpVisible,
        tutorRegisterData,
        setTutorRegisterData,
        tutorOtp,
        setTutorOtp,
        tutorLoginData,
        setTutorLoginData,
        tutorHandleChange,
        tutorSubmitRegister,
        tutorHandleOtp,
        tutorSubmitOtp,
        tutorLoginHandleChange,
        tutorLoginSubmit,
        forgotData,
        setForgotData,
        forgotPassword,
        resetData,
        setResetData,
        resetPassword,
        forPopUp,
        setForPopUp,
      }}
    >
      {children}
    </DataProvider.Provider>
  );
};
