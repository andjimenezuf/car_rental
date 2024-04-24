'use client'
import RentalListing from '@/features/bookings/RentalListing';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/services/auth.service'; // Adjust the path as needed
import { Grid } from '@mantine/core';
import{ GridCol, Title, Badge, TextInput, Flex ,Container} from '@mantine/core';
import { Card, Image, Text, Group, Button, Divider, Stack } from '@mantine/core';

const UserProfile = () => {
  const [bookings, setBookings] = useState<any[]>([]);


  useEffect(() => {
    const fetchBookings = async () => {
      // Fetch the user's bookings from the bookings table
      const { data: bookingsData, error: bookingsError } = await supabaseClient
        .from('bookings')
        .select('*')
        .eq('user_id', process.env.NEXT_PUBLIC_SUPABASE_USER_ID);

      if (bookingsError) {
        console.error('Error fetching bookings:', bookingsError);
        return;
      }

      // Extract the car_id values from the fetched bookings
      const carIds = bookingsData.map((booking) => booking.car_id);

      // Fetch the car details from the cars table based on the car_id values
      const { data: carsData, error: carsError } = await supabaseClient
        .from('cars')
        .select('*')
        .in('id', carIds);

      if (carsError) {
        console.error('Error fetching cars:', carsError);
        return;
      }

      // Update the bookings state with the fetched car details
      setBookings(carsData);
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = (bookingId: string) => {
    // Remove the cancelled booking from the bookings state
    setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== bookingId));
  };
  
  const container = {
    marginLeft: 25,
  };

  return (
    <Container style={{ padding: '40px', maxWidth: '100%' }}>
      <Title order={1} style={{ marginBottom: '20px', textAlign: 'center' }}>
        My Rentals
      </Title>
      <Grid > 
        {bookings.map((car) => (
            <RentalListing
              car={car}
              booking={car.booking}
              onCancelBooking={() => handleCancelBooking(car.id)}
            />
        ))}
      </Grid>
    </Container>
  );
};


export default UserProfile;