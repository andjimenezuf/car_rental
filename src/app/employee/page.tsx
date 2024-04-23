// EmployeePage.tsx
'use client'
import React, { useState } from 'react';
import {NavbarSimple} from '../../features/Auth/employee/index'; // Adjust the path as needed
import BookingsList from '../../features/Auth/employee/BookingList'; // Adjust the path as needed
import CarInventory from '../../features/Auth/employee/CarInventory';  // Import the CarInventory component

const EmployeePage = () => {
  const [activePage, setActivePage] = useState('');

  const pageStyle = {
    display: 'flex',
    minHeight: '100vh', // Take at least the full height of the viewport
  };

  const navbarStyle = {
    minWidth: '250px', // Minimum width of the navbar
    flexShrink: 0, // Prevent the navbar from shrinking
    height: '100%', // Make the navbar full height
  };

  const contentStyle = {
    flexGrow: 1, // Allow the content area to grow and fill the available space
    padding: '20px', // Padding around the content
  };

  return (
    <div style={pageStyle}>
      <div style={navbarStyle}>
        <NavbarSimple onStateChange={setActivePage} />
      </div>
      <div style={contentStyle}>
        {activePage === 'Reservations' && <BookingsList />}
        {activePage === 'Inventory' && <CarInventory />}
      </div>
    </div>
  );
};


export default EmployeePage;