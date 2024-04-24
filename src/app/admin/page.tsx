// AdminPage.tsx
'use client'
import React, { useState } from 'react';
import ManageEmployee from '@/features/admin/ManageEmployee';
import Reservations from '@/features/employee/Reservations';
import { NavbarSimple } from '@/features/Auth/admin';
import BookingsList from '../../features/Auth/employee/BookingList'; 
import CarInventory from '../../features/Auth/employee/CarInventory'; 

const AdminPage = () => {
  const [activePage, setActivePage] = useState('');

  const pageStyle = {
    display: 'flex',
    minHeight: '100vh', 
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
        {activePage === 'Manage Staff' && <ManageEmployee />}
        {activePage === 'Reservations' && <BookingsList />}
        {activePage === 'Inventory' && <CarInventory />}
      </div>
    </div>
  );
};  

export default AdminPage;