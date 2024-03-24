import { Box, Group } from '@mantine/core'
import React from 'react'
import classes from './Style.module.css'
import { Logo } from './Logo'
import { AuthButtons } from './AuthButtons'
import { ThemeSwitcher } from './ThemeSwitcher'
import { NavigationMobile } from './NavigationMobile'

export const Navbar = () => {
  return (
    <Box className={classes.header}>
        <Group justify="space-between" h='100%'>
            <Logo />
            <Box visibleFrom='sm'>
              <AuthButtons />
            </Box>
            <Box visibleFrom='sm'>
               <ThemeSwitcher/>
            </Box>

            <Box hiddenFrom='sm'>
              <NavigationMobile />
            </Box>
            
           
        </Group>

    </Box>
  )
}
