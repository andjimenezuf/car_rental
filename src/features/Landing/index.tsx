"use client"
import React from 'react'
import { Hero } from './Hero'
import dynamic from 'next/dynamic';
import { CarsLayout } from '../cars';

// Dynamic import with no SSR for the Map component
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export const Landing = () => {
  return (
      <>
      <Hero />
      <CarsLayout/>
      </>
      
    
  );
};
