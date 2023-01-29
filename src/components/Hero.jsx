import React from 'react'
import patio from '../assets/patio.jpg'
import hdhero from '../assets/hdhero.jpg'


const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img src={hdhero} alt='/'
            className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className='font-bold text-4xl drop-shadow-2xl'>Your friendly local neighborhood painting professionals</h1>
            <a className='inline-block' href='#contact'>
            <button className='flex w-[46%] justify-between items-center mt-10 px-4 py-2 text-xl rounded-sm font-bold bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600 inline-block'>
                Schedule an Estimate
                
                     
            </button>
           </a>
            <h2 className='text-4xl py-4 italic '></h2>
            <p></p>
            
</div>
        </div>
        </div>
    );
}

export default Hero;