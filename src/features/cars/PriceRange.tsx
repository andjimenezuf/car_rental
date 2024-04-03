import { Box, Flex, NumberInput, Text } from '@mantine/core';

const lowestPrice = 0;
const highestPrice = 300;

export const PriceRange = () => {
  return (
    <>
      <Text my={16}>Price Range</Text>
      <Flex gap={8}>
        <Box>
          <Text size="xs">Min.</Text>
          <NumberInput step={10} min={lowestPrice} max={highestPrice} />
        </Box>
        <Box>
          <Text size="xs">Max.</Text>
          <NumberInput step={10} min={10} max={highestPrice} />
        </Box>
      </Flex>
    </>
  );
};