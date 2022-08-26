import { createContext, useState, useEffect } from "react";
import { db, auth } from "../firebase-config";
import {
  getDocs,
  collection,
  setDoc,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteField,
  arrayUnion,
  arrayRemove
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { FirebaseError } from "firebase/app";

const SiteDataContext = createContext();

const SiteDataProvider = ({ children }) => {
  //hold all of the product data from the server
  const [siteData, setSiteData] = useState([]);
  //cart state 
  const [inCartCount, setInCartCount] = useState(0)
  const [itemsInCart, setItemsInCart] = useState([])
  const [userData, setUserData] = useState([])
  const [change, setChange] = useState(false)
  const siteCollectionRef = collection(db, "product");
  const userCollectionRef = collection(db, 'users')

  const navigate = useNavigate();

  //retrieving product data upon loading page.
  useEffect(() => {
    const getSiteData = async () => {
      try {
        const data = await getDocs(siteCollectionRef);
        setSiteData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (e) {
        alert("Something went wrong"); 
      }
    };
    getSiteData();
  }, []);


  useEffect(()=>{
    const grabUsersData = async () => {
     
  try{
  const data = await getDocs(userCollectionRef);
  setUserData(
    data.docs.map((doc)=>({ ...doc.data(), id: doc.id}))
  )
  
  }catch(e){
  alert('Error getting user data')
  }
    }
    grabUsersData()
  }, [change])


  const newUserRegistation = async (e, name, email, password) => {
    e.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;

      updateProfile(auth.currentUser, {
        displayName: name,
        emailAddress: email,
      });

      await setDoc(doc(db, "users", user.uid), {
        displayName: name,
        emailAdress: email,
      });

      window.location.reload();
    } catch (e) {
      alert(e.message);
    }
  };

  const login = async (e, email, password) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        window.location.reload();
        setChange(prev => !prev)
      }
    } catch (error) {
      alert(error.message);
    }
    
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

//The section below will be all about adding items to the cart. 
// ~Come back and save cart items to server~
const addToCart = async(amount, ...item) => {
  console.log('came')
    if(auth.currentUser === null){
        alert('You must be signed in to add to cart')
        return
    }
  
    try{
      const userRef = doc(db, "users", auth.currentUser.uid);
    
      await updateDoc(userRef, {
        currentItemsInCart: arrayUnion({
        name: item[0].name,
        price: item[0].price,
        image: item[0].image.desktop,
        amount: amount,
        id: item[0].id
        })})
        setChange(prev => !prev)
    
    }catch(e){
      alert(e.message)
    }
  }

  const updateItemCount = async(e, index, name, price, image, amount, id) => {
    if(e.target.id === 'minus'){
      if(amount === 1)return
      amount = amount - 1
    }else if (e.target.id === 'add'){
      amount = amount + 1
    }
 
    try{
      const userRef = doc(db, "users", auth.currentUser.uid)
       const docSnap = await getDoc(userRef)


       await updateDoc(userRef, {
        currentItemsInCart: arrayRemove(docSnap.data().currentItemsInCart[index])
     })
  
        await updateDoc(userRef, {
         currentItemsInCart: arrayUnion({
          name: name,
        price: price,
        image: image,
        amount: amount,
        id: id
         })
      })
 
      setChange(prev => !prev)
     }catch(error){
      alert(error.message)
     }

  }

  const removeFromCart = async(e, index) => {
    if(e.target.id !== 'trash') return

    try{
     const userRef = doc(db, "users", auth.currentUser.uid)
      const docSnap = await getDoc(userRef)
 
       await updateDoc(userRef, {
        currentItemsInCart: arrayRemove(docSnap.data().currentItemsInCart[index])
     })

     setChange(prev => !prev)
    }catch(error){
     alert(error.message)
    }
  }

  const removeAllFromCart = async() => {

   try{
    const userRef = doc(db, "users", auth.currentUser.uid)

    await updateDoc(userRef, {
      currentItemsInCart: deleteField()
    })
   setChange(prev => !prev)
   }catch(e){
    alert(e.message)
   }
  }

  return (
    <SiteDataContext.Provider
      value={{ siteData, newUserRegistation, logout, login, addToCart, updateItemCount, removeFromCart, removeAllFromCart, itemsInCart, userData, setChange }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export { SiteDataProvider, SiteDataContext };
