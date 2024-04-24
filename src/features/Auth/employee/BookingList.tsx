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
            <div style={{display: "flex"}}>
                <div style={{flex: 8}}>
                    <h1>Reservations</h1>
                </div>
                <div style={{flex: 1, marginTop: 30}}>
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
                style={{marginBottom: 30}}
                onChange={() => {
                    
                }}
                />

                <Flex>
                <TextInput
                    label="Pickup Date"
                    placeholder='2024-04-24'
                    style={{marginBottom: 30}}
                />
                <TextInput
                    label="Return Date"
                    placeholder='2024-04-26'
                    style={{marginLeft: 10, marginBottom: 30}}
                />
                </Flex>

                <TextInput
                label="Total Price"
                placeholder='300'
                style={{marginBottom: 30}}
                />

                <TextInput
                label="Status"
                placeholder='Booked'
                style={{marginBottom: 30}}
                />

                <TextInput
                label="User ID"
                placeholder='********'
                style={{marginBottom: 30}}
                />

                <Button
                style={{marginTop: 20}}
                variant='gradient'
                gradient={primaryGradient}
                onClick={() => {
                    setReservationModal(false)
                }}
                >
                Add
                </Button>
            </Modal>
        </div>
    );
};

export default BookingsList;
