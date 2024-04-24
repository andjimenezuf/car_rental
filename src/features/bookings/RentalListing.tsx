'use client';
import React from 'react';
import { Card, Image, Text, Group, Button, Divider } from '@mantine/core';
import { primaryGradient } from '@/const';

interface Car {
  id: string;
  Image: string;
  Make: string;
  Model: string;
  'Model Year': string;
  'Available After': string;
  City: string;
  State: string;
  'Price Per Day': number;
  Mileage: number;
  'Price Per Mile': number;
}

interface RentalListingProps {
  car: Car;
  booking: any;
  onCancelBooking: () => void;
}

const RentalListing: React.FC<RentalListingProps> = ({ car, booking, onCancelBooking }) => {
  return (
    <Card shadow="sm" padding="lg">
      <Card.Section>
        {car.Image ? (
          <Image src={car.Image} height={160} alt={`${car.Make} ${car.Model}`} />
        ) : (
          <Text>Image not available</Text>
        )}
      </Card.Section>
      <Group  style={{ marginBottom: 5, marginTop: 'md' }}>
        <Text>{car.Make} {car.Model}</Text>
        <Button variant="light" color="blue" size="xs" disabled>
          Additional Details
        </Button>
      </Group>
      <Text size="sm" color="dimmed">
        <strong>Year:</strong> {car['Model Year']}
      </Text>
      <Text size="sm" color="dimmed">
        <strong>Available After:</strong> {new Date(car['Available After']).toLocaleDateString()}
      </Text>
      <Text size="sm" color="dimmed">
        <strong>Location:</strong> {car.City}, {car.State}
      </Text>
      <Text size="sm" color="dimmed">
        <strong>Price/day:</strong> {car['Price Per Day']}
      </Text>
      <Text size="sm" color="dimmed">
        <strong>Mileage:</strong> {car.Mileage} miles
      </Text>
      <Text size="sm" color="dimmed">
        <strong>Price Per Mile:</strong> {car['Price Per Mile']}
      </Text>
      <Divider my="sm" />
      <Button variant="gradient" gradient={primaryGradient} fullWidth onClick={onCancelBooking}>
        Cancel
      </Button>
    </Card>
  );
};

export default RentalListing;