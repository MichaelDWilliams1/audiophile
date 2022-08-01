import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../pages/authentication/SignIn'
const Navbar = () => {
  const [modalSignIn, setModalSignIn] = useState(false)
  const [canScroll, setCanScroll] = useState(true)
  useEffect(() => {
 const flipScroll = () => {
if(modalSignIn){
  document.body.style.overflow = 'hidden'
}else{
  document.body.style.overflow = 'unset'
}
 }

 flipScroll()

  }, [canScroll])
  

const openModalPopUp = () => {
  setModalSignIn(prev=> !prev)
  setCanScroll(prev => !prev)
}

  const modalPopUp = (e) => {
    console.log(e.target.id)
    if(e.target.id !== 'closeModal') return
    setModalSignIn(prev=>!prev)
    setCanScroll(prev => !prev)
  }

  return (
    <>
    <div className='flex flex-col h-24  bg-neutral-900 text-white'>
        <nav className='flex  w-5/6 h-1/2 m-auto space-x-40 '>
            <div className='flex w-1/6  text-2xl font-bold items-center'>audiophile</div>
            <div className='flex w-3/6 ' >
                <ul className='flex items-center space-x-16'>
                    <Link to='/'><li>HOME</li></Link>
                    <Link to='/headphonesproductpage'><li>HEADPHONES</li></Link>
                    <Link to='/speakerproductpage'><li>SPEAKERS</li></Link>
                    <Link to='/earphoneproductpage'><li>EARPHONES</li></Link>
                </ul>
            </div>
            <div className='flex justify-end items-center   w-1/6'>
        <div onClick={openModalPopUp} className='bg-orange-600 rounded-lg w-2/5 h-3/5 flex justify-center items-center cursor-pointer hover:bg-orange-500'>SIGN IN</div>
       
        <i className="text-4xl ml-10 uil uil-shopping-cart"></i>
        </div>
        </nav>
        {modalSignIn && <SignIn modalPopUp={modalPopUp} />}
    </div>
   
    </>
  )
}

export default Navbar


