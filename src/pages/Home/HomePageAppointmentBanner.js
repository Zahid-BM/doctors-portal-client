import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../shared/PrimaryButton';

const HomePageAppointmentBanner = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='lg:flex items-center gap-10 mb-20'>
            <div className=''>
                <img className='mt-[-75px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='p-5'>
                <h1 className='font-bold text-secondary text-2xl'>Appointment</h1>
                <h1 className='text-white text-4xl'>Make an appointment Today</h1>
                <p className='text-white my-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>
        </section>
    );
};

export default HomePageAppointmentBanner;