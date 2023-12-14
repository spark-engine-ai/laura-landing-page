import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';
const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-black text-center">
            Made by &copy; Spark Engine AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
