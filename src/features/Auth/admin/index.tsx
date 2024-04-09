// DoubleNavbar.tsx
'use client'
import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
  IconCar,
  IconUsers,
  IconMessage,
} from '@tabler/icons-react';

import classes from './DoubleNavbar.module.css';

const data = [
  { link: '', label: 'Cars', icon: IconCar },
  { link: '', label: 'Employees', icon: IconUsers },
  { link: '', label: 'Reviews', icon: IconMessage },

];

export function NavbarSimple() {
  const [active, setActive] = useState('Billing');

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