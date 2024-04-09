import { Box, Flex } from '@mantine/core';
import { CarCard } from './CarCard';

export const CarList = () => {
  return (
    <Box w="100%"> 
      <Flex wrap="wrap" justify="space-between" gap="xs">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
       
      </Flex>
    </Box>
  );
};
