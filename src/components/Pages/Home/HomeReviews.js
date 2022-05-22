import React from 'react';

const HomeReviews = () => {
    return (

        <div class="p-4">
            <p class="text-center text-3xl font-bold text-gray-800">
                Customer Reviews
            </p>
            <p class="text-center mb-32 text-xl font-normal text-gray-500">
                What say people about us!
            </p>
            <div class="flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify-evenly">
                <div class="p-4 relative">
                    <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                        
                            <img alt="profil" src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800" />
                        
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                        <div class="text-center">
                            <p class="text-2xl text-gray-800 dark:text-white">
                                Patrick Sebastien
                            </p>
                            <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                                4 out of 5
                            </p>
                            <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                                Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="p-4 relative">
                    <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                     
                            <img alt="profil" src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800" />
                      
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                        <div class="text-center">
                            <p class="text-2xl text-gray-800 dark:text-white">
                                Charlie
                            </p>
                            <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                                Lead dev
                            </p>
                            <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                                Charlie, born December 18, 1993 in Challans, is an imitator and pintor.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="p-4 relative">
                    <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                            <img alt="profil" src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800" />
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                        <div class="text-center">
                            <p class="text-2xl text-gray-800 dark:text-white">
                                Thierry Halliday
                            </p>
                            <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                                CTO
                            </p>
                            <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                                Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist.
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeReviews;