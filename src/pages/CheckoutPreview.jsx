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
                <div id='closeModal' onClick={(e)=>modalCartPopUpClose(e)} className=' h-screen w-screen flex lg:justify-end justify-center'>
                  <div className='lg:h-4/6 lg:w-3/12 h-3/5 w-2/4 flex rounded-lg overflow-scroll bg-white mt-24 lg:mr-40'>
                    <CartItems currentUser={currentUser} />
                    </div>
                </div>
        </section>
        </>
  )
}

export default CheckoutPreview