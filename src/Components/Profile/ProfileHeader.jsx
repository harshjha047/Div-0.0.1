import React from 'react'
import QuickStats from './QuickStats'
import { useProfile } from '../../Contexts/ProfileContext'
import { useShop } from '../../Contexts/ShopContext';

function ProfileHeader() {
    const{getProfileData}=useProfile()
  let { cart} =useShop();

  
  return (
    <>
      {/* <!-- Profile Header --> */}
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="bg-gray-800 rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* <!-- Profile Picture --> */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JD</span>
            </div>
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
            </button>
          </div>
          
          {/* <!-- Profile Info --> */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">{getProfileData?.name}</h1>
            <p className="text-gray-400 mb-4">Member since {getProfileData?.createdAt.split("T")[0]}</p>
            
            {/* <!-- Quick Stats --> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <QuickStats link={""} css="" value={getProfileData?.orders?.length} name="Orders"/>
              <QuickStats link={"/profile/WishlistTab"} css="text-blue-400" value={getProfileData?.wishlist?.length} name="Wishlist"/>
              <QuickStats link={""} css="text-green-400" value='0' name="Total Spent"/>
              <QuickStats link={"/cart"} css="text-purple-400" value={cart?.length} name="Cart"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default ProfileHeader