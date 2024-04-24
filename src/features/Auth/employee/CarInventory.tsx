// CarInventory.tsx
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Button, Modal } from '@mantine/core';
import { primaryGradient } from '@/const';
import { Grid, GridCol, Card, Image, Text, Title, Badge, TextInput, Flex } from '@mantine/core';
import CarCard from '../../cars/CarCard';
import AddCarForm from './AddCarForm';
import CarList from './CarList';

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

interface CarInventoryProps {
  isEmployeePage?: boolean;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

const CarInventory: React.FC<CarInventoryProps> = ({ isEmployeePage = false }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [addModalOpen, setAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      const { data: carData, error: carError } = await supabase
        .from('cars')
        .select('*');

      if (carError) {
        console.error('Error fetching cars:', carError);
      } else if (carData) {
        setCars(carData);
      } else {
        console.log('No cars found.');
      }
    };

    fetchCars();
  }, []);

  const handleAddCar = (newCar: Car) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 8 }}>
          <h1>Inventory</h1>
        </div>
        <div style={{ flex: 1, marginTop: 30 }}>
          <Button variant='gradient' gradient={primaryGradient} onClick={() => setAddModalOpen(true)}>
            Add New Car
          </Button>
        </div>
      </div>
      <CarList cars={cars} isEmployeePage={isEmployeePage} />
      <Modal opened={addModalOpen} onClose={() => setAddModalOpen(false)} withCloseButton={false}>
        <AddCarForm onAddCar={handleAddCar} onClose={() => setAddModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default CarInventory;