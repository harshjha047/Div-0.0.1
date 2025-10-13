import React, { useEffect, useState } from "react";
import Input from "../Auth/Input";
import { useAuth } from "../../Contexts/AuthContext";
import { useProfile } from "../../Contexts/ProfileContext";
import toast from "react-hot-toast";

function ChangePasswordProfile() {
  const {  setResetPasswordData } =useAuth();
  const { getProfileData,LoadProfileData } =useProfile();
  
  const [emailValue, setEmailValue] = useState(getProfileData?.email);



  const initState = { email: emailValue, newPassword: "", confirmPassword: "" };
  const [inputBox, setInputBox] = useState(initState);
  const { email, newPassword, confirmPassword } = inputBox;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputBox({ ...inputBox, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await api.patch(
        "/users/reset-password",
        inputBox
      );
      setResetPasswordData(inputBox);
      toast.success("Password reset successful");
      await LoadProfileData()
      setInputBox(initState)
    } catch (err) {
      toast.error("Server error");
      console.log(err);
    }
  };
    useEffect(()=>{setEmailValue(getProfileData?.email)},[])

  return (
    <div>
      <h4 class="text-white font-medium mb-3">Change Password</h4>
        <form className="space-y-3" onSubmit={handleSubmit} autoComplete="off">
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
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Update Password
          </button>
        </form>
      </div>
  );
}

export default ChangePasswordProfile;
