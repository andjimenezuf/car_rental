'use client';
import React from 'react'

import { Center, SegmentedControl, Text, useMantineColorScheme } from '@mantine/core'
import {IconSun, IconMoon} from '@tabler/icons-react'

export const ThemeSwitcher = () => {
    const {colorScheme, setColorScheme}= useMantineColorScheme();

  return (
    <SegmentedControl 
    value={colorScheme}
    onChange={(value)=> setColorScheme(value as any)}
    data={[ 
        {
            value: 'light',
            label: <Center>
                <IconSun size="1rem" stroke={1.5}/>
                <Text ml="sm">Light</Text>
            </Center>,
        },
        {
            value: 'dark',
            label: <Center>
            <IconMoon size="1rem" stroke={1.5}/>
            <Text ml="sm">Dark</Text>
        </Center>,
        }
    ]} />

  )
}
 