import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleFormSubmit = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2 text-center">✕</label>
                    <h3 class="font-bold text-lg"> Booking for : {name}</h3>
                    <form onSubmit={handleFormSubmit} className='grid grid-cols-1 justify-items-center gap-3 my-10'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs text-center" />
                        <select name='slot' class="select select-bordered w-full max-w-xs text-center">
                            <option disabled defaultValue={'Select your convenient time'}>Select your convenient time</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs text-center" />
                        <input name='email' type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs text-center" />
                        <input name='phone' type="text" placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs text-center" />
                        <input type="submit" value={'Submit'} class="btn w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;