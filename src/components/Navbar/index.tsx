import { Box, Group } from '@mantine/core'
import React from 'react'
import classes from './Style.module.css'
import { Logo } from './Logo'
import { AuthButtons } from './AuthButtons'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Navbar = () => {
  return (
    <Box className={classes.header}>
        <Group justify="space-between" h='100%'>
            <Logo />
            <AuthButtons />
            <ThemeSwitcher/>
        </Group>

    </Box>
  )
}
