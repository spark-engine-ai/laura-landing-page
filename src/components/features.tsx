import React from 'react';
import { FaStar, FaDiscord, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
const Features = () => {
  return (
    <section id="features">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
            <div className="flex items-center mb-4">
              <FaStar className="ml-2" />
              <h3 className="text-xl font-bold ml-2">Feature</h3>
            </div>
            <p className="text-gray-700 w-60 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
