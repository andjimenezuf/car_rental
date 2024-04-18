import EmployeeListing from '@/features/admin/EmployeeListing';
import RentalListing from '@/features/bookings/RentalListing';
import { UserInfoIcons } from '@/features/clientP';
import React from 'react'

const UserProfile = () => {   
  const container = {
    marginLeft: 25,
  }

  return (
    <div style={container}>
      <h1>My Rentals</h1>
      <RentalListing/>
      <RentalListing/>
      <RentalListing/>
    </div>
  )
}

export default UserProfile;