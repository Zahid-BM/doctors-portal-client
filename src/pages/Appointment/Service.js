import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="font-bold text-xl text-center text-secondary">{name}</h2>
                <p>{
                    slots.length ? slots[0] : <span className='text-red-500'>Try Another date</span>
                }</p>
                <p>

                    {slots.length ? <span>{slots.length} {slots.length > 1 ? "spaces" : 'space'} are available</span> : <span>{slots.length} space available</span>}

                </p>

                <div className='my-3 modal-action mx-auto'>
                    <label
                        htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appointment
                    </label>

                </div>

            </div>
        </div>
    );
};

export default Service;