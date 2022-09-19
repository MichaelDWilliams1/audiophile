import React, {useContext, useEffect, useState} from 'react'
import { SiteDataContext } from '../../context/useSiteData'
import { auth, db } from '../../firebase-config'
import { collection, getDocs, doc } from "firebase/firestore";

const Profile = () => {
    
    const {logout, siteData} = useContext(SiteDataContext)
    const userCollectionRef = collection(db, `users/${auth?.currentUser.uid}/payments`);
    const [recentPurchases, setrecentPurchases] = useState([])

    useEffect(() => {
      const grabUsersData = async () => {
        try {
          const data = await getDocs(userCollectionRef);
          setrecentPurchases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (e) {
          alert("Error getting user data");
        }
      };
      grabUsersData();
    }, []);

    console.log(recentPurchases[0]?.items[0].description)

    // const recentOrders = recentPurchases[0].items.map(item => 
    // <>
    // <div></div>
    // </>)

  return (
   <section className=' h-screen min-h-fit'>
  <li className='flex justify-end space-x-9 w-full mt-5 pr-10'>
    <ul className='hover:text-orange-500 cursor-pointer'>Wish List</ul>
    <ul onClick={logout} className='hover:bg-orange-400 cursor-pointer bg-orange-500 text-white w-20 text-center rounded-md'>Sign Out</ul>
  </li>
  
  <section className=' h-1/2 w-full'>
  <hr className='w-9/12 ml-auto mr-auto border-1 border-zinc-500'></hr>
    <div className='w-9/12 m-auto h-full flex flex-col'>
    <h1 className='text-4xl text-center'>{`${auth?.currentUser?.displayName}'s Wish List`}</h1>
    {/* map wish list here */}
    </div>
  </section>
  
   </section>
  )
}

export default Profile