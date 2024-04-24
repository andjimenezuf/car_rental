'use client'
import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Divider, Flex, Image, Text, Title, Badge, Modal, Group } from '@mantine/core';
import { IconArrowRight, IconWheel } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { DateValue } from '@mantine/dates';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from 'leaflet';
import { useRouter } from 'next/navigation'; // Make sure to import useRouter
import { supabaseClient } from '@/services/auth.service'; // Adjust the path as needed
import { useUserSessionContext } from '@/context/UserSessionContext'; // Adjust the path as needed


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
  pickupDate?: Date | null;
  returnDate?: Date | null;
  handleDateChange?: (setter: React.Dispatch<React.SetStateAction<Date | null>>) => (date: Date | null) => void;
  handleRentNow?: (carId: string, pickupDate: Date, returnDate: Date) => void;
  isModalOpen?: boolean;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setPickupDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  setReturnDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  // New prop for employee pages
  isEmployeePage?: boolean; 
}


// CarCard component definition using functional component syntax
const CarCard: React.FC<CarCardProps> = ({
  car,
  handleDateChange,
  handleRentNow,
  isEmployeePage = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupDate, setPickupDate] = useState<Date | null>(null); 
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [hoverCard, setHoverCard] = useState(false);
  const { user } = useUserSessionContext();
  const router = useRouter();

  // Handles card click to toggle modal visibility, requires user to be logged in
  const handleCardClick = () => {
    if (!user) {
      alert('You need to be logged in to view the details and rent a car.');
      router.push('/login');
    } else {
      setIsModalOpen(true);
    }
  };

  // Handles the 'Rent Me' button click, requires dates and user to be logged in
  const handleRentNowClick = () => {
    if (!user) {
      alert('You need to be logged in to rent a car.');
      router.push('/login');
      return; // Exit early if no user is logged in
    }

    if (!pickupDate || !returnDate) {
      alert('Please select both pickup and return dates.');
      return; // Ensure both dates are selected before proceeding
    }

    // Proceed with the rental process
    handleRentNow(car.id, pickupDate, returnDate);
  };

  return (
    <>
      <Card style={{ opacity: hoverCard ? 0.7 : 1 }} shadow="sm" p="lg" radius="md" withBorder 
        onClick={handleCardClick} 
        onMouseEnter={() => setHoverCard(true)}
        onMouseLeave={() => setHoverCard(false)}>
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
        size="65rem"
        centered
        withCloseButton={true}>
        <Flex direction={{ base: 'column', md: 'row' }} gap="md">
          <Image
            src={car.Image}
            alt={car.Model}
            style={{ maxWidth: 400, height: "100%"}}
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
            {isEmployeePage && (
              <Text size="sm">
                <strong>Status:</strong> {car.Status}
              </Text>
            )}
            <Text size="sm">
              <strong>Mileage:</strong> {car.Mileage} Miles
            </Text>
            <Text size="sm">
              <strong>Price:</strong> {car['Price Per Day']}/day
            </Text>
            <div style={{ display: 'flex', marginTop: 20 }}>
              <DatePicker
                placeholderText='Start Date'
                selected={pickupDate}
                onChange={(date: Date | null) => setPickupDate(date)}
              />
              <IconArrowRight style={{ marginLeft: 10, marginRight: 10, marginTop: 3 }}/>
              <DatePicker
                placeholderText='End Date'
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

export default CarCard;