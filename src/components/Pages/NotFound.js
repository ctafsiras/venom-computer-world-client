import React from 'react';

const NotFound = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='mx-auto my-auto'>
<h1 className='text-red-700 font-bold text-8xl'>404 Error</h1>
<h1 className='text-blue-700 font-bold text-5xl'>Page Not Found</h1>

            </div>
            <div className='w-9/12'>
                <img className='w-full' src="https://icon2.cleanpng.com/20180309/ubw/kisspng-cartoon-clip-art-star-cloud-decoration-pattern-5aa2ac9320b386.788499741520610451134.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;