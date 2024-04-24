// DoubleNavbar.tsx
'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
  IconCar,
  IconUsers,
  IconListDetails,
} from '@tabler/icons-react';

import classes from './DoubleNavbar.module.css';

const data = [
  { link: '', label: 'Manage Staff', icon: IconUsers },
  { link: '', label: 'Reservations', icon: IconCar },
  { link: '', label: 'Inventory', icon: IconListDetails },
];

export function NavbarSimple({onStateChange}:{
  onStateChange: Dispatch<SetStateAction<string>>
}) {
  const [active, setActive] = useState('Billing');

  useEffect(() => {
    onStateChange(active)
  }, [active])


  const handleLinkClick = (label: string) => {
     // Check which label is clicked
    console.log('Link clicked:', label);
    setActive(label);
    // Call the passed `onStateChange` function with the label
    onStateChange(label);
  };


  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
      event.preventDefault();
      handleLinkClick(item.label);
      setActive(item.label);

      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));
  
  return (
    <nav className={classes.navbar}>
        <h2>Admin page</h2>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
            <br/>
            
        </Group>
        {links}
      </div>


    </nav>
  );
}