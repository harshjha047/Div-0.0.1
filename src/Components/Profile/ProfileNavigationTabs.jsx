import React from 'react'
import { NavLink } from 'react-router-dom'

function ProfileNavigationTabs({tab}) {
  return (
    <>
     {/* <!-- Profile Navigation Tabs --> */}
  <div className="container mx-auto px-4 max-w-6xl mb-8">
    <div className="bg-gray-800 rounded-lg p-1 flex flex-wrap justify-center gap-1">
      <NavLink to={"/profile/Info"} id="profile-tab"   className={({isActive})=>` ${isActive?"bg-blue-600 text-white":"text-gray-400"} px-4 py-3 rounded-md  font-medium transition-all`} >Profile Info</NavLink>
      <NavLink to={"/profile/OrderHistoryTab"} id="orders-tab"   className={({isActive})=>` ${isActive?"bg-blue-600 text-white":"text-gray-400"} px-4 py-3 rounded-md  hover:text-white font-medium transition-all`} >Order History</NavLink>
      {/* <NavLink to={"/profile/AddressesTab"} id="addresses-tab" className={({isActive})=>` ${isActive?"bg-blue-600 text-white":"text-gray-400"} px-4  py-3 rounded-md  hover:text-white font-medium transition-all`} >Addresses</NavLink> */}
      <NavLink to={"/profile/WishlistTab"} id="wishlist-tab"  className={({isActive})=>`  ${isActive?"bg-blue-600 text-white":"text-gray-400"} px-4 py-3 rounded-md  hover:text-white font-medium transition-all`} >Wishlist</NavLink>
      <NavLink to={"/profile/SettingsTab"} id="settings-tab"  className={({isActive})=>` ${isActive?"bg-blue-600 text-white":"text-gray-400"} px-4 py-3 rounded-md  hover:text-white font-medium transition-all`} >Settings</NavLink>
    </div>
  </div></>
  )
}

export default ProfileNavigationTabs