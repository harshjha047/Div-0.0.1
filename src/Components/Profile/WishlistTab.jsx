import React from "react";
import { useProfile } from "../../Contexts/ProfileContext";

function WishlistTab() {
  let { getProfileData } = useProfile();

  return (
    <div id="wishlist-content" class="profile-content ">
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-bold text-white mb-6">
          My Wishlist ({getProfileData?.wishlist?.length} items)
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* <!-- Wishlist Item  --> */}
          {getProfileData?.wishlist?.map((e, i) => 
            <div class="bg-gray-700 rounded-lg p-4 relative group">
              <button class="absolute top-2 right-2 text-red-400 hover:text-red-300 z-10">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
              <img
                src="img/JORDAN1LOWSEBLACKTOE.jpg"
                alt="Jordan 1"
                class="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 class="text-white font-medium text-sm mb-2">
                JORDAN 1 LOW SE BLACK TOE
              </h4>
              <p class="text-orange-400 font-bold mb-3">₹14,999</p>
              <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm">
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistTab;
