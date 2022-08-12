import React, {useState, useContext} from 'react'
import { auth } from '../firebase-config'
import { SiteDataContext } from '../context/useSiteData'

const CartItemsCounter = () => {
    
    const {userData} = useContext(SiteDataContext)

    const currentUser = userData?.filter(user => user.id === auth.currentUser?.uid)
    const cartLength =  currentUser[0]?.currentItemsInCart
   

  return (
    <>
    <span style={{visibility: cartLength?.length === 0 && 'hidden'}} 
        className='absolute  top-6 -right-3 bg-orange-600 rounded-3xl w-6 text-center text-xl font-bold'>
            {cartLength !== undefined && cartLength.length}
    </span>
    </>
  )
}

export default CartItemsCounter