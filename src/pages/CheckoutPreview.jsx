import React, {useContext} from 'react'
import { SiteDataContext } from '../context/useSiteData'
const CheckoutPreview = ({modalCartPopUpClose}) => {

    const {itemsInCart, inCartCount} = useContext(SiteDataContext)
console.log(itemsInCart[0]?.image.desktop)
  return (
    <>
    <section className='absolute ht-screen w-screen flex  bg-zinc-900/90'>
                <div id='closeModal' onClick={(e)=>modalCartPopUpClose(e)} className='border-2 border-red-600 h-screen w-screen flex justify-end'>
                    <div className='h-4/6 w-3/12 flex rounded-lg bg-white mt-24 mr-40'>
                      <section className=' h-4/5 w-4/5 m-auto'>
                        <section className='flex justify-between  h-auto'>
                            <div className='text-black'>{`CART (${inCartCount})`}</div>
                            <div className='text-black'>Remove All</div>
                        </section>
                        <section className='flex mt-4 h-1/6 overflow-auto'>
                            <div className=' w-1/4'>
                                <img className='h-full w-full object-cover' src={itemsInCart[0]?.image.desktop} />
                            </div>
                            <div className='w-2/4 flex flex-col'>
                                <div className='text-black h-1/2 text-sm font-bold flex items-center pl-4'>{itemsInCart[0]?.name}</div>
                                <div className='text-black h-1/2 text-sm flex items-end pl-4'>{itemsInCart[0]?.price}</div>
                            </div>
                            <div className=' w-1/4'></div>
                        </section>
                        <section className='flex justify-between mt-4'>
                            <div className='text-black'>Total</div>
                            <div className='text-black'>$5,000</div>
                        </section>
                        <button className='bg-orange-600 w-full h-16 mt-4'>CHECKOUT</button>
                      </section>
                    </div>
                </div>
        </section>
        </>
  )
}

export default CheckoutPreview