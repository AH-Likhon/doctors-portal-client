import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';

const Blog = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 5 }}>
                <Typography variant="h5" sx={{ color: '#5CE7ED' }}>
                    Our Blog <br />
                    <span style={{ color: 'black', fontWeight: 600 }}>From Our Blog News</span>
                </Typography>

                <Grid container spacing={2} sx={{ my: 5 }}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345, backgroundColor: '#10CFE2', color: 'white' }}>
                            <CardContent>
                                <Typography variant="body2" style={{ textAlign: "left" }}>
                                    <span style={{ marginBottom: 0, fontSize: '16px' }} >Rashed kabir</span><br />
                                    <span style={{ marginTop: 0, fontSize: '14px' }} >22 Aug 2020</span>
                                    <p style={{ fontSize: '18px', marginTop: '50px' }}>Check at least a Doctor in a <br /> year for your teeth</p>
                                </Typography>
                            </CardContent>
                            <CardContent style={{ float: 'left', marginTop: '50px' }}>
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <img src={people1} height="80" alt="" />
                                <div style={{ marginLeft: '10px' }}>
                                    <h4 style={{ marginBottom: 5, color: '#5CE7ED' }}>Dr. caudi</h4>
                                    <h6 style={{ marginTop: 0 }}>23 April 2021</h6>
                                </div>
                            </CardContent>
                            <CardContent sx={{ textAlign: 'left' }}>
                                <Typography variant="p" sx={{ fontWeight: 'bold', mb: 5 }}>
                                    2 times of brush in a day can keep you healthy
                                </Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mt: 5 }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <img src={people2} height="80" alt="" />
                                <div style={{ marginLeft: '10px' }}>
                                    <h4 style={{ marginBottom: 5, color: '#5CE7ED' }}>Dr. John Mitchel</h4>
                                    <h6 style={{ marginTop: 0 }}>23 April 2021</h6>
                                </div>
                            </CardContent>
                            <CardContent sx={{ textAlign: 'left' }}>
                                <Typography variant="p" sx={{ fontWeight: 'bold', mb: 5 }}>
                                    The teeth cancer is taking a <br /> challenge
                                </Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mt: 5 }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Blog;