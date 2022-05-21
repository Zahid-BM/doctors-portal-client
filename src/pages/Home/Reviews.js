import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div className="card lg:w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="flex items-center">
                    <div className='mt-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} alt='reviewer' />
                            </div>
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h1 className='font-bold'>{review.name}</h1>
                        <h1>{review.location}</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;