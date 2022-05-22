import React from 'react';
import Footer from '../shared/Footer';
import Banner from './Banner';
import ExceptionalBanner from './ExceptionalBanner';
import HomeContactForm from './HomeContactForm';
import HomePageAppointmentBanner from './HomePageAppointmentBanner';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalBanner></ExceptionalBanner>
            <HomePageAppointmentBanner></HomePageAppointmentBanner>
            <Testimonial></Testimonial>
            <HomeContactForm></HomeContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;