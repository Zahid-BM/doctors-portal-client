import React from 'react';
import Banner from './Banner';
import ExceptionalBanner from './ExceptionalBanner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalBanner></ExceptionalBanner>
        </div>
    );
};

export default Home;