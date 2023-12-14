import React from 'react';
const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
            <h3 className="text-xl font-bold mb-4">Basic</h3>
            <ul className="list-disc list-inside text-gray-700 text-left">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Phasellus nec iaculis mauris</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
