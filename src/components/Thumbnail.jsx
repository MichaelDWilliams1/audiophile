import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { SiteDataContext } from '../context/useSiteData'

const Thumbnail = () => {

    const { siteData } = useContext(SiteDataContext)
    

  return (
    <section className='flex justify-center items-center w-full lg:h-4/5 md:h-3/5 mb-8 md:mb-0'>
<div className='flex flex-col md:flex-row h-auto md:h-3/6 w-11/12 lg:w-9/12'>
    <div className='relative flex align-end h-40 md:h-auto  md:w-2/6 mt-10 md:mt-0'>
        <img className='h-5/6  w-full absolute object-scale-down' src={`${siteData[0]?.home[1].markTwoThumbnail}`}  />
        <div className='flex flex-col justify-end  self-end w-full h-3/4 mr-2 bg-gray-300'>
            <div className=' flex flex-col justify-evenly h-3/6 w-2/4 ml-auto  mr-auto text-center z-10'>
                <p className='font-bold text-lg'>Headphones</p>
               <Link to='/headphonesproductpage'><button className=' font-bold text-sm text-gray-700 hover:text-orange-500'>Shop <i class="uil uil-angle-right-b"></i></button></Link> 
            </div>
        </div>
    </div>
    <div className='relative flex w-auto md:w-2/6 h-40 md:h-auto mt-10 md:mt-0'>
        <img className='h-5/6 w-full absolute object-scale-down' src={`${siteData[0]?.home[1].zx9Thumbnail}`} />
     
        <div className='flex flex-col justify-end self-end w-full h-3/4 ml-2 mr-2 bg-gray-300'>
        <div className=' flex flex-col justify-evenly h-3/6 w-2/4 ml-auto mr-auto text-center  z-10'>
                <p className='font-bold text-lg'>Speakers</p>
               <Link to='/speakerproductpage'><button className='font-bold text-sm text-gray-700 hover:text-orange-500'>Shop <i class="uil uil-angle-right-b"></i></button></Link> 
            </div>
        </div>
    </div>
    <div className='relative flex w-auto md:w-2/6 mt-10 md:mt-0 h-40 md:h-auto'>
        <img className='h-5/6  w-full absolute object-scale-down' src={`${siteData[0]?.home[1].yx1Thumbnail}`} />
        <div className='flex flex-col justify-end border-2 border-black-400 self-end w-full h-3/4 ml-2 bg-gray-300'>
       <div className=' flex flex-col justify-evenly h-3/6 w-2/4 ml-auto mr-auto text-center z-10'>
                <p className='font-bold text-lg'>Earbuds</p>
                <Link to='/earphoneproductpage'><button className='font-bold text-sm text-gray-700 w-full cursor-pointer hover:text-orange-500 '>
                    Shop
                    <i class="uil uil-angle-right-b"></i></button></Link>
            </div>
        </div>
    </div>
</div>

    </section>
  )
}

export default Thumbnail