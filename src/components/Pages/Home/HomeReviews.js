import React from 'react';
import { useQuery } from 'react-query';

const HomeReviews = () => {
    //review section
    const { data: reviews, isLoading } = useQuery(['get-review'], () => fetch(`http://localhost:4000/get-review`).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    return (
        <div className="mt-12">
            <p className="text-center text-3xl font-bold text-gray-800">
                Customer Reviews
            </p>
            <p className="text-center mb-16 text-xl font-normal text-gray-500">
                What say people about us!
            </p>
            <div className="carousel w-full">
                {
                    reviews.map((rv, index) => <div key={index} id={`item${index + 1}`} className="carousel-item text-center w-full">
                        <div className="p-4 mx-auto">
                            <div className="text-center">
                                <img alt="profile" src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-male-silhouette-avatar-profile-picture.jpg" className="mx-auto rounded-lg h-40 w-40" />
                            </div>
                            <div className="bg-white rounded-lg">
                                <div className="text-center">
                                    <p className="text-2xl font-bold mt-4 text-gray-800">
                                        {rv.name}
                                    </p>
                                    <p className="text-md text-black font-bold">
                                        Rating: {rv.rating}/5.
                                    </p>
                                    <p className="text-center text-gray-500 max-w-lg mx-auto py-4 font-light">
                                        {rv.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="flex justify-center w-full pb-2 gap-2">
                {
                    reviews.map((rv, index) => <a key={index} href={`#item${index + 1}`} className="btn btn-xs">{index + 1}</a>)
                }
            </div>
        </div>

    );
};

export default HomeReviews;