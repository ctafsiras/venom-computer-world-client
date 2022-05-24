import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='p-12'>
            <h1 className='text-3xl text-primary text-center'>My Portfolio</h1>
            <div className="divider"></div>
            <h2 className='text-xl text-primary font-bold'><span className='text-black font-normal'>Name:</span> CHOWDHURY TAFSIR AHMED SIDDIKI</h2>
            <p className='text-xl'>Email: ctafsiras@gmail.com</p>
            <p className='text-xl'>Education: Diploma (Accounting)</p>
            <p className='text-xl'>Technological Skills (Web Developer) : HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, ExpressJs.</p>
            <p className='text-xl'>Technological Skills (Others) : Digital Marketing, Problem Solving, WordPress Development.</p>
            <p className='text-xl'>Projects I have done yet.</p>
            <ol className='text-xl text-blue-800'>

                <li>1. <a className='underline' href="https://bookathon-warehouse-client.web.app/">Bookathon Warehouse</a></li>
                <li>2. <a className='underline' href="https://tanbirs-legal-solution.web.app/">Tanbir's Legal Solution </a></li>
                <li>3. <a className='underline' href="https://bycycle-mart.netlify.app/">ByCycle Mart</a></li>
               
            </ol>
        </div>
    );
};

export default MyPortfolio;