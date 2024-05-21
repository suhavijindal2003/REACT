import React from 'react'

function Blue () {
  return (
    <section className='flex w-100 h-5/6 bg-blue-600 justify-around'>
        <div className='w-1/4 mt-24 ms-36'>
        <h3 className='text-3xl'>Who are we</h3>
        <h2 className='text-4xl mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p className='text-xl mt-3 ms-5' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <button className='text-2xl bg-gray-700 mt-10 ms-10 rounded-full w-32 mb-10 h-12'>click me</button>
        </div>
        <div className='w-2/5'>
        <p className='text-xl mt-36' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    </section>
  )
}

export default Blue