import React from 'react';

const WhyWeBest = () => {
    const features = [
        { name: 'Display', description: 'Our Displays are life long example of Screen world.' },
        { name: 'Processor', description: 'In term of processor we provide the best service to make it more efficient for harder tasks.' },
        { name: 'Storage', description: 'Supported HDD, SSD, M2 SSD, so that it can never be slower.' },
        { name: 'Battery', description: 'Long lasting is always first choice. Our battery provides 5 hour long services.' },
        { name: 'Motherboard', description: 'Motherboard is the main feature of a computer.' },
        { name: 'Mouse & Keyboard', description: 'Best Mouse and keyboard for better performance.' },
    ]
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Computer Specifications</h2>
                    <p className="mt-4 text-gray-500">
                        We provide the best components of the world which make your computer supper fast and very attractive looks. Our brand is our product guarantee.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="bg-gray-100 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyWeBest;