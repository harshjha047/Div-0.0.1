import React from 'react'
import { useProfile } from '../../Contexts/ProfileContext'
import Address from './Address'
import {Link} from 'react-router-dom'


function AddressesTab() {
  const { getProfileData } = useProfile();
  console.log(getProfileData?.addresses);

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Shipping Addresses</h3>
        <Link to={"/profile/Info/address/add"} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">Add New</Link>
      </div>
      {getProfileData?.addresses.map((e) => (
        <Address key={e._id} data={e} />
      ))}
    </div>
  );
}


export default AddressesTab