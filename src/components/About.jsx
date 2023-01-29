import React from 'react'
import about3 from '../assets/about3.jpg'
import exterior3 from '../assets/exterior3.jpg'

const Selects = () => {
    return(
     <div id='about' className='w-full bg-gray-50 pb-16'>
    <div className='max-w-[1140px] m-auto w-full px-4 md:py-16 '>
           

        <h2 className='text-center text-gray-700 p-4'>About Us</h2>

    <body className='flex justify-center items-center rounded-3xl'>
        
    <div className='m-150 w-[99%] m-auto flex grid-cols-1 md: grid-cols-2 bg-white rounded-sm shadow-xl '>
        <div className='max-w-2xl mx-auto p-8 col-span-1'>
    <ul className='items-center md:float-left'>
        <li className='content flex flex-col items-center space-y-2'>

        <div className=' bg-gradient-to-tr from-yellow-400 to-orange-600 p-1 rounded-full'>
                <a className='block bg-white p-1 rounded-full hover:-rotate-6'>
                    <img className='h-24 w-24 rounded-full' src={about3} alt='/'/>
                </a>
            </div>
            <a className='text-black'>Oscar Martinez - Owner</a>
            </li>
            </ul>
            
            <p className='md:mt-7 mb-8 text-base indent-8 mt-4 text-gray-700 tracking-wider'>"My priority is to make sure my customers are satisfied with my work. I take pride in what I do and with every single project I make sure to give 110%"</p>
      
        </div>
            
            
        
    </div>
    </body></div>
   </div>
    );}

    export default Selects