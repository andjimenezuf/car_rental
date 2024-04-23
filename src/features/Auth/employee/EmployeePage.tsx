
'use client'
import React, { useState , useEffect} from 'react';
import { NavbarSimple } from './index';
import BookingsList from './BookingList'; 

const EmployeePage: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('');
  useEffect(() => {
    // Monitor activePage changes
    console.log('Active Page:', activePage); 
  }, [activePage]);
  
  return (
    <div>
      <NavbarSimple onStateChange={setActivePage} />
      {activePage === 'Reservations' && <BookingsList />}
    </div>
  );
};

export default EmployeePage;
