// AddCarForm.tsx
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Flex, TextInput, Button } from '@mantine/core';
import { primaryGradient } from '@/const';


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export interface Car {
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
  'Available After'?: string; // Add the 'Available After' property with an optional modifier
}

interface AddCarFormProps {
  onAddCar: (car: Car) => void;
  onClose: () => void;
}

const AddCarForm: React.FC<AddCarFormProps> = ({ onAddCar, onClose }) => {
  const [newCar, setNewCar] = useState<Car>({
    id: Math.floor(Math.random() * 10001).toString(), //Randomizes string for demo inserting purposes
    Make: '',
    Model: '',
    'Model Year': '',
    City: '',
    State: '',
    'Available After': '',
    'Price Per Day': 0,
    Image: '',
    Status: '',
    Mileage: 0,
    'Price Per Mile': 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleAddCar = async () => {
    try {
      const carToInsert = {
        ...newCar,
        'Price Per Day': newCar['Price Per Day'] || 0,
        Mileage: newCar.Mileage || 0,
        'Price Per Mile': newCar['Price Per Mile'] || 0,
      };
  
      console.log('Car to insert:', carToInsert); // Log the car object before inserting
  
      const { error, data } = await supabase.from('cars').insert([carToInsert]);
  
      if (error) {
        console.error('Error inserting car:', error); // Log the error if any
        throw error;
      }
  
      console.log('Inserted car:', data); // Log the inserted car data
  
      onAddCar(newCar);
      setNewCar({
        id: '', // Add the 'id' property with an empty string value
        Make: '',
        Model: '',
        'Model Year': '',
        City: '',
        State: '',
        'Available After': '',
        'Price Per Day': 0,
        Image: '',
        Status: '',
        Mileage: 0,
        'Price Per Mile': 0,
      });
      onClose();
    } catch (error) {
      console.error('Failed to add car:', error);
    }
  };

  return (
    <div>
      <h2>Add Car</h2>
      <Flex>
        <TextInput
        name="Make"
        label="Make"
        placeholder='Toyota'
        style={{marginBottom: 30}}
        value={newCar.Make}
        onChange={handleInputChange}
      />
      <TextInput
        name="Model"
        label="Model"
        placeholder='Camry'
        style={{marginLeft: 10, marginBottom: 30}}
        value={newCar.Model}
        onChange={handleInputChange}
      />
      <TextInput
        name="Model Year"
        label="Model Year"
        type="number"
        placeholder='2023'
        style={{marginLeft: 10, marginBottom: 30}}
        value={newCar['Model Year']}
        onChange={handleInputChange}
      />
    </Flex>
    
    <Flex>
      <TextInput
        name="City"
        label="City"
        placeholder='Gainesville'
        style={{marginBottom: 30, paddingRight: 20}}
        value={newCar.City}
        onChange={handleInputChange}
      />
      <TextInput
        name="State"
        label="State"
        placeholder='Florida'
        style={{paddingLeft: 20, marginBottom: 30}}
        value={newCar.State}
        onChange={handleInputChange}
      />
    </Flex>

    <TextInput
      name="Available After"
      label="Available After"
      placeholder='2024-04-24'
      style={{marginBottom: 30}}
      value={newCar['Available After']}
      onChange={handleInputChange}
    />

    <TextInput
      name="Price Per Day"
      label="Price Per Day"
      type="number"
      placeholder='200'
      style={{marginBottom: 30}}
      value={newCar['Price Per Day']}
      onChange={handleInputChange}
    />

    <TextInput
      name="Image"
      label="Image"
      placeholder='https://'
      style={{marginBottom: 30}}
      value={newCar.Image}
      onChange={handleInputChange}
    />

    <TextInput
      name="Status"
      label="Status"
      placeholder='With Customer'
      style={{marginBottom: 30}}
      value={newCar.Status}
      onChange={handleInputChange}
    />

    <TextInput
      name="Mileage"
      label="Mileage"
      placeholder='10000'
      type="number"
      style={{marginBottom: 30}}
      value={newCar.Mileage}
      onChange={handleInputChange}
    />

    <TextInput
      name="Price Per Mile"
      label="Price Per Mile"
      placeholder='5'
      type="number"
      style={{marginBottom: 30}}
      value={newCar['Price Per Mile']}
      onChange={handleInputChange}
    />


      <Button
        style={{ marginTop: 20 }}
        variant="gradient"
        gradient={primaryGradient}
        onClick={handleAddCar}
      >
        Add
      </Button>
    </div>
  );
};

export default AddCarForm;