import React, {useState, useContext} from 'react'
import { SiteDataContext } from '../context/useSiteData'

const CartItemsCounter = () => {
    
    const {inCartCount} = useContext(SiteDataContext)

  return (
    <>
    <span style={{visibility: inCartCount === 0 && 'hidden'}} 
        className='absolute  top-6 -right-3 bg-orange-600 rounded-3xl w-6 text-center text-xl font-bold'>
            {inCartCount}
    </span>
    </>
  )
}

export default CartItemsCounter