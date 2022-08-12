import { createContext, useState, useEffect } from "react";
import { db, auth } from "../firebase-config";
import {
  getDocs,
  collection,
  setDoc,
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
  getDoc,
  query,
  where
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
      toast.e("Something went wrong with regristration");
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
      alert("error");
    }
    
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

//The section below will be all about adding items to the cart. 
// ~Come back and save cart items to server~
const addToCart = async(...item) => {
  console.log(item)
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
        image: item[0].image.desktop
        //add nanoid here
        })})
        setChange(prev => !prev)
    
    }catch(e){
      alert('error')
    }
  }

/*
Every item needs a unique id for creation and delete.
~ need to make functional buttons so that the user can add more than one of the same item. 
    It should also allow the user to decrement amount in the cart
~ Need to make a delete item completly from cart function. This means removing from the server.
~ Once the above is done begin making the checkout page.
*/


  return (
    <SiteDataContext.Provider
      value={{ siteData, newUserRegistation, logout, login, addToCart, itemsInCart, userData }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export { SiteDataProvider, SiteDataContext };
