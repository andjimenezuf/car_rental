import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, Image, Text, Flex, Button, Group, Divider, Modal, TextInput } from '@mantine/core';
import BookingCard from './BookingCard';
import { primaryGradient } from '@/const';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

interface Car {
  id: number;
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

interface Booking {
  created_at: string;
  car_id: number;
  pickupDate: string;
  returnDate: string;
  totalPrice: number;
  status: string;
  user_id: string;
  car: Car;
}

const BookingsList: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [reservationModal, setReservationModal] = useState(false);

  // States for form inputs
  const [newBooking, setNewBooking] = useState({
    car_id: '',
    pickupDate: '',
    returnDate: '',
    totalPrice: '',
    status: '',
    user_id: '',
  });

  // Handle input change for new booking form
  const handleInputChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBooking({ ...newBooking, [name]: event.target.value });
  };

  // Handle new reservation submit
  const handleAddBooking = async () => {
    // Convert string input to appropriate data types
    const parsedCarId = parseInt(newBooking.car_id, 10);
    const parsedTotalPrice = parseInt(newBooking.totalPrice, 10);

    // Add the new booking to the bookings table
    const { data: bookingData, error: bookingError } = await supabase.from('bookings').insert([
      {
        car_id: parsedCarId,
        pickupDate: newBooking.pickupDate,
        returnDate: newBooking.returnDate,
        totalPrice: parsedTotalPrice,
        status: newBooking.status,
        user_id: newBooking.user_id
      }
    ]);

    if (bookingError) {
      console.error('Error adding booking:', bookingError);
    } else {
      // Update the car status to 'With Customer' in the cars table
      const { data: carData, error: carError } = await supabase
        .from('cars')
        .update({ Status: 'With Customer' })
        .eq('id', parsedCarId);

      if (carError) {
        console.error('Error updating car status:', carError);
      } else {
        // Close the modal and clear the form
        setReservationModal(false);
        setNewBooking({
          car_id: '',
          pickupDate: '',
          returnDate: '',
          totalPrice: '',
          status: '',
          user_id: '',
        });
        // Fetch updated bookings after adding a new booking and updating the car status
        fetchBookings();
      }
    }
  };

  // Fetch all bookings with car details
  const fetchBookings = async () => {
    // Fetch all bookings
    const { data: bookingsData, error: bookingsError } = await supabase.from('bookings').select('*');
    if (bookingsError) {
      console.error('Error fetching bookings:', bookingsError);
      return;
    }

    // Extract unique car IDs from bookings
    const carIds = bookingsData?.map(booking => booking.car_id).filter((v, i, a) => a.indexOf(v) === i);

    // Fetch car details for the extracted car IDs
    if (carIds?.length > 0) {
      const { data: carsData, error: carsError } = await supabase.from('cars').select('*').in('id', carIds);
      if (carsError) {
        console.error('Error fetching cars:', carsError);
        return;
      }

      // Map cars data back to bookings
      const updatedBookings = bookingsData?.map(booking => ({
        ...booking,
        car: carsData?.find(car => car.id === booking.car_id)
      }));

      setBookings(updatedBookings || []);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 8 }}>
          <h1>Reservations</h1>
        </div>
        <div style={{ flex: 1, marginTop: 30 }}>
          <Button variant='gradient' gradient={primaryGradient} onClick={() => setReservationModal(true)}>New Reservation</Button>
        </div>
      </div>

      {bookings.map((booking, index) => (
        <BookingCard key={index} booking={booking} />
      ))}

      <Modal
        opened={reservationModal}
        onClose={() => setReservationModal(false)}
        withCloseButton={false}
      >
        <h2>New Reservation</h2>

        <TextInput
          label="Car ID"
          placeholder='000'
          style={{ marginBottom: 30 }}
          value={newBooking.car_id}
          onChange={handleInputChange('car_id')}
        />

        <Flex>
          <TextInput
            label="Pickup Date"
            placeholder='2024-04-24'
            style={{ marginBottom: 30 }}
            value={newBooking.pickupDate}
            onChange={handleInputChange('pickupDate')}
          />
          <TextInput
            label="Return Date"
            placeholder='2024-04-26'
            style={{ marginLeft: 10, marginBottom: 30 }}
            value={newBooking.returnDate}
            onChange={handleInputChange('returnDate')}
          />
        </Flex>

        <TextInput
          label="Total Price"
          placeholder='300'
          style={{ marginBottom: 30 }}
          value={newBooking.totalPrice}
          onChange={handleInputChange('totalPrice')}
        />

        <TextInput
          label="Status"
          placeholder='Booked'
          style={{ marginBottom: 30 }}
          value={newBooking.status}
          onChange={handleInputChange('status')}
        />

        <TextInput
          label="User ID"
          placeholder='********'
          style={{ marginBottom: 30 }}
          value={newBooking.user_id}
          onChange={handleInputChange('user_id')}
        />

        <Button
          style={{ marginTop: 20 }}
          variant='gradient'
          gradient={primaryGradient}
          onClick={handleAddBooking}
        >
          Add
        </Button>
      </Modal>
    </div>
  );
};

export default BookingsList;