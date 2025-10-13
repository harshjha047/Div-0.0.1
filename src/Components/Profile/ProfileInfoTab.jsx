import React from 'react'
import AddressesTab from './AddressesTab'
import { useProfile } from '../../Contexts/ProfileContext'

function ProfileInfoTab() {
    const{getProfileData,updateProfileData, setUpdateProfileData}=useProfile()
  
  return (
    <div id="profile-content" class="profile-content">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* <!-- Personal Information --> */}
        <div class="bg-gray-800 rounded-lg p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-white">Personal Information</h3>
            <button class="text-blue-400 hover:text-blue-300 text-sm font-medium" onClick={()=>setUpdateProfileData(true)}>Edit</button>
          </div>
          
          <div class="space-y-4">
            <div>
              <label class="block text-gray-400 text-sm mb-1">Full Name</label>
              <p class="text-white">{getProfileData?.name || "NA"}</p>
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-1">Email</label>
              <p class="text-white">{getProfileData?.email || "NA"}</p>
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-1">Phone</label>
              <p class="text-white">{getProfileData?.phone || "NA"}</p>
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-1">Date of Birth</label>
              <p class="text-white">{getProfileData?.dateOfBirth?.split("T")[0] || "NA"}</p>
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-1">Gender</label>
              <p class="text-white">{getProfileData?.gender || "NA"}</p>
            </div>
          </div>
        </div>

        <AddressesTab/>
       
      </div>
    </div>
  )
}

export default ProfileInfoTab