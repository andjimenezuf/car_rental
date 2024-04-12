import { NavbarSimple } from '@/features/Auth/employee';
import CarInventory from '@/features/employee/CarInventory';
import Reservations from '@/features/employee/Reservations';
import { BackgroundImage, Group } from '@mantine/core';
import React from 'react'

const employeePage = () => { 
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
        <Reservations/>
        <br />
        <br />
        <CarInventory/>
      </div>   
    </div>
  )
}

export default employeePage;