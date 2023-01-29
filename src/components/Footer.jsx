import React from 'react'
import {BsChatSquareDots} from 'react-icons/bs'
import logo from '../assets/logo.jpg'
import {SiThumbtack} from 'react-icons/si'
import{
    FaFacebookF,
    FaTiktok,
    FaGooglePlusG,
    FaInstagram,
    FaBars,
} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className='max-w-[1140px] w-full py-4 m-auto px-4 border-t-4'>
<div className='flex flex-row m-auto justify-between'>
    {/*<BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
    <h1 className='text-xl font-bold text-gray-700'>FlowPaintsLLC</h1>*/}
   <img src={logo} alt='/' className='h-20 w-69'/> 
    <div className='flex flex-col justify-between'>
   <div className='flex flex-row text-gray-700 justify-center'>

    <a target='_blank' href='https://www.facebook.com/flowpaints'><FaFacebookF className=''/></a>
            <a target='_blank' href='https://www.thumbtack.com/nc/burlington/interior-painting/flowpaint-llc/service/424719051419484162'><SiThumbtack className='mx-2 md:mx-9'/></a>
            <a target='_blank' href='https://www.thumbtack.com/nc/burlington/interior-painting/flowpaint-llc/service/424719051419484162'><FaTiktok className=''/></a>   
            
    </div>
    
    
   
        <a className='text-gray-700 text-center font-normal text-sm font-sans' href='/policy'>Privacy Policy</a>
        
     </div>
</div>
        </div>
    )
}

export default Footer
