import React from 'react';
import { Text } from '@mantine/core';
import Link from 'next/link';
import { primaryGradient } from '@/const';


export const Logo = () => {
  return (
    <Text fz='lg' 
    fw='bold' 
    variant='gradient' 
    gradient={primaryGradient}
    component={Link}
    href="/"
    >
        AutoCraze Rentals
    </Text>
  )
}
