import React from 'react'

const Footer = () => {
  return (
   <footer className=' flex h-2/5 w-full bg-neutral-900'>
    <div className=' flex w-5/6 h-5/6 m-auto'>
        <div className=' flex h-full w-2/4'>
            <div className=' flex flex-col w-5/6 justify-between h-5/6 m-auto '>
                <div className='text-zinc-200 text-lg font-bold'>audiophile</div>
                <p className='text-zinc-500 text-base'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <p className='text-zinc-500 text-base'>Copyright 2021. All Rights Reserved</p>
            </div>
        </div>
        <div className=' flex h-full w-2/4'>
        <div className=' w-5/6 h-5/6 m-auto'>
            <div className=' h-1/4 flex'>
                <ul className='flex w-full justify-between  text-zinc-200'>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
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
   </footer>
  )
}

export default Footer