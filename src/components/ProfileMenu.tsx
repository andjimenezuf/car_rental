import { logOut } from '@/services/auth.service';
import { Avatar, Flex, Menu, Text, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { BiLogOutCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { IoCarSportSharp, IoChevronDown } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/services/auth.service';
import { useUserSessionContext } from '@/context/UserSessionContext';

export function ProfileMenu() {
  const { user } = useUserSessionContext(); 
  const { push } = useRouter(); 
  const [dashboardPath, setDashboardPath] = useState('/userPages/bookings');
  const [dashboardLabel, setDashboardLabel] = useState('Bookings');

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        const { data: userData, error: userError } = await supabaseClient
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single();

        if (userError) {
          console.error('Failed to fetch user role:', userError);
        } else {
          // setting dashboard path and label based on the fetched role
          if (userData && userData.role === 'admin') {
            setDashboardPath('/admin');
            setDashboardLabel('Admin Dashboard');
          } else if (userData && userData.role === 'employee') {
            setDashboardPath('/employee');
            setDashboardLabel('Employee Dashboard');
          }
        }
      }
    };

    fetchUserRole();
  }, [user]);

  const handleSignOut = async () => {
    await logOut();
    push('/');
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton 
          component={Flex}
          align="center" 
          gap={8}
          variant="subtle"
          py="sm">
          <Avatar src={user?.avatarUrl || ''} radius="xl" />
          <IoChevronDown />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>
          <Text lineClamp={1}>{user?.email}</Text>
        </Menu.Label>
        <Menu.Item
          component={Link}
          href="/userPages"
          leftSection={<CgProfile size="0.8rem" />}
        >
          Profile
        </Menu.Item>

        <Menu.Item
          component={Link}
          href={dashboardPath}
          leftSection={<IoCarSportSharp size="0.8rem" />}
        >
          {dashboardLabel}
        </Menu.Item>

        <Menu.Item
          component='button'
          onClick={handleSignOut}
          leftSection={<BiLogOutCircle size="2rem"/>}
          style={{ color: 'red' }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}