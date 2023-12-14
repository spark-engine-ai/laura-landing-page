import React from 'react';

const Banner = () => {
  // Create an array of numbers from 1 to 8
  const imageNumbers = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section id="banner" className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Supported Frameworks and UI Kits
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {imageNumbers.map((num) => (
            <img
              key={num}
              src={`/supported/${num}.PNG`} // Dynamically set the image source
              alt={`Framework ${num}`}
              className="w-32 h-32 mx-4 my-4"
            />
          ))}
        </div>
        <p className="text-sm text-gray-700 text-center mb-8">
          P.S. you can add your own :)
        </p>
      </div>
    </section>
  );
};

export default Banner;
