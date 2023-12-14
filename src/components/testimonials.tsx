import React from 'react';
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
            <p className="text-gray-700 mb-4 w-60">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris."
            </p>
            <p className="text-gray-600 font-bold">John Doe</p>
            <p className="text-gray-700">CEO, Company Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
