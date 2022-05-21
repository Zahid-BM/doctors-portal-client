import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Reviews from './Reviews';


const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Kamrul',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Khulna',
            img: people1
        },
        {
            _id: 2,
            name: 'Habiba',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Dhaka',
            img: people2
        },
        {
            _id: 3,
            name: 'Hanifa',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Magura',
            img: people3
        }
    ]
    return (
        <section className='mb-20'>
            <div className='flex justify-between p-5'>
                <div>
                    <h1 className='font-bold text-xl text-secondary'>Testimonial</h1>
                    <h1 className='text-3xl'>What our patients say</h1>
                </div>
                <div>
                    <img className='w-20 lg:w-40' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 px-12'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;