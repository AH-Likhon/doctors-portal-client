import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

const AppointmentAvailable = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '8.00 AM - 9.00 AM',
            space: 10
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '9.00 AM - 10.00 AM',
            space: 8
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            space: 10
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            space: 5
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '6.00 PM - 7.00 PM',
            space: 10
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '7.00 PM - 8.00 PM',
            space: 10
        }
    ]
    return (
        <Container>
            <Typography sx={{ color: 'info.main', mb: 2 }} variant="h4" gutterBottom component="div">
                Available Appointment on {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        date={date}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AppointmentAvailable;