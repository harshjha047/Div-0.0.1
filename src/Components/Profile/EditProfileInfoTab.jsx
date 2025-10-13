import React, { useState } from "react";
import AddressesTab from "./AddressesTab";
import { useProfile } from "../../Contexts/ProfileContext";
import toast from "react-hot-toast";
import api from "../../services/api";

function EditProfileInfoTab() {
  const { getProfileData,setUpdateProfileData,LoadProfileData } = useProfile();
  const initState = {
    email: getProfileData?.email || "",
    phone: getProfileData?.phone || "",
    name: getProfileData?.name || "",
    dateOfBirth: getProfileData?.dateOfBirth || "",
    gender: getProfileData?.gender || "",
  };
  const [inputBox, setInputBox] = useState(initState);
  const { name, email, phone, dateOfBirth, gender } = inputBox;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputBox({ ...inputBox, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data:res} = await api.patch("/users/me", inputBox);
      console.log(res);
      toast.success("User Registered Successfully");
      setUpdateProfileData(false)
      await LoadProfileData()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="profile-content" class="profile-content">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* <!-- Personal Information --> */}
        <form onSubmit={handleSubmit} class="bg-gray-800 rounded-lg p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-white">
              Edit Personal Information
            </h3>
            <button type="submit" class="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Save
            </button>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-gray-400 text-sm mb-1">Full Name</label>
              {/* <p class="text-white">{getProfileData?.name || "NA"}</p> */}
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#0000003a] border border-[#424242bd] rounded-md text-white"
                placeholder="Edit Name"
              />
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-1">Email</label>
              {/* <p class="text-white">{getProfileData?.email || "NA"}</p> */}
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#0000003a] border border-[#424242bd] rounded-md text-white"
                placeholder="Edit Email"
              />
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-1">Phone</label>
              {/* <p class="text-white">{getProfileData?.phone || "NA"}</p> */}
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#0000003a] border border-[#424242bd] rounded-md text-white"
                placeholder="Edit Phone Number"
              />
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-1">
                Date of Birth
              </label>
              {/* <p class="text-white">{getProfileData?.dateOfBirth || "NA"}</p> */}
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#0000003a] border border-[#424242bd] rounded-md text-white"
                placeholder="Edit Date of Birth"
              />
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-1">Gender</label>
              {/* <p class="text-white">{getProfileData?.gender || "NA"}</p> */}
              <div className=" flex ">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value={"male"}
                  onChange={handleChange}
                />

                <p className="text-[#c7c7c7] ml-3">Male</p>
              </div>
              <div className=" flex ">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value={"female"}
                  onChange={handleChange}
                />

                <p className="text-[#c7c7c7] ml-3">Female</p>
              </div>
              <div className=" flex ">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value={"others"}
                  onChange={handleChange}
                />

                <p className="text-[#c7c7c7] ml-3">Others</p>
              </div>
            </div>
          </div>
        </form>
        <AddressesTab />
      </div>
    </div>
  );
}

export default EditProfileInfoTab;
