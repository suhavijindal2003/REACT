import React from 'react';


function Navbar (){
  return (
    <nav className=' flex w-100 h-28 justify-between bg-transparent'>
   
        <h1 className='text-white text-6xl mt-8 ms-20'><span className='text-sky-600	'>!st</span> Agency</h1>
        <div className='flex mt-14 text-2xl text-white gap-5 me-14 '>
           
            <a href='../Components/Home.jsx'>HOME</a>
            <a href='../Components/Cilent.jsx'>ABOUT US</a>
            <a href='../Components/Blog.jsx'>BLOG</a>
            <a href='../Components/Services.jsx'>SERVICES</a>
            <a href='../Components/Profile.jsx'>PAGES</a>
            <a href='../Components/Footer.jsx'>CONTACT US</a>
        </div>
    </nav>
  )
}

export default Navbar;