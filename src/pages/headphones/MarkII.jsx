import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { SiteDataContext } from '../../context/useSiteData'

const MarkII = () => {
  const {siteData} = useContext(SiteDataContext)

  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1)
  }

  console.log(siteData)
  return (
    <>
   <section className='h-full w-full'>

    <div onClick={navigateBack} className='k w-9/12 h-1/6 flex items-center m-auto cursor-pointer'>Go back</div>

    <div className=" flex h-100 w-9/12 m-auto">
            <div className=" w-1/2 h-full">
                <img className="h-full w-full" src={siteData[0]?.product[3]?.image.desktop} />
            </div>
            <div className=" flex justify-end items-center w-1/2 h-100">
                <div className="flex flex-col justify-between h-4/6 w-5/6">
                    <div className="flex">
                    <div className='w-16 text-zinc-500'>N E W</div>
                    <div className='text-zinc-500' >P R O D U C T</div>
                    </div>
                    <div className="">
                        <div className="text-5xl">XX99 MARK II</div>
                        <div className="text-5xl">HEADPHONES</div>
                    </div>
                    <div>
                        <p className="text-md">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    </div>
                    <p className='font-bold'>{`$ ${siteData[0]?.product[3]?.price.toLocaleString()}`}</p>
                    <div className='flex'>
                      <div className='bg-gray-200 h-20 w-2/6 flex items-center text-center mr-10'>
                        {/* Need to add some state here */}
                        <div className='w-1/3'>-</div>
                        <div className='w-1/3'>1</div>
                        <div className='w-1/3'>+</div>
                      </div>
                    <button id={siteData[0]?.product[3]?.price} className="w-2/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200">ADD TO CART</button>
                    </div>
                </div>
           </div>
        </div>
   </section>
   <section className=' flex h-3/4'>
    <div className=' flex h-4/6 w-9/12 m-auto'>
        <div className=' flex flex-col justify-between w-4/6 h-full'>
          <div className='w-5/6 h-full flex flex-col justify-between'>
          <div className='text-5xl font-bold'>Features</div>
          <div className='leading-7'>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</div>
          <div className='leading-7'>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</div>
          </div>
        </div>
        <div className=' flex justify-end w-2/6 h-full'>
         <div className=' h-3/4 w-full'>
            <div className='text-5xl font-bold'>IN THE BOX</div>
            <div className=' h-full w-full mt-10 leading-10'>
              <tr>
                <td className='w-1/4 text-orange-600 font-bold'>1x</td>
                <td className='w-3/4'>Headphone Unit</td>
              </tr>
              <tr>
                <td className='w-1/4 text-orange-600 font-bold'>2x</td>
                <td className='w-3/4'>Replacement Earcups</td>
              </tr>
              <tr>
                <td className='w-1/4 text-orange-600 font-bold'>1x</td>
                <td className='w-3/4'>User Manual</td>
              </tr>
              <tr>
                <td className='w-1/4 text-orange-600 font-bold'>1x</td>
                <td className='w-3/4'>3.5mm 5m Audio Cable</td>
              </tr>
              <tr>
                <td className='w-1/4 text-orange-600 font-bold'>1x</td>
                <td className='w-3/4'>Travel Bag</td>
              </tr>
            </div>
         </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default MarkII
