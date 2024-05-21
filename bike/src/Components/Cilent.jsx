import React from 'react';
import Image1 from '../Images/Layer84.png';
import Image2 from '../Images/Layer 83.png';
import Image3 from '../Images/Layer 86.png';
import Image4 from '../Images/Layer 85.png';
import Image5 from '../Images/Layer 3.png'
const ClientSection = () => {
  return (
    <section className="relative text-white py-32" >
      <div>
        <img className="absolute bg-cover  bg-no-repeat text-white w-full h-full top-0" src={Image5}></img>
      </div>
   
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Client</h2>
        <h3 className="text-4xl font-bold mb-4">What I Do..</h3>
        <p className="w-1/3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex justify-around space-x-8 mt-20">
          <img src={Image1} alt="Client 1" className="h-32 object-contain"/>
          <img src={Image2} alt="Client 2" className="h-32 object-contain"/>
          <img src={Image3} alt="Client 3" className="h-32 object-contain"/>
          <img src={Image4} alt="Client 4" className="h-32 object-contain"/>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
