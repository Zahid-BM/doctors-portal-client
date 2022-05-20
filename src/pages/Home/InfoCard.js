import React from 'react';
import clock from '../../assets/icons/clock.svg';

const InfoCard = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl bg-accent">
            <figure><img className='ml-4' src={clock} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;