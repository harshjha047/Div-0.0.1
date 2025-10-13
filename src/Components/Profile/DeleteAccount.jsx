import React from "react";

function DeleteAccount() {
  return (
    <div class="pt-6 border-t border-gray-700">
      <div class="flex justify-between items-center">
        <div>
          <h4 class="text-white font-medium">Delete Account</h4>
          <p class="text-gray-400 text-sm">
            Permanently delete your account and all data
          </p>
        </div>
        <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteAccount;
