import { createContext, useState, useEffect } from 'react';
import { db } from '../firebase-config'
import {
     getDocs,
     collection,
     setDoc,
     doc,
     addDoc,
     updateDoc,
     arrayUnion
    } from 'firebase/firestore'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    getAuth,
    onAuthStateChanged
} from 'firebase/auth'



const SiteDataContext = createContext();
  
  const SiteDataProvider = ({ children }) => {
    //hold all of the product data from the server
    const [siteData, setSiteData] = useState([])
   
    const siteCollectionRef = collection(db, 'product')

    //retrieving product data upon loading page. 
    useEffect(()=>{
        const getSiteData = async() => {
            try{
                const data = await getDocs(siteCollectionRef)
                setSiteData(data.docs.map(doc => ({...doc.data(), id: doc.id})))
            }
            catch(e){
alert('Something went wrong')
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