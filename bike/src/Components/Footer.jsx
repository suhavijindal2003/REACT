import React from 'react'
import Image1 from '../Images/Icon (1).png'
import Image2 from '../Images/Icon (2).png'
import Image3 from '../Images/Icon.png'
import Image4 from '../Images/facebook.png'
import Image5 from '../Images/google.png'
import Image6 from '../Images/w.png'
import Image7 from '../Images/youtube.png'
import Image8 from '../Images/linkdin.png'
import Image9 from '../Images/digg.png'
import Image10 from '../Images/z.png'
const Footer = () => {
  return (
    <div className=' bg-black'>
    <div className='flex '>
        <div className='text-white w-6/12 mt-24 ms-64'>
            <h2 className='text-3xl'>Contacts..</h2>
            <h1 className='text-4xl font-bold'>Address Info</h1>
            <div className='flex mt-10'> 
            <div className="mb-4">
           <img src={Image1} alt='' ></img>
          </div>
          <div className='ms-10'>
          <h4 className="text-lg font-semibold mb-2">Email</h4>
          <p className='text-left'>free@psdfreebies.com</p>
        </div></div>
        <div className='flex mt-10'> 
        <div className="mb-4">
           <img src={Image2} alt='' ></img>
          </div>
          <div className='ms-14'>
          <h4 className="text-lg font-semibold mb-2">Call us!</h4>
          <p className='text-left'>+123 456 7890<br></br>
                                    +123 456 7890</p>
        </div>
        </div>
        <div className='flex mt-10'> 
        <div className="mb-4">
           <img src={Image3} alt='' ></img>
          </div>
          <div className='ms-10'>
          <h4 className="text-lg font-semibold mb-2">Address</h4>
          <p className='text-left'>123, Main Road, New City,<br></br> My Country 123456</p>
        </div>
        </div>

        </div>
        <div className='text-white w-6/12 mt-32 ms-24 '>
        <h1 className='text-4xl font-bold'>Get in Touch</h1>
        <form className='max-w-lg p-8  shadow-md r  '>
            <div className='mb-6 flex'>
                <label className='block text-white  font-bold mb-2 text-2xl' htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    className='w-full px-3  ms-10 py-2 border border-gray-300 bg-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div className='mb-6 flex'>
                <label className='block text-white text-2xl font-bold mb-2' htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    className='w-full px-3  ms-12 py-2 border border-gray-300 bg-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div className='mb-6 flex'>
                <label className='inline text-white text-2xl font-bold mb-2' htmlFor='phone'>Phone </label>
                <input
                    type='tel'
                    id='phone'
                    className='w-full px-3  ms-10 py-2 border border-gray-300 bg-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div className='mb-6 flex'>
                <label className='inline text-white text-2xl font-bold mb-2' htmlFor='message'>Message</label>
                <textarea
                    id='message'
                    className='w-full px-3  ms-5 py-2 border border-gray-300 bg-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    rows='4'
                ></textarea>
            </div>
            <div className='flex justify-center'>
                <button
                    type='submit'
                    className='bg-blue-600 w-40 text-xl font-bold text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                    Submit
                </button>
            </div>
        </form>
        </div>
       
    </div>
    <div >
    <div className='flex  flex-row  rounder-full border-white mt-24 m-auto  justify-center gap-10'>
            <img className='rounded-full border-white border-2 p-6' src={Image4}></img>
            <img className='rounded-full border-white border-2 p-6'src={Image5}></img>
            <img className='rounded-full border-white border-2 p-6'src={Image6}></img>
            <img className='rounded-full border-white border-2 p-6'src={Image7}></img>
            <img className='rounded-full border-white border-2 p-6'src={Image8}></img>
            <img className='rounded-full border-white border-2 p-6'src={Image9}></img>
            <img className='rounded-full border-white border-2 p-6'src={Image10}></img>
        </div>
        <div className='text-white mt-16 text-center'>
            <h2 className='text-2xl'>Designed By PSDFreebies.com</h2>
            <h3 className='text-xl mt-10'>COPYRIGHT 2017</h3>
        </div>
    </div>
    </div>
  )
}

export default Footer
