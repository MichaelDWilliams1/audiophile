import React, { useContext } from 'react'
import { SiteDataContext } from '../context/useSiteData'
import { Link } from 'react-router-dom'

const Header = () => {

const {siteData} = useContext(SiteDataContext)

  
  return (
    <div className='headerBackground bg-neutral-900 text-gray-50 h-5/6 w-729px'>
        <hr className=' w-10/12 ml-auto mr-auto border-1 border-white-500'></hr>
        <header className='flex md:justify-center md:items-center md:w-full m-auto w-5/6 min-h-full h-full'>
<div className='h-82 flex md:items-center md:justify-center md:h-full'>
    <div className='background flex flex-col justify-between md:justify-around   h-3/4 md:h-2/4 w-5/6 m-auto mt-20 md:m-auto'>
       <section className='flex '><div className='w-16 text-zinc-500 md:w-5/12  md:flex md:justify-end md:ml-4 md:mr-4'>N E W</div><div className='text-zinc-500' >P R O D U C T</div></section> 
        <section className='flex flex-col'>
        <div className='text-6xl  md:text-center'>XX99 MARK II</div>
        <div className='text-6xl md:text-center'>HEADPHONES</div>
        </section>
        <section className='text-lg flex-wrap w-5/6 font-medium text-zinc-400 md:text-center md:w-3/4 md:ml-auto md:mr-auto'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</section>
       <Link to={`/item/${siteData[0]?.product[3].slug}`}><button className=' w-2/6 h-20 bg-orange-600 hover:bg-orange-500 ml-60 mr-60'>SEE PRODUCT</button></Link>
    </div>
</div>
<div className='h-82 w-2/4 md:h-0 md:w-0'></div>
        </header>
    </div>
  )
}

export default Header