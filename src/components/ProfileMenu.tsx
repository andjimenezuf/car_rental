import { useUserSessionContext } from '@/context/UserSessionContext';
import { logOut } from '@/services/auth.service';
import { Avatar, Flex, Menu, Text, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { BiLogOutCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { IoCarSportSharp, IoChevronDown } from 'react-icons/io5';
import { useRouter } from 'next/navigation';



  
export function ProfileMenu() {
  const {user} = useUserSessionContext();
  const { push } = useRouter();

  const handleSignOut = async() =>{
    await logOut();
    push('/');

  }

  return (
    <Menu shadow="md" width={200}>
     <Menu.Target>
       <UnstyledButton 
          component={Flex}
          align="center" 
          gap={8}
          variant="subtle"
          py="sm">
          <Avatar src="" radius="xl" />
          <IoChevronDown />

        </UnstyledButton>
     </Menu.Target>

     <Menu.Dropdown>
       <Menu.Label>
         <Text lineClamp={1}>{user?.email}</Text>
       </Menu.Label>
       <Menu.Item
       component ={Link}
          href="/userPages"
          leftSection={<CgProfile size="0.8rem" />}
       >
         Profile
        </Menu.Item>


       <Menu.Item
         component={Link}
         href="/my-account/bookings"
         leftSection={<IoCarSportSharp size="0.8rem" />}
       >
         Bookings
       </Menu.Item>
       
      <Menu.Item
        component='button'
        type ='button'
        role ='button'
        color= 'red'
        leftSection={<BiLogOutCircle size='2rem'/>}
        onClick={handleSignOut}
        >
          Logout
        </Menu.Item>
     </Menu.Dropdown>
   </Menu>
  );
}
