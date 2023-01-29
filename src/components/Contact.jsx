import React from 'react'
import color from '../assets/color.jpg'
import logo2 from '../assets/logo2.jpg'

const Contact = () => {
    return(
        <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700'>Send us a message</h2>
            <p className='text-center text-gray-700 py-2'>We're standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img
                src={color}
                alt='/' 
                className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
               
                <form action="https://formsubmit.co/floww.paints@gmail.com" method="POST">
                    <div className='grid grid-cols-2'>
                        <input className='border m-2 p-2' type='text' name='First' placeholder='First' required/>
                        <input className='border m-2 p-2' type='text' name='Last' placeholder='Last' required/>
                        <input className='border m-2 p-2' type='email' name='Email' placeholder='Email' required/>
                        <input className='border m-2 p-2' type='tel' name='Phone' placeholder='Phone' required/>
                        <input className='border col-span-2 p-2 m-2' type='text' name='Address' placeholder='Address'/>
                        <textarea className='border col-span-2 m-2 p-2' name='Project&nbsp;details' cols='30' row='10' placeholder='Project Details' required></textarea>
                        <button className='col-span-2 m-2 bg-gradient-to-r from-indigo-600 via-violet-700 to-indigo-600 rounded-sm'>Submit</button>
                        <a className='p-2 text-gray-700 font-normal text-xs font-sans'>Powered by FormSubmit</a>

                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact