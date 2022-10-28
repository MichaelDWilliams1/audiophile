import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className='flex h-auto w-full bg-neutral-900'>
    <div className='hidden lg:flex w-5/6 h-5/6 m-auto'>
        <div className=' flex h-full w-2/4'>
            <div className='flex flex-col w-5/6 justify-between h-5/6 m-auto '>
                <Link to='/'><div className='text-zinc-200 text-lg font-bold hover:text-orange-600'>audiophile</div></Link>
                <p className='text-zinc-500 text-base'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <p className='text-zinc-500 text-base'>Copyright 2021. All Rights Reserved</p>
            </div>
        </div>
        <div className=' flex h-full w-2/4'>
        <div className=' w-5/6 h-5/6 m-auto'>
            <div className=' h-1/4 flex'>
                <ul className='flex w-full justify-between  text-zinc-200'>
                    <Link className='hover:text-orange-600' to='/'><li>HOME</li></Link>
                    <Link className='hover:text-orange-600' to='/headphonesproductpage'><li>HEADPHONES</li></Link>
                    <Link className='hover:text-orange-600' to='/speakerproductpage'><li>SPEAKERS</li></Link>
                    <Link className='hover:text-orange-600' to='/earphoneproductpage'><li>EARPHONES</li></Link>
                </ul>
            </div>
            <div className=' flex justify-end items-center h-3/4'>
                <div className='text-zinc-200 flex justify-between text-lg w-2/12 '>
                <i class="uil uil-facebook"></i>
                <i class="uil uil-twitter"></i>
                <i class="uil uil-instagram"></i>
                </div>
            </div>
        </div>
        </div>
    </div>

    <div className='flex flex-col lg:hidden w-5/6 h-1/5 mt-9 ml-10'>
        <div className=' flex h-full w-2/4'>
            <div className='flex flex-col w-5/6 justify-between h-5/6'>
                <Link to='/'><div className='text-zinc-200 text-4xl font-bold hover:text-orange-600'>audiophile</div></Link>
                
            </div>
        </div>
            <div className='mt-12 w-5/6'>
             <ul className='flex w-full justify-between  text-zinc-200'>
                    <Link className='hover:text-orange-600' to='/'><li>HOME</li></Link>
                    <Link className='hover:text-orange-600' to='/headphonesproductpage'><li>HEADPHONES</li></Link>
                    <Link className='hover:text-orange-600' to='/speakerproductpage'><li>SPEAKERS</li></Link>
                    <Link className='hover:text-orange-600' to='/earphoneproductpage'><li>EARPHONES</li></Link>
                </ul>
            </div>   
            <div className='w-9/11 mt-10'>
                <p className='text-zinc-500 text-base'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                
            </div>
            <div className='flex mt-20 mb-10 w-auto '>
                <div className=' w-1/2'><p className='text-zinc-500 text-base'>Copyright 2021. All Rights Reserved</p></div>
                <div className='text-zinc-200 flex justify-end space-x-4 text-lg w-1/2 '>
                <i class="uil uil-facebook"></i>
                <i class="uil uil-twitter"></i>
                <i class="uil uil-instagram"></i>
                </div>
            </div>
    </div>
    
   </footer>
  )
}

export default Footer