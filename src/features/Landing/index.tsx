import React from 'react'
import { Hero } from './Hero'
import { Container } from "@mantine/core";
import dynamic from 'next/dynamic';

// Dynamic import with no SSR for the Map component
//const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export const Landing = () => {
  return (
    // This is the shorthand syntax for <React.Fragment>
    
      <Hero />
      // <Container mt="-3rem" px="1rem" mb="2rem">
      //   <Map />
      // </Container>
    
  );
};
