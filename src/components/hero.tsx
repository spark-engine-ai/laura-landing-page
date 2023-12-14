import React from 'react';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-gray-100 mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <img src="/favicon.ico" alt="Logo" className="h-20 w-20 mr-2" />
          {/* Adjust font size for mobile and medium devices */}
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
            Loop Automated React Architecture
          </h1>
          {/* Set width to 100% on mobile and 70% on medium devices and up */}
          <p className="text-sm text-gray-700 text-center mb-8 w-full md:w-3/5">
            LAuRA is an AMI (artificial multi intelligence) which uses a workforce of task-driven AIs that work together to achieve a goal. Made for senior React js developers tired of coding boilerplates and platforms from the ground up, our open-source AMI is perfect for any 'lazy' developer looking to do more.
          </p>
          <div className="flex items-center">
            <a
              href="https://github.com/spark-engine-ai/LAuRA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center mr-4"
            >
              <FaGithub className='h-6 w-6 inline-block mr-2'/>
              Github
            </a>
            <a
              href="https://sparkengine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 flex hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <img src="/se.png" alt="Logo" className="h-6 w-6 mr-2" />
              Spark Engine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
