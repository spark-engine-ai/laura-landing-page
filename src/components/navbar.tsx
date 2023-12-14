import React, { useState } from 'react';
import { FaBars, FaDiscord, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/favicon.ico" alt="Logo" className="h-6 w-6 mr-2" />
            <h1 className="text-black text-lg font-bold">LAuRA</h1>
          </div>
          <div className="hidden md:flex items-center">
          <a
            href="https://github.com/spark-engine-ai/LAuRA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center ml-4"
          >
              <FaGithub className='h-6 w-6 inline-block mr-2' />
            Github
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

       //   <div className="md:hidden">
       //     <button
       //       onClick={toggleMobileMenu}
       //       className="text-black hover:text-gray-300 focus:outline-none"
       //     >
       //       <FaBars className="h-6 w-6" />
       //     </button>
       //   </div>

//{isMobileMenuOpen && (
//  <div className="md:hidden">
//    <div className="flex flex-col items-center mt-2">
//      <a
//        href="#"
//        className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
//        onClick={() => {
//          scrollToSection('hero');
//          toggleMobileMenu();
//        }}
//      >
//        Home
//      </a>
//    </div>
//  </div>
//)}
