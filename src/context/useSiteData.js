import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { createContext } from 'react';


const SiteDataContext = createContext();
  
  const SiteDataProvider = ({ children }) => {
    const [siteData, setSiteData] = useState([])
   
    const siteCollectionRef = collection(db, 'product')

    useEffect(()=>{
        const getSiteData = async() => {
            try{
                const data = await getDocs(siteCollectionRef)
                setSiteData(data.docs.map(doc => ({...doc.data(), id: doc.id})))
            }
            catch(e){
alert('some shit went wrong homie')
            }
        }
getSiteData()
    }, [])
   

    return(
        <SiteDataContext.Provider value={{ siteData }}>
            {children}
        </SiteDataContext.Provider>
    )

  };

  
  export { SiteDataProvider, SiteDataContext };