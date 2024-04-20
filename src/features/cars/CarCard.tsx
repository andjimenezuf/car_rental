// Import necessary libraries and components
import React, { useState } from 'react';
import { Box, Button, Card, Divider, Flex, Image, Text, Title, Badge, Modal, Group } from '@mantine/core';
import { IconWheel } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { DateValue } from '@mantine/dates';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Define TypeScript interfaces for props and car details
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
}

interface CarCardProps {
  car: Car;
  pickupDate: Date | null;
  returnDate: Date | null;
  handleDateChange: (setter: React.Dispatch<React.SetStateAction<Date | null>>) => (date: DateValue) => void;
  handleRentNow: (carId: string, pickupDate: Date, returnDate: Date) => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPickupDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setReturnDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

// CarCard component definition using functional component syntax
const CarCard: React.FC<CarCardProps> = ({
  car,
  handleDateChange,
  handleRentNow,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupDate, setPickupDate] = useState<Date | null>(null); 
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  // Handles card click to toggle modal visibility
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  // Handles the 'Rent Me' button click
  const handleRentNowClick = () => {
    if (pickupDate && returnDate) {
      handleRentNow(car.id, pickupDate, returnDate);
    } else {
      alert('Please select both pickup and return dates.');
    }
  };

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder onClick={handleCardClick}>
        <Flex direction="column">
          <Image
            src={car.Image}
            alt={car.Model}
            width={200}
            height={200}
            fit="cover"
          />
          <Text>
            {car.Make} {car.Model}
          </Text>
          <Text size="sm" color="dimmed">
            {car.State}, {car.City}
          </Text>
        </Flex>
        <Flex align="center" gap="sm">
          <Text size="sm">
            {car['Price Per Day']}/day
          </Text>
        </Flex>
      </Card>
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="xxl"
        centered
        withCloseButton={false}
      >
        <Flex direction={{ base: 'column', md: 'row' }} gap="md">
          <Image
            src={car.Image}
            alt={car.Model}
            style={{ maxWidth: '50%', height: 'auto' }}
          />
          <Flex direction="column" gap="md" style={{ flexGrow: 1 }}>
            <Text size="xl">
              {car.Make} {car.Model}
            </Text>
            <Text size="sm">
              <strong>Model Year:</strong> {car['Model Year']}
            </Text>
            <Text size="sm">
              <strong>Location:</strong> {car.State}, {car.City}
            </Text>
            <Text size="sm">
              <strong>Status:</strong> {car.Status}
            </Text>
            <Text size="sm">
              <strong>Mileage:</strong> {car.Mileage} Miles
            </Text>
            <Text size="sm">
              <strong>Price:</strong> {car['Price Per Day']}/day
            </Text>
            <div>
              <DatePicker
                selected={pickupDate}
                onChange={(date: Date | null) => setPickupDate(date)}
              />
              <DatePicker
                selected={returnDate}
                onChange={(date: Date | null) => setReturnDate(date)}
              />
            </div>
            <Button onClick={handleRentNowClick} style={{ marginTop: 20 }}>
              Rent Me
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

// Export the CarCard as the default component from this file
export default CarCard;
