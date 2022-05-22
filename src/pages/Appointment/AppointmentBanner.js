import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div style={{
            background: `url(${bg})`, backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img className='max-w-sm rounded-lg shadow-2xl w-fit' src={chair} alt='chair' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        ></DayPicker>
                        <p>You have selected for appointment : <span className='text-secondary font-bold'>{format(date, 'PP')}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;