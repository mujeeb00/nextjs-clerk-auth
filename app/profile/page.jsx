import React from 'react'
import { UserProfile } from '@clerk/nextjs'
const ProfilePage = () => {
  return (
    <div className='flex justify-center m-5'>
        
        <UserProfile/>
    </div>
  )
}

export default ProfilePage