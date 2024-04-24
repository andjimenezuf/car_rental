// CarInventory.tsx
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Grid, GridCol, Card, Image, Text, Title, Badge, Button, Modal, TextInput, Flex } from '@mantine/core';
import CarCard from '../../cars/CarCard';  
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
    <div>
      <div style={{display: "flex"}}>
        <div style={{flex: 8}}>
          <h1>Inventory</h1>
        </div>
        <div style={{flex: 1, marginTop: 30}}>
          <Button variant='gradient' gradient={primaryGradient} onClick={() => setAddModalOpen(true)}>Add New Car</Button>
        </div>
      </div>
      
      <Grid>
        {cars.map((car, index) => (
          <Grid.Col span={4} key={index}>
            <CarCard car={car} isEmployeePage={true} />
          </Grid.Col>
        ))}
      </Grid>

      <Modal
      opened={addModalOpen}
      onClose={() => setAddModalOpen(false)}
      withCloseButton={false}
      >
        <h2>Add Car</h2>
        <Flex>
          <TextInput
            label="Make"
            placeholder='Toyota'
            style={{marginBottom: 30}}
          />
          <TextInput
            label="Model"
            placeholder='Camry'
            style={{marginLeft: 10, marginBottom: 30}}
          />

          <TextInput
            label="Model Year"
            placeholder='2023'
            style={{marginLeft: 10, marginBottom: 30}}
          />
        </Flex>
        
        <Flex>
          <TextInput
            label="City"
            placeholder='Gainesville'
            style={{marginBottom: 30, paddingRight: 20}}
          />
            <TextInput
            label="State"
            placeholder='Florida'
            style={{paddingLeft: 20, marginBottom: 30}}
        />
        </Flex>

        <TextInput
          label="Available After"
          placeholder='2024-04-24'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Price/Day"
          placeholder='200'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Image"
          placeholder='https...'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Status"
          placeholder='With Customer'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Mileage"
          placeholder='10000'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Price/Mile"
          placeholder='5'
          style={{marginBottom: 30}}
        />
        
        <Button
          style={{marginTop: 20}}
          variant='gradient'
          gradient={primaryGradient}
          onClick={() => setAddModalOpen(false)}
        >
          Add
        </Button>
      </Modal>
    </div>

    
    
  );
};

export default CarInventory;