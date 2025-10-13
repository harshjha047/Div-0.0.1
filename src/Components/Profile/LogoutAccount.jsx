import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../../Contexts/ProfileContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../../Contexts/AuthContext';

function LogoutAccount() {
    const { setGetProfileData } = useProfile(); // assuming this sets user data
    const {logout}=useAuth()
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // await axios.post(
      //   "http://localhost:5000/api/users/logout",
      //   {},
      //   { withCredentials: true } // important for cookies
      // );
      logout()
      setGetProfileData(null);
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to logout. Try again.");
    }
  };

  return (
   <div class="pt-6 border-t border-gray-700">
              <div class="flex justify-between items-center">
                <div>
                  <h4 class="text-white font-medium">Logout Account</h4>
                  <p class="text-gray-400 text-sm">Logout this account you can login again whenever you want</p>
                </div>
                <button class="px-4 py-2 bg-[#c97800] text-white rounded-lg hover:bg-zinc-700 text-sm" onClick={handleLogout}>Logout</button>
              </div>
            </div>
  )
}

export default LogoutAccount