import React, {useContext} from 'react'
import { SiteDataContext } from '../context/useSiteData'
import { auth } from '../firebase-config'
import CartItems from '../components/CartItems'

const CheckoutPreview = ({modalCartPopUpClose}) => {

    const {userData} = useContext(SiteDataContext)

    const currentUser = userData.filter(user => user.id === auth.currentUser?.uid)

  return (
    <>
    <section className='absolute ht-screen w-screen flex  bg-zinc-900/90'>
                <div id='closeModal' onClick={(e)=>modalCartPopUpClose(e)} className='border-2 border-red-600 h-screen w-screen flex justify-end'>
                  <div className='h-4/6 w-80 flex rounded-lg bg-white mt-24 mr-40'>
                    <CartItems currentUser={currentUser} />
                    </div>
                </div>
        </section>
        </>
  )
}

export default CheckoutPreview