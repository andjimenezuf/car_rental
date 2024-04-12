import { NavbarSimple } from '@/features/Auth/admin';
import ManageEmployee from '@/features/admin/ManageEmployee';
import CarInventory from '@/features/employee/CarInventory';
import Reservations from '@/features/employee/Reservations';
import React from 'react'

const adminPage = () => {   
  const container = {
    display: "flex",
  }

  const navbar = {
    flex: 1,
  }

  const inventory = {
    marginRight: 25, 
    marginBottom: 25,
    width: 1180
  }
  
  return (
    <div style={container}>
      <div style={navbar}>
        <NavbarSimple/>
      </div>
      <div style={inventory}>
        <ManageEmployee/>
        <br />
        <br />
        <Reservations/>
        <br />
        <br />
        <CarInventory/>
      </div>   
    </div>
  )
}

export default adminPage;