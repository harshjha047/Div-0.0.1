import React, { useState } from "react";
import Input from "./Input";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../Contexts/AuthContext";
import api from "../../services/api";

function ResetPasswort() {
  const navigate = useNavigate();
  const {
        setGeneratedOtp,
        setResetPasswordData,genrateOtp } = useAuth();
  const initState = { email: "" };
  const [inputBox, setInputBox] = useState(initState);
  const { email } = inputBox;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputBox({ ...initState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responce = await api.post(
        "/users/request-reset",
        inputBox,{ withCredentials: true }
      );
      setResetPasswordData(inputBox)
      console.log(responce.data);
          let genOtp = genrateOtp();
    setGeneratedOtp(genOtp);
    toast.success(`Otp has sent to ${email}`);
    //   toast.success("Email verified");
      navigate("/auth/account/reset/validation");
    } catch (err) {
      toast.error("Server error");
      console.log(err);
    }
  };

  return (
    <div className="max-w-lg w-full space-y-8 m-auto h-[80vh] flex justify-center items-center">
      <div id="login-form" className="bg-gray-800 rounded-lg p-8 shadow-lg ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Reset Password</h2>
          <p className="mt-2 text-gray-400">
            Enter you email to change your password
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
          <Input
            //   onBlur={handleBlur}
            //   err={errors.email}
            //   classStyle={
            //     errors.email && touched.email ? "border-red-500" : "border-gray-600"
            //   }
            id="email"
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            label="Email Address"
          />
          <button
            //   disabled={isSubmitting}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswort;
