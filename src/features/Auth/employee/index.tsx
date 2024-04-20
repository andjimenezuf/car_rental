// DoubleNavbar.tsx
'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
  IconCar,
  IconListDetails,
} from '@tabler/icons-react';

import classes from './DoubleNavbar.module.css';

const data = [
  { link: '', label: 'Reservations', icon: IconCar },
  { link: '', label: 'Inventory', icon: IconListDetails },

];

export function NavbarSimple({onStateChange}:{
  onStateChange: Dispatch<SetStateAction<string>>
}) {
  const [active, setActive] = useState('None');

  useEffect(() => {
    onStateChange(active)
  }, [active])

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
        <h2>Employee page</h2>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
            <br/>
        </Group>
        {links}
      </div>


    </nav>
  );
}