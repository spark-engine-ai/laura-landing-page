import React from 'react';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Section1 = () => {
  return (
    <section id="section1" className="mt-4">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-4">The Significance</h2>
            <p className="text-gray-700 text-sm width-full mb-6">
              What we've built opens up a new era of building web apps. To be able to sit and build 10 websites using 10 different terminals at the same time means we can get paid more for working less, while focusing on what we love - creating.
            </p>
            <div className="space-x-4">
              <a
               className="bg-discord hover:bg-discord-dark text-white font-bold py-2 px-4 rounded"
               href="https://discord.gg/BjdVGWFZCk"
               target="_blank"
               rel="noopener noreferrer"
               style={{ backgroundColor: "#5865F2" }}>
                <FaDiscord className="h-6 w-6 inline-block mr-2 mb-1" />
                Discord
              </a>
              <a
                href="https://github.com/spark-engine-ai/LAuRA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded items-center"
              >
                  <FaGithub className='h-6 w-6 inline-block mr-2 mb-1' />
                Github
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 ml-4">
            <img src="/laura.png" alt="Image 1" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
