import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="font-bold text-xl text-center text-secondary">{name}</h2>
                <p>{
                    slots.length ? slots[0] : <span className='text-red-500'>Try Another date</span>
                }</p>
                <p>

                    {slots.length ? <span>{slots.length} {slots.length > 1 ? "spaces" : 'space'} are available</span> : <span>{slots.length} space available</span> }

                </p>
                <PrimaryButton>Book Appointment</PrimaryButton>
            </div>
        </div>
    );
};

export default Service;