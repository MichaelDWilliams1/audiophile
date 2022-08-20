import React, { useState, useEffect, useContext } from 'react'
import { SiteDataContext } from '../context/useSiteData'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import SignIn from '../pages/authentication/SignIn'
import { auth } from '../firebase-config'
import CartItemsCounter from './CartItemsCounter'
import CheckoutPreview from '../pages/CheckoutPreview'

const Navbar = () => {
  const [modalSignIn, setModalSignIn] = useState(false)
  const [canScroll, setCanScroll] = useState(true)
  const [modalItemsInCart, setModalItemsInCart] = useState(false)
const {logout} = useContext(SiteDataContext)

  useEffect(() => {
 const flipScroll = () => {
if(modalSignIn || modalItemsInCart){
  document.body.style.overflow = 'hidden'
}else{
  document.body.style.overflow = 'unset'
}
 }

 flipScroll()

  }, [canScroll])
  
const signInOrProfile = auth?.currentUser ? 'Profile' : 'Sign in'
const signInOrSignOutID = auth?.currentUser ? 'signout' : 'signin'

const openModalPopUp = (e) => {
  console.log(e.target.id)
  if(e.target.id === 'signout') return
  setModalSignIn(prev=> !prev)
  setCanScroll(prev => !prev)
}

  const modalPopUp = (e) => {

    if(e.target.id !== 'closeModal') return

    setModalSignIn(prev=>!prev)
    setCanScroll(prev => !prev)
  }

  const modalCartPopUpOpen =() => {
    setModalItemsInCart(prev => !prev)
    setCanScroll(prev => !prev)
  }

  const modalCartPopUpClose = (e) => {
      if(e.target.id !== 'closeModal') return

    setModalItemsInCart(prev => !prev)
    setCanScroll(prev => !prev)
  }

  return (
    <>
    <div className='flex flex-col h-24  bg-neutral-900 text-white'>
        <nav className='flex  w-5/6 h-1/2 m-auto space-x-40 '>
            <Link to='/'><div className='flex w-1/6  text-2xl font-bold items-center hover:text-orange-600'>audiophile</div></Link>
            <div className='flex w-3/6 ' >
                <ul className='flex items-center space-x-16'>
                    <Link className='hover:text-orange-600' to='/' ><li className='focus:text-orange-600'>HOME</li></Link>
                    <Link className='hover:text-orange-600' to='/headphonesproductpage'><li>HEADPHONES</li></Link>
                    <Link className='hover:text-orange-600' to='/speakerproductpage'><li>SPEAKERS</li></Link>
                    <Link className='hover:text-orange-600' to='/earphoneproductpage'><li>EARPHONES</li></Link>
                </ul>
            </div>
            <div className='flex justify-end items-center   w-1/6'>
        <Link className='w-full h-full flex justify-center items-center cursor-pointer' to={signInOrSignOutID === 'signout' && '/profile'}>
          <div id={signInOrSignOutID} onClick={(e) => openModalPopUp(e)}
            className='bg-orange-600 rounded-lg w-20 h-3/5 flex justify-center items-center cursor-pointer hover:bg-orange-500'>
              {signInOrProfile}
          </div> </Link>
        <i onClick={modalCartPopUpOpen} className="text-4xl ml-10 uil uil-shopping-cart relative hover:text-orange-600"><CartItemsCounter /></i>
        </div>
        </nav>
       
        {modalSignIn && <SignIn modalPopUp={modalPopUp} />}
        {modalItemsInCart && <CheckoutPreview modalCartPopUpClose={modalCartPopUpClose} />}
    </div>
   
    </>
  )
}

export default Navbar


