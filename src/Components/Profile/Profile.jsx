import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileNavigationTabs from './ProfileNavigationTabs'
import ProfileContent from './ProfileContent'
import { useParams } from 'react-router-dom'
import { useProfile } from '../../Contexts/ProfileContext'

function Profile() {
  const {tab}=useParams()
  const{getProfileData}=useProfile()
console.log(getProfileData);
  


  return (
    <>
    <ProfileHeader/>
    <ProfileNavigationTabs tab={tab}/>
    <ProfileContent tab={tab}/>
    </>
  )
}

export default Profile