// Import necessary components and libraries
import { Box, Button, Card, Container, Divider, Flex, Space, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import classes from './Styles.module.css';
import { SearchEngine } from '@/components/SearchEngine';
import { IconBrandGoogleMaps } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { ResetFiltersButton } from './ResetFiltersButton';
import { BodyType } from './BodyType';
import { PriceRange } from './PriceRange';
import Car from './CarList';
import { FiltersDrawer } from './FiltersDrawer';
import CarCard from './CarCard';
import { DateValue } from '@mantine/dates';
import dayjs from 'dayjs';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import CarList from './CarList';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// Import and configure dynamic components
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

// Define Car and CarListProps interfaces for type safety
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
interface CarListProps {
  cars: Car[];
  pickupDate: Date | null;
  returnDate: Date | null;
  handleDateChange: (setter: React.Dispatch<React.SetStateAction<Date | null>>) => (date: DateValue) => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPickupDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setReturnDate: React.Dispatch<React.SetStateAction<Date | null>>;
  handleRentNow: (carId: string) => Promise<void>;
}

// Define the main CarsLayout component
export const CarsLayout = () => {
  // State declarations for managing cars, dates, and modal visibility
  const [cars, setCars] = useState<Car[]>([]);
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedMake, setSelectedMake] = useState<string | null>(null);

  // Fetch cars from the database where their status is not 'With Customer'
  useEffect(() => {
    async function fetchCars() {
      const { data, error } = await supabase.from('cars').select('*').neq('Status', 'With Customer');
      if (error) console.error('Error fetching cars:', error);
      else setCars(data);
    }
    fetchCars();
  }, []);

  // Handle date changes by updating state
  const handleDateChange = (setter: React.Dispatch<React.SetStateAction<Date | null>>) => (date: DateValue | null) => {
    if (date instanceof Date) {
      setter(dayjs(date).toDate());
    } else {
      setter(null);
    }
  };

  // Process booking based on selected car and dates
  const handleRentNow = async (carId: string, pickupDate: Date, returnDate: Date) => {
    console.log('Starting the booking process for carId:', carId);
    const userId = '63e259bd-e906-4699-a46e-39be87a1a4f8'; // User ID should ideally be dynamically obtained from user session
    console.log('Using userId:', userId);
    console.log('Pickup Date:', pickupDate);
    console.log('Return Date:', returnDate);
    console.log('Attempting to insert booking into database...');
    
    // Check if the selected car is available for booking
    const { data: carData, error: carError } = await supabase
    .from('cars')
    .select('*')
    .eq('id', carId)
    .single();

    if (carError || !carData) {
      console.error('No car found with ID:', carId, carError);
      alert('No car found with the provided ID.');
      return;  // Halt the process if the car is not found
    }

    console.log("Final Check Before Booking:");
    console.log("Car ID:", carId);
    console.log("User ID:", userId);
    console.log("Pickup Date:", pickupDate);
    console.log("Return Date:", returnDate);

    // Ensure both dates are provided before proceeding
    if (!pickupDate || !returnDate) {
      console.error('Pickup date and return date must be provided.');
      return;
    }

    // Attempt to create a booking entry in the database
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          car_id: carId,
          pickupDate: new Date(pickupDate),
          returnDate: new Date(returnDate),
          totalPrice: 300, // Pricing logic needs to be defined
          status: 'booked',
          user_id: userId,
        },
      ]);
  
    if (error) {
      console.error('Booking error:', error);
      alert('Booking failed!'); // Notify the user if booking fails
    } else {
      console.log('Booking successful:', data);
      alert('Booking successful!'); // Notify the user if booking succeeds
      setIsModalOpen(false); // Close the modal upon successful booking
    }

    // Update the car's status to 'With Customer' post-booking
    const { error: carUpdateError } = await supabase
     .from('cars')
     .update({ Status: 'With Customer' })
     .eq('id', carId);

    if (carUpdateError) {
      console.error('Error updating car status:', carUpdateError);
      alert('Couldnt update car status.');
    } else {
      alert('Updated Car Status!'); // Confirm status update to the user
    }
  };

  // Render the main component structure
  return (
    <Container className="parentContainer" size="xl" my="sm" py="md">
      <SearchEngine />
      <Flex justify="flex-end">
        <Button size="sm" variant="subtle">Show Map</Button>
      </Flex>
      <Map height="200px" />
      <Card>
        <Flex align="center" justify="space-between">
          <Title order={4}>Filters</Title>
          <ResetFiltersButton />
          <FiltersDrawer />
        </Flex>
        <Divider my={16} />
        <BodyType />
        <PriceRange />
      </Card>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <CarList
          cars={cars}
          pickupDate={pickupDate}
          returnDate={returnDate}
          handleDateChange={handleDateChange}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setPickupDate={setPickupDate}
          setReturnDate={setReturnDate}
          handleRentNow={handleRentNow}
        />
      </Flex>
    </Container>
  );
};

export default CarsLayout;
