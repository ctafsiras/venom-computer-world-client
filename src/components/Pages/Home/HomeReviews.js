import React from 'react';
import { useQuery } from 'react-query';

const HomeReviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery(['get-review'], () => fetch(`http://localhost:4000/get-review`).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    return (

        <div className="p-4">
            <p className="text-center text-3xl font-bold text-gray-800">
                Customer Reviews
            </p>
            <p className="text-center mb-32 text-xl font-normal text-gray-500">
                What say people about us!
            </p>
            <div className="flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify-evenly grid grid-cols-1 lg:grid-cols-3">
                {
                    reviews.map((review, index) =>

                        <div
                            key={index}
                            className="p-4 relative">
                            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">

                                <img alt="profile" src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-male-silhouette-avatar-profile-picture.jpg" className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800" />

                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                                <div className="text-center">
                                    <p className="text-2xl text-gray-800 dark:text-white">
                                        {review.name}
                                    </p>
                                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                                        {review.rating}/10.
                                    </p>
                                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                                        {review.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
        </div>

    );
};

export default HomeReviews;