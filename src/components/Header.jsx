import React, { useContext } from 'react'
import { SiteDataContext } from '../context/useSiteData'
import { Link } from 'react-router-dom'

const Header = () => {

const {siteData} = useContext(SiteDataContext)

  
  return (
    <div className='headerBackground bg-neutral-900 text-gray-50 h-full md:h-5/6'>
        <hr className=' w-10/12 ml-auto mr-auto border-1 border-white-500'></hr>
        <header className='flex w-full md:justify-center lg:justify-start md:items-center md:w-full h-full'>
<div className='h-82 flex md:items-center md:justify-center md:h-full'>
    <div className='background flex flex-col justify-evenly md:justify-around h-full md:h-2/4 md:w-5/6 md:m-auto '>
       <section className='lg:ml-10 flex md:mr-16 md:justify-start w-full'>
        <div className='w-1/2 pr-3 text-zinc-500 md:w-2/4 lg:w-auto md:flex md:justify-end lg:justify-start md:ml-4 md:mr-4 flex justify-end md:pr-0'>N E W</div>
        <div className='text-zinc-500 w-1/2 mr-6' >P R O D U C T</div>
        </section> 
        <section className='lg:ml-10 flex flex-col md:w-4/5 w-screen'>
        <div className='md:text-6xl text-4xl text-center md:text-center lg:text-left'>XX99 MARK II</div>
        <div className='text-4xl text-center md:text-6xl md:text-center lg:text-left'>HEADPHONES</div>
        </section>
        <section className='lg:ml-10 ml-auto mr-auto text-base md:text-lg flex-wrap w-5/6 md:font-medium text-zinc-400 text-center lg:text-left md:w-3/4'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</section>
       <Link className='ml-auto mr-auto border-2 w-60 flex lg:ml-10 items-start' to={`/item/${siteData[0]?.product[3].slug}`}>
        <button className='w-full h-20 bg-orange-600 hover:bg-orange-500'>SEE PRODUCT</button>
        </Link>
    </div>
</div>
<div className='h-82 w-2/4 md:h-0 md:w-0'></div>
        </header>
    </div>
  )
}

export default Header