import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Button, Typography } from '@mui/material';

const DentalCare = () => {
    return (
        <Box sx={{ marginTop: '40px', flexGrow: 1 }}>

            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 500, height: 500 }}
                        src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    marginTop: '80px'
                }}>
                    <Box sx={{ margin: '10px' }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                            Exceptional Dental <br /> Care, on Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ my: 2 }} style={{ fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
};

export default DentalCare;