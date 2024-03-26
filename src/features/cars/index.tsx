import { Box, Button, Card, Container, Divider, Flex, Title } from '@mantine/core';
import React from 'react';
import classes from './Styles.module.css';
import { SearchEngine } from '@/components/SearchEngine';
import { IconBrandGoogleMaps } from '@tabler/icons-react';

import dynamic from 'next/dynamic';
import { ResetFiltersButton } from './ResetFiltersButton';

const Map = dynamic(()=> import('@/components/Map'), {
    ssr: false, 
});

export const CarsLayout = () => {
  return (
    <Container className={classes.parentContainer} size="xl" my="sm" py="md">
        <SearchEngine/>
      <Flex justify="flex-end">
        <Button className={classes.mapToggle} size ="sm" variant='subtle'>
            <IconBrandGoogleMaps/>
            Show map

        </Button>
      </Flex>

        <Map/>
      
      <Flex
        direction={{ base: 'column', md: 'row' }}
        className={classes.container}
      >
        {/* Filters */}
        <Card w={{ base: '100%', md: '350px' }}>
            <Flex align="center" justify="space-between">
                <Title order={4}>Filters</Title>
                <Box display={{ base: 'none', md: 'inline-block' }}>
                 <ResetFiltersButton/>
                </Box>
            </Flex>

            <Divider my={16} display={{ base: 'none', md: 'block' }} />

            <Box display={{ base: 'none', md: 'block' }}> Filter Components </Box>
        </Card>
        {/*Cars list*/}

      </Flex>
    </Container>
  );
};
