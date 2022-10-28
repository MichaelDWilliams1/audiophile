import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { SiteDataContext } from '../context/useSiteData'

const SeeProductHomePage = () => {
    const { siteData } = useContext(SiteDataContext)

  return (
    <>
    <section  className='flex flex-col h-4/6 w-full'>
        <div className='backgroundSvg bg-orange-500 flex flex-col lg:flex-row  w-5/6 lg:w-9/12 h-full m-auto mt-0 rounded-xl'>
            <div className='h-1/3 flex items-center md:items-end justify-center lg:justify-end  lg:h-full md:h-2/5 sm:h-1/3 lg:w-3/6 w-full'>
            <img className=' h-4/5 md:h-4/5 object-scale-down' src={`${siteData[0]?.home[2].seeProductZx9}`} />
            
            </div>
            <div className='flex h-full lg:w-3/6 w-full'>
                <div className='flex flex-col lg:flex-col justify-around w-5/6 md:w-3/5 h-4/6 m-auto mt-10 items-center lg:items-start lg:mt-auto space-y-5'>
                    <div>
                    <div className='text-slate-100 text-6xl text-center lg:text-left'>ZX9</div>
                    <div className='text-slate-100 text-6xl text-center lg:text-left'>Speaker</div>
                    </div>
                <div>
                    <p className='text-slate-100 text-center lg:text-left'>
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </p>
                </div>
                <Link to={`/item/${siteData[0]?.product[5].slug}`} className='w-2/4 lg:h-1/6'><button className='bg-black w-full lg:h-full h-16  text-slate-100 hover:bg-zinc-800'>SEE PRODUCT</button></Link>
                </div>
            </div>
        </div>
    </section>
    <section className='backgroundImage flex w-5/6 h-1/3 lg:h-3/6 lg:w-9/12  m-auto mt-12 rounded-xl'>
        <div className='h-full lg:w-1/3 w-1/2 flex flex-col justify-center items-end'>
            <div className='lg:w-3/4 w-full lg:h-2/6 h-2/5 flex flex-col items-center lg:items-start justify-between'>
                <p className='text-3xl font-bold'>ZX7 SPEAKER</p>
           <Link className='w-4/6 h-3/6' to={`/item/${siteData[0]?.product[4].slug}`}> <button className='lg:w-full w-full h-14 lg:h-full border-2 border-black text-black hover:bg-zinc-800'>SEE PRODUCT</button></Link>
            </div>
            
        </div>
        <div className='h-full w-1/2'></div>
    </section>
    <section className='flex lg:h-3/6 h-1/3 lg:w-9/12 w-5/6 m-auto mt-12 rounded-xl'>
      <div className='w-3/6 mr-10 rounded-xl'>
        <img className='h-full w-full rounded-xl hidden lg:block' src={`${siteData[0]?.home[2].seeProductYx1}`} />
        <img className='h-full w-full rounded-xl  lg:hidden' src='https://firebasestorage.googleapis.com/v0/b/audiophile-ecommerce-e6a79.appspot.com/o/assests%2Fhome%2Ftablet%2Fimage-earphones-yx1.jpg?alt=media&token=ebd71584-5856-4c66-b526-81cc3f39b94f' />
      </div>
      <div className='flex justify-center items-center w-3/6 bg-stone-200 rounded-xl'>
        <div className=' flex flex-col justify-between h-2/6 md:w-5/6 w-full lg:items-start'>
        <p className='text-3xl font-bold w-full border-2 border-black'>YX1 EARPHONES</p>
           <Link className='lg:w-3/6 w-full h-3/6 lg:block flex'  to={`/item/${siteData[0]?.product[0].slug}`}> <button className='lg:w-full w-3/4 h-14 lg:h-full border-2 border-black text-black hover:bg-zinc-800'>SEE PRODUCT</button></Link>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default SeeProductHomePage