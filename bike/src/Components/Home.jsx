import React from 'react'

import myImage from '../Images/upper.png';
function Page (){
  return (
    <section className='flex w-100 h-screen bg-transparent '>
        <div className='text-white w-2/5 h-autos mt-44 ms-32'> 
            <h3 className='text-4xl font-LeckerliOne'>Hello</h3>
            <h1 className='text-5xl font-bold mt-5'>My Name is <span className='text-sky-600	'>John Doe</span></h1>
            <h2 className='text-4xl mt-3'>Ceo | !st Agency</h2>
            <p className='text-xl mt-14 ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button className='text-2xl bg-sky-600 mt-16 ms-10 rounded-full w-36 h-12'>Click me</button>
        </div>
        <div>
            <img src={myImage} alt='' className='mt-14' ></img>
        </div>
    </section>
  )
}

export default Page