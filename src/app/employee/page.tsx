'use client'
import { NavbarSimple } from '@/features/Auth/employee';
import CarInventory from '@/features/employee/CarInventory';
import Reservations from '@/features/employee/Reservations';
import { BackgroundImage, Group } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import React, { useState } from 'react'

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
    marginLeft: 25,
    width: "100%",
  }

  const [currentPage, setCurrentPage] = useState('None');

  return (
    <div style={container}>
      <div style={navbar}>
        <NavbarSimple onStateChange={setCurrentPage}/>
      </div>
      <div style={inventory}>
        {currentPage == 'Reservations' && <Reservations/>}
        {currentPage == 'Inventory' && <CarInventory/>}
      </div>   
    </div>
  )
}

export default employeePage;