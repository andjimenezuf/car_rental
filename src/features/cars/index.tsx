'use client';
import {Box,Button,Card,Container,Divider,Flex,Space,Title,
} from '@mantine/core';
import React from 'react';
import classes from './Styles.module.css';
import { SearchEngine } from '@/components/SearchEngine';
import { IconBrandGoogleMaps } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { ResetFiltersButton } from './ResetFiltersButton';
import { BodyType } from './BodyType';
import { PriceRange } from './PriceRange';
import { CarList } from './CarList';
import { FiltersDrawer } from './FiltersDrawer';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

export const CarsLayout = () => {
  return (
      

    <Container className={classes.parentContainer} size="xl" my="sm" py="md">

      <SearchEngine />

      <Flex justify="flex-end">
        <Button className={classes.mapToggle} size="sm" variant="subtle">
          <IconBrandGoogleMaps size="16px" />
          Show Map
        </Button>
      </Flex>

      <Map height="200px" />

      <Card w={{ base: '100%', md: '100%' }}>
          <Flex align="center" justify="space-between">
            <Title order={4}>Filters</Title>
            <Box display={{ base: 'none', md: 'inline-block' }}>
              <ResetFiltersButton />
            </Box>
            <FiltersDrawer />
          </Flex>

          <Divider my={16} display={{ base: 'none', md: 'block' }} />

          <Box display={{ base: 'none', md: 'block' }}>
            <BodyType />
            <PriceRange />
           
            <Space my="lg" />
          </Box>
        </Card>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        className={classes.container}
      >
 

        <CarList />
      </Flex>
    </Container>
  );
};