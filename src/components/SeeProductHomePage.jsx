import React, {useContext} from 'react'
import { SiteDataContext } from '../context/useSiteData'

const SeeProductHomePage = () => {
    const { siteData } = useContext(SiteDataContext)

  return (
    <>
    <section  className='flex flex-col h-4/6 w-full'>
        <div className='backgroundSvg bg-orange-500 flex w-9/12 h-full m-auto mt-0 rounded-xl'>
            <div className=' flex items-end justify-end  h-full w-3/6'>
            <img className=' h-5/6 object-scale-down' src={`${siteData[0]?.home[2].seeProductZx9}`} />
            
            </div>
            <div className='flex h-full w-3/6'>
                <div className='flex flex-col justify-around w-4/6 h-4/6 m-auto '>
                    <div>
                    <div className='text-slate-100 text-6xl'>ZX9</div>
                    <div className='text-slate-100 text-6xl'>Speaker</div>
                    </div>
                <div>
                    <p className='text-slate-100'>
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </p>
                </div>
                <button className='bg-zinc-600 w-2/4 h-1/6 text-slate-100'>SEE PRODUCT</button>
                </div>
            </div>
        </div>
    </section>
    <section className='backgroundImage flex h-3/6 w-9/12 m-auto mt-12 rounded-xl'>
        <div className='h-full w-1/3 flex flex-col justify-center items-end'>
            <div className='w-3/4 h-2/6 flex flex-col justify-between'>
                <p className='text-3xl font-bold'>ZX7 SPEAKER</p>
            <button className='w-4/6 h-3/6 bg-black text-white'>SEE PRODUCT</button>
            </div>
            
        </div>
        <div className='h-full w-1/2'></div>
    </section>
    <section className='flex h-3/6 w-9/12 m-auto mt-12 rounded-xl'>
      <div className='border-2 border-green w-3/6 mr-10 rounded-xl'>
        <img className='h-full w-full rounded-xl' src={`${siteData[0]?.home[2].seeProductYx1}`} />
      </div>
      <div className='border-2 border-green flex justify-center items-center w-3/6 bg-stone-200 rounded-xl'>
        <div className=' flex flex-col justify-between h-2/6 w-3/4'>
        <p className='text-3xl font-bold'>YX1 EARPHONES</p>
            <button className='w-3/6 h-3/6 bg-black text-white'>SEE PRODUCT</button>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default SeeProductHomePage