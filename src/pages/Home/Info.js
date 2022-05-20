import React from 'react';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
        </div>
    );
};

export default Info;