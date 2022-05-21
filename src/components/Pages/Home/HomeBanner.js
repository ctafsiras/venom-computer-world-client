import React from 'react';

const HomeBanner = () => {
    return (
        <div class="hero min-h-[70vh] bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:max-w-lg'>
                    <h1 class="text-5xl font-bold">Venom Computer World</h1>
                    <p class="py-8">Venom Computer Making Best computer parts for you, so that you can achieve full of trust of you customer.</p>
                    <button class="btn btn-primary">order now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;