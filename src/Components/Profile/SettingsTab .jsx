import React from "react";
import ChangePasswordProfile from "./ChangePasswordProfile";
import LogoutAccount from "./LogoutAccount";
import DeleteAccount from "./DeleteAccount";

function SettingsTab() {
  return (
    <div id="settings-content" class="profile-content ">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* <!-- Account Settings --> */}
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-6">Account Settings</h3>

          <div class="space-y-6">
            {/* <!-- Change Password --> */}
            <ChangePasswordProfile />

            {/* <!-- Logout Account --> */}
            <LogoutAccount />

            {/* <!-- Delete Account --> */}
            <DeleteAccount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsTab;
