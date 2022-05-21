import React from 'react';

const BusinessSummery = () => {
    return (
        <div>

            <div>
                <h2 className='text-primary text-3xl font-bold text-center mt-6'>Our Success Summery</h2>
                <div class="divider"></div>
            </div>

            <div class="stats shadow mx-auto w-screen lg:w-full">

                <div class="stat place-items-center">
                    <div class="stat-title">Sales</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <div class="stat-value">21K</div>
                    <div class="stat-desc">Since 2020</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Registered Users</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div class="stat-value text-secondary">2,200</div>
                    <div class="stat-desc text-secondary">Increases 5% Per Year</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Products</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div class="stat-value">7,434</div>
                    <div class="stat-desc">Increases 15% Per Year</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummery;