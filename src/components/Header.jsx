import React from 'react'

const Header = () => {

  return (
    <div className='bg-neutral-900 text-gray-50 h-5/6 w-729px'>
        <hr className='w-10/12 ml-auto mr-auto border-1 border-white-500'></hr>
        <header className='flex m-auto w-5/6 min-h-full'>
<div className='h-82 w-2/4 '>
    <div className=' flex flex-col justify-between  h-3/4 w-5/6 m-auto mt-20'>
       <section className='flex'><div className='w-16 text-zinc-500'>N E W</div><div className='text-zinc-500' >P R O D U C T</div></section> 
        <section className='flex flex-col'>
        <div className='text-6xl'>XX99 MARK II</div>
        <div className='text-6xl'>HEADPHONES</div>
        </section>
        <section className='text-lg flex-wrap w-5/6 font-medium text-zinc-400'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</section>
        <button className=' w-2/6 h-20 bg-orange-600'>SEE PRODUCT</button>
    </div>
    <div>
    </div>
</div>
<div className='h-82 w-2/4'>right</div>
        </header>
    </div>
  )
}

export default Header