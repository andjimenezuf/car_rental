import { primaryGradient, USCurrency } from '@/const';
import { Box, Button, Card, Divider, Flex, Image, Text, Title, Badge } from '@mantine/core';
import { IconWheel } from '@tabler/icons-react';
import {Car} from '../../services/interfaces'

interface CarCardProps {
  car: Car;
}

export const CarCard = () => {
  return (
    // Adjust the Card's style directly for better control over width
    <Card style={{ width: '100%', maxWidth: 'calc(25% - 16px)', flex: '1 0 auto' }}>
      <Flex align="flex-end" justify="space-between">
        <Box>
          <Title order={5}>Toyota Camry 2023</Title>
          <Text color="gray.6">Sedan</Text>
        </Box>
      </Flex>
      <Flex justify="space-between" align="center">
        <Image
          style={{ maxWidth: '200px', maxHeight: '150px', textAlign: 'center', marginLeft: "35px", marginTop: "20px" }} // Adjust size directly
          radius="md"
          my={8}
          src='https://res.cloudinary.com/dicme7cio/image/upload/v1697124203/car-go-rentals/cars/znn2meedol66ikfm5fue.webp'
          alt="Toyota Camry"
        />
        
      </Flex>

      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box style={{ textAlign: 'center' }} my="md">
          <Badge color="green" mt='sm' size="xs" p="sm">Status</Badge>
          </Box>
          <Button variant="gradient" gradient={primaryGradient} mb="sm">
            Rent now
          </Button>
      </Box>


      <Divider />
      <Flex align="center" justify="space-between">
        <Flex align="center" gap="sm">
          <Flex my={8} align="center" title="seating capacity">
            <IconWheel size={16} color="gray" />
            <Text color="gray.6" size="sm" ml="xs">
              5 Miles
            </Text>
          </Flex>
        </Flex>
        <Flex align="flex-end">
          <Text fw="bold" size="lg">
            {USCurrency}
            {300}
          </Text>
          <Text size="lg">/day</Text>
        </Flex>
      </Flex>
    </Card>
  );
};
