import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import SingleService from './SingleService';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Flouride Treatment',
            description: 'This is a very good treatment without any harm. Get treated and fell well.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'This is a very good treatment without any harm. Get treated and fell well.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'This is a very good treatment without any harm. Get treated and fell well.',
            img: whitening
        }
    ];
    return (
        <div className='mt-28'>
            <div className='text-center'>
                <h1 className='font-bold uppercase text-secondary text-2xl'>Our Services</h1>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-10 px-12'>
                {
                    services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;