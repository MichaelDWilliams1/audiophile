import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col h-24  bg-neutral-900 text-white'>
        <nav className='flex  w-5/6 h-1/2 m-auto space-x-40 '>
            <div className='flex w-1/6  text-2xl font-bold items-center'>audiophile</div>
            <div className='flex w-3/6 ' >
                <ul className='flex items-center space-x-16'>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
            </div>
        <div className='flex justify-end items-center text-4xl  w-1/6'><i class="uil uil-shopping-cart"></i></div>
       
        </nav>
        
    </div>
  )
}

export default Navbar


