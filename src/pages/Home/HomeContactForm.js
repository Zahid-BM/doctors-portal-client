import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../shared/PrimaryButton';

const HomeContactForm = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='py-10 mb-20'>
            <div className=' text-center'>
                <h1 className='text-secondary font-bold'>Contact Us</h1>
                <h1 className='text-2xl text-white mb-5'>Stay Connected with us</h1>
                <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs my-3" /> <br />
                <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs my-3" />
                <br />
                <textarea class="textarea textarea-bordered h-24 w-full max-w-xs mt-3 mb-8" placeholder="Write your message here"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default HomeContactForm;