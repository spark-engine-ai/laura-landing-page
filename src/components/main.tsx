import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Hero from './hero';
import Features from './features';
import Testimonials from './testimonials';
import Pricing from './pricing';
import Newsletter from './newsletter';
import Footer from './footer';
import Banner from './banner';
import Discord from './discord';
import Section1 from './section1';
import DownloadsTable from './downloadstable';
const Main = () => {
  const [activeComponent, setActiveComponent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveComponent((prevComponent) => (prevComponent + 1) % 4); // Update the active component count
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const getActiveComponent = () => {
    switch (activeComponent) {
      case 0:
        return <Features />;
      case 1:
        return <Testimonials />;
      case 2:
        return <Pricing />;
      case 3:
        return <Newsletter />;
      default:
        return null;
    }
  };
  return (
    <div className="bg-white text-black">
    <div style={{position:'fixed', width:'100%'}}>
    <Discord />
      <Navbar />
          </div>
      <div
        className="h-50vh overflow-hidden"
        style={{
          borderTop: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Hero />
      </div>
      	<Section1 />
        <div className="items-center h-full top-10 right-0">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">Made with LAuRA</h2>
            <p className="text-gray-700">
             Even this website itself was made using our AMI...
            </p>
          </div>
        <div className="transition-all duration-500 ease-in-out" style={{height:'55vh', marginTop:'-5vh'}}>
          {getActiveComponent()}
        </div>
        </div>
      <DownloadsTable />
      <Banner />
      <Footer />
    </div>
  );
};
export default Main;
