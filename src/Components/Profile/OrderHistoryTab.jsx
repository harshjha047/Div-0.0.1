import React from "react";
import Order from "./Order";
import { useProfile } from "../../Contexts/ProfileContext";

function OrderHistoryTab() {
  let { getProfileData } = useProfile();
  return (
    <div id="orders-content" class="profile-content ">
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-bold text-white mb-6">Recent Orders</h3>

        {/* <!-- Order Items --> */}
        <div class="space-y-4">
          {/* <!-- Order --> */}
          {getProfileData?.orders?.map((e,i) => 
            <div key={i} class="border border-gray-700 rounded-lg p-4">
              <Order data={e}/>
            </div>
          )}
        </div>
      </div>    
    </div>
  );
}

export default OrderHistoryTab;
