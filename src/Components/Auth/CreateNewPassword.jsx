import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import Input from "./Input";
import toast from "react-hot-toast";
import api from "../../services/api";

function CreateNewPassword() {
  const navigate = useNavigate();
  const {setResetPasswordData, genrateOtp, setGeneratedOtp } =
    useAuth();
  const initState = { email: "", newPassword: "", confirmPassword: "" };
  const [inputBox, setInputBox] = useState(initState);
  const { email, newPassword, confirmPassword } = inputBox;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputBox({ ...inputBox, [name]: value });
  };
  console.log(inputBox);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await api.patch("/users/reset-password",inputBox,{ withCredentials: true });
      setResetPasswordData(inputBox);
      console.log(responce.data);
      let genOtp = genrateOtp();
      setGeneratedOtp(genOtp);
      toast.success("Password reset successful");
      navigate("/auth");
    } catch (err) {
      toast.error("Server error");
      console.log(err);
    }
  };
  return (
    <div className="max-w-lg w-full space-y-8 m-auto h-[100vh] flex justify-center items-center">
      <div id="login-form" className="bg-gray-800 rounded-lg p-8 shadow-lg ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Create New Password</h2>
          <p className="mt-2 text-gray-400">Enter you email and new password</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
          <Input
            id="email"
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            label="Email Address"
          />
          <Input
            id="newPassword"
            value={newPassword}
            onChange={handleChange}
            type="password"
            placeholder="Create new password"
            label="Create Password"
          />
          <Input
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="Confirm password"
            label="Confirm Password"
          />
          <button
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

export default CreateNewPassword;
