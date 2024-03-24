import { primaryGradient } from '@/const';
import { Button, Group } from '@mantine/core'
import Link from 'next/link';
import React from 'react'

export const AuthButtons = () => {
  return (
     <Group>
        <Button component={Link} href="/login"
        variant='default'>Log In</Button>

        <Button component={Link} href="/signup"
        variant='gradient' gradient={primaryGradient}>Sign Up</Button>

    </Group> 
  )
};
