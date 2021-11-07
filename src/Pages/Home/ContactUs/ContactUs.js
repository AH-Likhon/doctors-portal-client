import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const contactBanner = {
    background: `url(${bg})`,
    backgroundPosition: 'cover',
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 100
}

const ContactUs = () => {
    return (

        <Box style={contactBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={12} md={12}>
                        <h3 style={{ marginBottom: '0px', color: '#10CFE2' }}>Contact Us</h3>
                        <h1 style={{ marginTop: '0px', color: 'white' }}>Always Connect With Us</h1>

                        <form action="">
                            <FormControl variant="standard" sx={{ width: '50%', m: 1 }}>
                                <Input sx={{ color: 'white' }} id="component-simple" placeholder='Email Address' />
                            </FormControl>
                            <FormControl variant="standard" sx={{ width: '50%', m: 1 }}>
                                <Input sx={{ color: 'white' }} id="component-simple" placeholder='Subject' />
                            </FormControl>
                            <FormControl variant="standard" sx={{ width: '50%', m: 1 }}>
                                <Input
                                    sx={{ color: 'white' }}
                                    id="standard-multiline-flexible"
                                    placeholder="Your Message*"
                                    multiline
                                    maxRows={5}
                                    variant="standard"
                                />
                            </FormControl><br />
                            <FormControl variant="standard" sx={{ width: '10%', m: 1 }}>
                                <Button variant="contained" sx={{ backgroundColor: '#10CFE2', color: 'white' }}>Submit</Button>
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default ContactUs;