import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const CustomersReview = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 5 }}>
                <Typography variant="h5" sx={{ color: '#5CE7ED', float: 'left' }}>
                    Testimonials <br />
                    <span style={{ color: 'black', fontWeight: 600 }}>What's Our Patients <br /> Says</span>
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345, py: 5 }}>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <img src={people1} height="80" alt="" />
                                <div>
                                    <h4 style={{ marginBottom: 5, color: '#5CE7ED' }}>Winson Herry</h4>
                                    <h6 style={{ marginTop: 0 }}>California</h6>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345, py: 5 }}>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <img src={people2} height="80" alt="" />
                                <div>
                                    <h4 style={{ marginBottom: 5, color: '#5CE7ED' }}>Winson Herry</h4>
                                    <h6 style={{ marginTop: 0 }}>California</h6>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345, py: 5 }}>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <img src={people3} height="80" alt="" />
                                <div>
                                    <h4 style={{ marginBottom: 5, color: '#5CE7ED' }}>Winson Herry</h4>
                                    <h6 style={{ marginTop: 0 }}>California</h6>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default CustomersReview;