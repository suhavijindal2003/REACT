import React from 'react'

function Blog()  {
  return (
    <section className='container'>
     
  <div className="grid grid-cols-4 gap-5 m-32 ms-52">
    <div className=" col-span-2 text-black ">
      <h3 className=' text-2xl mt-10 '>Blog</h3>
      <h1 className='text-3xl font-bold'>I write Beautiful Things</h1>
      <p className='text-xl mt-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className=" row-span-2 col-span-2 bg-slate-600 text-center">
      <p className='text-xl mt-10'>11 November</p>
      <h1 className='text-4xl font-bold mt-40'>Lorem ipsum dolor</h1>
      <p className='text-xl mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className=" col-span-2 bg-blue-600 text-center">
      <p className='text-xl mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className='text-xl mt-14'>11 November</p>
    </div>
    <div className="col-start-0 col-start-1 bg-slate-200 p-8">
      <p className='text-xl mt-5 text-center'>11 November</p>
      <h1 className='font-bold text-3xl mt-8 text-center'>Lorem<br />ipsum dolor</h1>
    </div>
    <div className="  bg-black p-8 text-white">
      <p className='text-xl mt-5 text-center'>11 November</p>
      <h1 className='font-bold text-3xl mt-8 text-center'>Lorem<br />ipsum dolor</h1>
    </div>
    <div className=" col-span-2 bg-rose-500 p-8 text-center">
      <p className='text-xl mt-5'>11 November</p>
      <h1 className='font-bold text-3xl'>Lorem ipsum dolor</h1>
      <p className='text-xl mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</section>

  )
}

export default Blog