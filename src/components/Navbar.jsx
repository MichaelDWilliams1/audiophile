import React, { useState, useEffect, useContext } from 'react'
import { SiteDataContext } from '../context/useSiteData'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import SignIn from '../pages/authentication/SignIn'
import { auth } from '../firebase-config'
import { motion } from 'framer-motion'
import CartItemsCounter from './CartItemsCounter'
import CheckoutPreview from '../pages/CheckoutPreview'

const Navbar = () => {
  const [modalSignIn, setModalSignIn] = useState(false)
  const [canScroll, setCanScroll] = useState(true)
  const [modalItemsInCart, setModalItemsInCart] = useState(false)
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState('hidden')
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
  
const signInOrProfile = auth?.currentUser ? 'Logout' : 'Sign in'
const signInOrSignOutID = auth?.currentUser ? 'signout' : 'signin'

const openModalPopUp = (e) => {
  console.log(e.target.innerHTML)
  if(e.target.innerHTML) logout()
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

  const toggleMenu = () => {
    if(toggleHamburgerMenu === 'hidden'){
setToggleHamburgerMenu('visible')
    }

if(toggleHamburgerMenu === 'visible'){
  setToggleHamburgerMenu('hidden')
}
  }

  return (
    <>
    <div className='flex h-24  bg-neutral-900 text-white'>
     <div className='lg:hidden mt-10 ml-20'><i onClick={toggleMenu} className="uil uil-bars md:hover:text-orange-600"></i></div>
    <Link to='/'><div className='flex h-1/2  w-auto mt-7 ml-40 md:ml-10 text-2xl font-bold items-center hover:text-orange-600'>audiophile</div></Link>
        <nav className='flex w-auto h-1/2 m-auto mt-7'>
            <div className='lg:flex lg:w-3/6 sm:hidden lg:visible' >
                <ul className='flex items-center space-x-16'>
                    <Link className='hover:text-orange-600' to='/' ><li className='focus:text-orange-600'>HOME</li></Link>
                    <Link className='hover:text-orange-600' to='/headphonesproductpage'><li>HEADPHONES</li></Link>
                    <Link className='hover:text-orange-600' to='/speakerproductpage'><li>SPEAKERS</li></Link>
                    <Link className='hover:text-orange-600' to='/earphoneproductpage'><li>EARPHONES</li></Link>
                </ul>
            </div>
            <div className='flex justify-end items-center w-1/6'></div>

            <div className=''></div>
        </nav>
        <motion.nav animate={{width: '200'}}   className='flex h-1/2 m-auto mt-7 absolute top-14 w-60'>
            <div className={`flex lg:w-3/6 lg:hidden ${toggleHamburgerMenu} w-60`} >
                <ul className='flex flex-col items-center space-y-1  w-60 mt-3'>
                    <Link className='hover:text-orange-600 hover:bg-white bg-orange-600 w-60 h-10 rounded-md flex justify-center items-center' to='/' ><li className='focus:text-orange-600'>HOME</li></Link>
                    <Link className='hover:text-orange-600 hover:bg-white bg-orange-600 w-60 h-10 rounded-md flex justify-center items-center' to='/headphonesproductpage'><li>HEADPHONES</li></Link>
                    <Link className='hover:text-orange-600 hover:bg-white bg-orange-600 w-60 h-10 rounded-md flex justify-center items-center' to='/speakerproductpage'><li>SPEAKERS</li></Link>
                    <Link className='hover:text-orange-600 hover:bg-white bg-orange-600 w-60 h-10 rounded-md flex justify-center items-center' to='/earphoneproductpage'><li>EARPHONES</li></Link>
                </ul>
            </div>
            <div className='flex justify-end items-center w-1/6'></div>

            <div className=''></div>
        </motion.nav>
        <div id={signInOrSignOutID} onClick={(e) => openModalPopUp(e)}
            className='bg-orange-600 rounded-lg w-24 h-2/5 mt-7 flex justify-center items-center cursor-pointer hover:bg-orange-500'>
              {signInOrProfile}
          </div> 
        <i onClick={modalCartPopUpOpen} className="text-4xl ml-10 mt-7 mr-28 uil uil-shopping-cart relative hover:text-orange-600"><CartItemsCounter /></i>
       
        {modalSignIn && <SignIn modalPopUp={modalPopUp} />}
        {modalItemsInCart && <CheckoutPreview modalCartPopUpClose={modalCartPopUpClose} />}
    </div>
   
    </>
  )
}

export default Navbar


