import React from 'react';
import Image1 from '../Images/Img 05.png';
import Image2 from '../Images/Img 01.png';
import Image3 from '../Images/Img 02.png';
import Image4 from '../Images/Layer 6.png';
import Image5 from '../Images/Img 04.png';
import Image6 from '../Images/Img 03.png';

const ProfileSection = () => {
  return (
    <section className="bg-white ">
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-2">Profile</h2>
        <h3 className="text-4xl font-bold">I Make Beautiful Things</h3>
      </div>
      <div className=" w-full mt-20 ">
        <div className="flex grid-cols-2 grid-cols-4" >
        
          <div className="gridcol-span-1 col-span-1 ">
            <img src={Image1} alt="Project 1" className="w-full h-full object-cover"/>
          </div>
          <div className="grid grid-rows-1 ">
            <img src={Image2} alt="Project 2" className="w-full h-full object-cover"/>
            <img src={Image3} alt="Project 3" className="w-full h-full object-cover"/>
          </div>

          <div className="col-span-2 col-span-6">
            <img src={Image4} alt="Project 4" className="w-full h-full object-cover"/>
          </div>
          <div className="grid grid-cols-1  ">
            <img src={Image5} alt="Project 5" className="w-full h-full object-cover"/>
            <img src={Image6} alt="Project 6" className="w-full h-full object-cover"/>
            
          </div>
        
        </div>
      </div>
    </section>
   
  );
};

export default ProfileSection;
