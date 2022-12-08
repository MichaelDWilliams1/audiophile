import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { SiteDataContext } from '../context/useSiteData'
import { auth } from '../firebase-config'
const PaySuccess = () => {

    const { removeAllFromCart } = useContext(SiteDataContext)
  
    useEffect(() => {
      const removeFromCart = () => {
         removeAllFromCart()
      }
      removeFromCart()
    }, []);
   
    console.log('here')

  return (
    <Link to='/paySuccess'><section>
     <article className=' h-screen w-screen flex justify-center'>
         <div className=' flex flex-col items-center justify-center w-1/2 h-1/2 mt-40 '>
       
                 <p className='text-4xl w-full text-center'>Thank you for your purchase!</p>
                 <p className='text-4xl w-full text-center'> Your payment was successful!</p>
                 <i className="uil uil-check-circle ml-2 text-8xl text-green-700"></i>
      
         </div>
     </article>

    </section></Link>
  )
}

export default PaySuccess