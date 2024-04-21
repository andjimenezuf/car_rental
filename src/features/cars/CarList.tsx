// Import necessary components and hooks from React and Mantine
import React from 'react';
import { Card, Image, Text, Title, Badge, Grid, GridCol } from '@mantine/core';
import CarCard from './CarCard';
import { DateValue } from '@mantine/dates';

// Define TypeScript interfaces for type safety
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
  handleRentNow: (carId: string, pickupDate: Date, returnDate: Date) => void;
}

// Function to handle changes to date inputs
const handleDateChange = (setter: React.Dispatch<React.SetStateAction<Date | null>>) => (date: DateValue | null) => {
  if (date instanceof Date) {
    setter(date);  // Update state if date is valid
  } else {
    setter(null);  // Reset state if date is not valid
  }
};

// Define CarList component using functional component syntax
const CarList: React.FC<CarListProps> = ({
  cars,
  pickupDate,
  returnDate,
  handleDateChange,
  isModalOpen,
  setIsModalOpen,
  setPickupDate,
  setReturnDate,
  handleRentNow
}) => {
  // Render a grid of CarCard components
  return (
    <Grid style={{marginTop: 20}}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '100px', rowGap: '20px' }}>
        {cars.map((car) => (
          <Grid.Col key={car.id} span={12}>
            <CarCard
              key={car.id}
              car={car}
              pickupDate={pickupDate}
              returnDate={returnDate}
              handleDateChange={handleDateChange} // Pass function to manage date state changes
              handleRentNow={handleRentNow} // Pass function to initiate the renting process
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setPickupDate={setPickupDate}
              setReturnDate={setReturnDate}
            />
          </Grid.Col>
        ))}
      </div>
    </Grid>
  );
};

// Export the CarList component as the default export of this module
export default CarList;
