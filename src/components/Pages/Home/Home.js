import React from 'react';
import HomeBanner from './HomeBanner';
import Navbar from '../../Shared/Navbar';
import BusinessSummery from './BusinessSummery';
import ComputerParts from './ComputerParts';
import WhyWeBest from './WhyWeBest';
import SecureTransactions from './SecureTransactions';
import HomeReviews from './HomeReviews';

const Home = () => {
    return (
        <div className='lg:px-12'>

            <HomeBanner />
            <ComputerParts />
            <WhyWeBest />
            <BusinessSummery />
            <HomeReviews />
            <SecureTransactions />
        </div>
    );
};

export default Home;