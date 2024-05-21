import React from 'react'
import Image1 from '../Images/Vector Smart Object.png';
import Image2 from '../Images/Vector Smart Object (1).png';
import Image3 from '../Images/Vector Smart Object (2).png'
function Darkblue () {
  return (
    <section className="py-16 bg-blue-700">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold mb-2">Services</h2>
      <h3 className="text-4xl font-bold">What I Do..</h3>
    </div>
    <div className="container mx-auto px-6 ">
      <div className="grid  grid-cols-3 gap-4 ms-40">
        <div className=" flex text-center w-3/5 gap-5 ">
          <div className="mb-4">
           <img src={Image1} alt='' height="200px" width="200px"></img>
          </div>
          <div>
          <h4 className="text-lg font-semibold mb-2">LOREM IPSUM DOLOR SIT AMET</h4>
          <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </div>
        </div>
        <div className="flex text-center w-3/5 gap-5">
          <div className="mb-4">
          <img src={Image2} alt='' height="300px" width="300px"></img>
          </div>
          <div>
          <h4 className="text-lg font-semibold mb-2">LOREM IPSUM DOLOR SIT AMET</h4>
          <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
       </div> 
       </div>
        <div className=" flex text-center w-3/5 gap-5">
          <div className="mb-4">
          <img src={Image3} alt='' height="250px" width="250px"></img>
          </div>
          <div>
          <h4 className="text-lg font-semibold mb-2">LOREM IPSUM DOLOR SIT AMET</h4>
          <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
       </div> 
       </div>
      </div>
    </div>
  </section>
  )
}

export default Darkblue