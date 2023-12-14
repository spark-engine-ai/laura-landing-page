import React from 'react';
const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
          <h2 className="text-3xl font-bold text-center mb-8">
            Subscribe to Newsletter
          </h2>
          <div className="flex items-center">
            <input
              type="email"
              className="border border-gray-400 rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
