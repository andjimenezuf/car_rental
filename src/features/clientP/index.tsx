'use client'
import { Avatar, Text, Group, Title, Flex, Button, Menu, NavLink } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from './UserInfo.module.css';
import { primaryGradient } from '@/const';
import { useNavigate } from 'react-router-dom'
import Link from 'next/link';
import { useUserSessionContext } from '@/context/UserSessionContext'; // Ensure this is correctly imported


export function UserInfoIcons() {
  const { user } = useUserSessionContext(); // Assuming you have a context that provides user info


  return (
    <div style={{margin: "auto", paddingTop: 50, maxWidth: "fit-content"}}>
      <Flex>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={200}
          radius="md"
        />
        <div style={{marginLeft: 70}}>


           {/* Removed the name display since you mentioned not wanting to store names */}
           <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xl" >
              {user?.email || "No email available"} {/* Display the email dynamically or a placeholder */}
            </Text>
          </Group>
          

          <Link href={"/userPages/bookings"}>
            <Button style={{marginTop: 50}} variant="gradient" gradient={primaryGradient} mb="sm" size='sm'>
              View Reservations
            </Button>
          </Link> 

        </div>
      </Flex>
    </div>
  );
}