import React from 'react';
import Banner from './Banner';
import ExceptionalBanner from './ExceptionalBanner';
import HomePageAppointmentBanner from './HomePageAppointmentBanner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalBanner></ExceptionalBanner>
            <HomePageAppointmentBanner></HomePageAppointmentBanner>
        </div>
    );
};

export default Home;