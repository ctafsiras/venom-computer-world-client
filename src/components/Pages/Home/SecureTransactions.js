import React from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const SecureTransactions = () => {
  //transaction parts
  const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'We Provides Competitive Exchange rates which is rare right now.',
      icon: GlobeAltIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'We dont charge any hidden fees. all of our charges are very neat and clear.',
      icon: ScaleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Our Dealing method is fully transparent and instant service.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Mobile notifications',
      description:
        'Every transaction between we and our customer is updated by Mobile notification.',
      icon: AnnotationIcon,
    },
  ]
  return (
    <div className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="lg:text-center">
   
    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      A secure way of Transactions
    </p>
    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
     In terms of bulk order when you guys pays a lot, there could have some issues. but we provide a secure Transactions process so that you will never loose your money.
    </p>
  </div>

  <div className="mt-10">
    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
      {features.map((feature) => (
        <div key={feature.name} className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
        </div>
      ))}
    </dl>
  </div>
</div>
</div>
  );
};

export default SecureTransactions;