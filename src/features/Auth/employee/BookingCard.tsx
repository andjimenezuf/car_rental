// BookingCard.tsx
import React from 'react';
import { Card, Image, Text, Flex, Button, Group, Divider } from '@mantine/core';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

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

interface BookingCardProps {
  booking: Booking;
}



const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  const startDate = dayjs(booking.pickupDate, 'YYYY-MM-DD');
  const endDate = dayjs(booking.returnDate, 'YYYY-MM-DD');

  if (!startDate.isValid() || !endDate.isValid()) {
    console.error('Invalid date format', booking.pickupDate, booking.returnDate);
    return <Text>Invalid date format in booking data.</Text>;
  }

  const daysRented = endDate.diff(startDate, 'day');
  let pricePerDay = 0;
  let totalPrice = 0;

  if (booking.car && booking.car['Price Per Day']) {
    pricePerDay = parseFloat(booking.car['Price Per Day'].toString().replace(/[^0-9.-]+/g, ""));
    if (!isNaN(pricePerDay)) {
      totalPrice = (daysRented + 1) * pricePerDay;
    } else {
      console.error('Invalid price per day:', booking.car['Price Per Day']);
      return <Text>Error calculating total price.</Text>;
    }
  }

  return (
    <Card shadow="sm" p="md" radius="md" withBorder style={{ marginBottom: 20 }}>
      <Flex align="center">
        {booking.car && booking.car.Image && (
          <Image src={booking.car.Image} alt={booking.car.Model} width={100} height={100} fit="cover" style={{ marginRight: 20 }} />
        )}
        <Flex direction="column" style={{ flex: 1 }}>
          {booking.car ? (
            <>
              <Text size="lg">{booking.car.Make} {booking.car.Model}</Text>
              <Text color="dimmed" size="sm">
                {booking.car['Model Year']} - {booking.car.State}, {booking.car.City}
              </Text>
            </>
            ) : (
              <></>
            )}
          </Flex>
      </Flex>
      <Divider my="sm" />
      <Group style={{ marginTop: 10 }}>
        <div>
          <Text size="sm">Pickup: {booking.pickupDate}</Text>
          <Text size="sm">Return: {booking.returnDate}</Text>
        </div>
        <div>
          <Text size="sm">Total Price: ${totalPrice.toFixed(2)}</Text>
          {booking.car && <Text size="sm">Mileage: {booking.car.Mileage} miles</Text>}
        </div>
      </Group>
    </Card>
  );
};

export default BookingCard;