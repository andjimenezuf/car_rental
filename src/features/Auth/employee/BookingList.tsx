import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, Image, Text, Flex, Button, Group, Divider } from '@mantine/core';
import BookingCard from './BookingCard';

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

    useEffect(() => {
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

        fetchBookings();
    }, []);

    return (
        <div>
            {bookings.map((booking, index) => (
                <BookingCard key={index} booking={booking} />
            ))}
        </div>
    );
};

export default BookingsList;
