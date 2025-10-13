import React from "react";
import { useProfile } from "../../Contexts/ProfileContext";
import WishlistItem from "./WishlistItem";

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
            <WishlistItem key={i} wishId={e}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistTab;
