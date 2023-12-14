import React from 'react';
import { FaDiscord, FaArrowRight } from 'react-icons/fa';
const Discord = () => {
  return (
    <a href="https://discord.gg/BjdVGWFZCk" target="_blank">
    <section id="discord" className="bg-discord" style={{ backgroundColor: "#5865F2" }}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <FaDiscord className="text-white text-2xl mr-4" />
            <div>
              <h3 className="text-md text-white">
                Want to Contribute?
              </h3>
            </div>
            <button className="font-bold flex py-1 px-2 rounded text-white ml-2" style={{ backgroundColor: "transparent"}}>
              Join us
              <FaArrowRight className="ml-2 mt-1"/>
            </button>
          </div>
        </div>
      </div>
    </section>
    </a>
  );
};
export default Discord;
