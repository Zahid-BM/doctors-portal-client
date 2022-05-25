import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { name, slots } = treatment;
    const handleFormSubmit = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-center">✕</label>
                    <h3 className="font-bold text-lg"> Booking for : {name}</h3>
                    <form onSubmit={handleFormSubmit} className='grid grid-cols-1 justify-items-center gap-3 my-10'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs text-center" />
                        <select name='slot' className="select select-bordered w-full max-w-xs text-center">
                            <option disabled defaultValue={'Select your convenient time'}>Select your convenient time</option>
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}
                                </option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs text-center" />
                        <input name='email' type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs text-center" />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs text-center" />
                        <input type="submit" value={'Submit'} className="btn w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;