// CarList.tsx
import React from 'react';
import { Grid, Card, Image, Text, Title, Badge, Button } from '@mantine/core';
import { primaryGradient } from '@/const';

interface Car {
  id: string;
  Image: string;
  Make: string;
  Model: string;
  'Model Year': string;
  State: string;
  City: string;
  Status: string;
  'Price Per Day': number;
  Mileage: number;
  'Price Per Mile': number;
}

interface CarListProps {
  cars: Car[];
  isEmployeePage: boolean;
}

const CarList: React.FC<CarListProps> = ({ cars, isEmployeePage }) => {
  return (
    <Grid>
      {cars.map((car, index) => (
        <Grid.Col span={4} key={index}>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src={car.Image} height={200} alt={`${car.Make} ${car.Model}`} />
            </Card.Section>

            <Title order={3} mt="md">
              {car.Make} {car.Model}
            </Title>
            <Text size="sm" color="dimmed">
              {car['Model Year']} - {car.City}, {car.State}
            </Text>

            <Badge color={car.Status === 'At Rental Location' ? 'green' : (car.Status === 'Under Repair' ? 'orange' : 'red')} variant="light" mt="md">
              {car.Status}
            </Badge>

            <Text mt="md" size="sm">
              Price Per Day: {car['Price Per Day']}
            </Text>
            <Text size="sm">Mileage: {car.Mileage} miles</Text>
            <Text size="sm">Price Per Mile: {car['Price Per Mile']}</Text>

          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default CarList;