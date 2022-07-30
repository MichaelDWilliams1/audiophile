import React, {useContext} from 'react'
import { SiteDataContext } from '../context/useSiteData'

const Thumbnail = () => {

    const { siteData } = useContext(SiteDataContext)
    

  return (
    <section className='flex justify-center items-center w-full h-4/6'>
<div className='flex h-3/6 w-9/12 '>
    <div className='relative flex align-end w-2/6'>
        <img className='h-60 w-full absolute z-10 object-scale-down' src={`${siteData[0]?.home[1].markTwoThumbnail}`}  />
        <div className='flex flex-col justify-end  self-end w-full h-3/4 mr-2 bg-gray-300'>
            <div className=' flex flex-col justify-evenly h-3/6 w-2/4 ml-auto mr-auto text-center'>
                <p className='font-bold text-lg'>Headphones</p>
                <button className='font-bold text-sm text-gray-700 hover:text-orange-500'>Shop <i class="uil uil-angle-right-b"></i></button>
            </div>
        </div>
    </div>
    <div className='relative flex w-2/6'>
        <img className='h-60 w-full absolute z-10 object-scale-down' src={`${siteData[0]?.home[1].zx9Thumbnail}`} />
     
        <div className='flex flex-col justify-end self-end w-full h-3/4 ml-2 mr-2 bg-gray-300'>
        <div className=' flex flex-col justify-evenly h-3/6 w-2/4 ml-auto mr-auto text-center'>
                <p className='font-bold text-lg'>Headphones</p>
                <button className='font-bold text-sm text-gray-700 hover:text-orange-500'>Shop <i class="uil uil-angle-right-b"></i></button>
            </div>
        </div>
    </div>
    <div className='relative flex w-2/6'>
        <img className='h-60  w-full absolute z-10 object-scale-down' src={`${siteData[0]?.home[1].yx1Thumbnail}`} />
        <div className='flex flex-col justify-end border-2 border-black-400 self-end w-full h-3/4 ml-2 bg-gray-300'>
        <div className=' flex flex-col justify-evenly h-3/6 w-2/4 ml-auto mr-auto text-center'>
                <p className='font-bold text-lg'>Headphones</p>
                <button className='font-bold text-sm text-gray-700 hover:text-orange-500'>
                    Shop
                    <i class="uil uil-angle-right-b"></i></button>
            </div>
        </div>
    </div>
</div>

    </section>
  )
}

export default Thumbnail