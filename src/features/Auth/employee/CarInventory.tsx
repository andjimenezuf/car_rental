// CarInventory.tsx
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Grid, GridCol, Card, Image, Text, Title, Badge } from '@mantine/core';
import CarCard from '../../cars/CarCard';  

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

interface CarInventoryProps {
  isEmployeePage?: boolean;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

const CarInventory: React.FC<CarInventoryProps> = ({ isEmployeePage = false }) => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase.from('cars').select('*');
      if (error) {
        console.error('Error fetching cars:', error);
      } else {
        setCars(data || []);
      }
    };

    fetchCars();
  }, []);

  return (
    <Grid>
      {cars.map((car, index) => (
        <Grid.Col span={4} key={index}>
          <CarCard car={car} isEmployeePage={true} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default CarInventory;