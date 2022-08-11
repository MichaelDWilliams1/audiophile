import React, {useContext} from 'react'
import { SiteDataContext } from '../../context/useSiteData'
import { auth } from '../../firebase-config'


const Profile = () => {
    
    const {logout} = useContext(SiteDataContext)
    console.log(auth.currentUser.email)

  return (
   <section className=' h-screen min-h-fit'>
  <li className='flex justify-end space-x-9 w-full mt-5 pr-10'>
    <ul className='hover:text-orange-500 cursor-pointer'>Recent Orders</ul>
    <ul className='hover:text-orange-500 cursor-pointer'>Wish List</ul>
    <ul onClick={logout} className='hover:bg-orange-400 cursor-pointer bg-orange-500 text-white w-20 text-center rounded-md'>Sign Out</ul>
  </li>
  
  <section className=' h-1/2 w-full mt-5'>
  <hr className='w-9/12 ml-auto mr-auto border-1 border-zinc-500'></hr>
    <div className='w-9/12 m-auto h-full flex flex-col mt-5'>
    <h1 className='text-4xl text-center'>{`${auth.currentUser?.displayName}'s`}</h1>
{/* map recent orders here */}
    </div>
  </section>
  <section className=' h-1/2 w-full'>
  <hr className='w-9/12 ml-auto mr-auto border-1 border-zinc-500'></hr>
    <div className='w-9/12 m-auto h-full flex flex-col'>
    <h1 className='text-4xl text-center'>{`${auth.currentUser?.displayName}'s Wish List`}</h1>
    {/* map wish list here */}
    </div>
  </section>
  
   </section>
  )
}

export default Profile