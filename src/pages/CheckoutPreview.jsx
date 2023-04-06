import React, {useContext} from 'react'
import { SiteDataContext } from '../context/useSiteData'
import { auth } from '../firebase-config'
import CartItems from '../components/CartItems'
import Spinner from '../components/Spinner'

const CheckoutPreview = ({modalCartPopUpClose}) => {

    const {userData, loading} = useContext(SiteDataContext)

    const currentUser = userData.filter(user => user.id === auth.currentUser?.uid)
  return (
    <>
    {loading ?  <div className="align h-screen"> <Spinner /> </div> :
    <section className='absolute ht-screen w-screen flex  bg-zinc-900/90'>
    <div id='closeModal' onClick={(e)=>modalCartPopUpClose(e)} className='h-screen w-screen flex lg:justify-end justify-center items-center lg:items-start'>
      <div className='lg:h-4/6 lg:w-3/12 md:h-3/5 w-11/12 md:w-2/4 flex rounded-lg overflow-scroll h-3/4 bg-white mt-5 md:mt-24 lg:mr-40'>
        <CartItems currentUser={currentUser} />
        </div>
    </div>
</section> }
        </>
  )
}

export default CheckoutPreview