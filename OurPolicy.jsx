
import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-8 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      {/* Policy Item */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={assets.exchange_icon}
          className="w-12"
          alt="Exchange Icon"
        />
        <div>
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle-free exchange policy</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <img
          src={assets.quality_icon}
          className="w-12"
          alt="Quality Icon"
        />
        <div>
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <img
          src={assets.support_img}
          className="w-12"
          alt="Support Icon"
        />
        <div>
          <p className="font-semibold">Best Customer Support</p>
          <p className="text-gray-400">We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
