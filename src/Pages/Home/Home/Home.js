import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import CustomersReview from '../CustomersReview/CustomersReview';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <CustomersReview></CustomersReview>
            <Blog></Blog>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;