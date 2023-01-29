import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import logo2 from '../assets/logo2.jpg'

const TopBar = () => {
    return(
        <div className='flex justify-between items-center px-4 py-1'>
            <div className='flex items-center'>
                {/*<BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
                <img src={logo2} className='h-20 w-69'/>*/}
                <h1 className='text-xl font-bold bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600 inline-block text-transparent bg-clip-text'>FlowPaintLLC</h1>
            </div>
            <div className='flex'>
                <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>24/7</p>
                </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <a href="tel:3365126461" className='text-sm text-gray-700'>336-512-6461</a>
            </div>
            
                <a href='#contact'>
            <button className='rounded-sm bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600'>Contact Us</button>
            </a>
            
            </div>
            </div>
    )
}

export default TopBar