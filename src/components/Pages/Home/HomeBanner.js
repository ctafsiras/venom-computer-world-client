import React from 'react';

const HomeBanner = () => {
    return (
        <div className="hero min-h-[70vh] bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/527332/1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:max-w-lg'>
                    <h1 className="text-5xl font-bold">Venom Computer World</h1>
                    <p className="py-8">Venom Computer Making Best computer parts for you, so that you can achieve full of trust of you customer.</p>
                    <button className="btn btn-primary">order now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;