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

  const siteCollectionRef = collection(db, "product");

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

  onAuthStateChanged(auth, (currentUser) => {
    // if (userName === currentUser?.displayName) return;
    // if (currentUser) {
    //   setUserName(currentUser.displayName);
    //   setUserEmail(currentUser.email);
    // }
  });

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
const addToCart = (item) => {
    if(auth.currentUser === null){
        alert('You must be signed in to add to cart')
    }
console.log(item)
setInCartCount(prev => prev + 1)
setItemsInCart(prev => [...prev, item])
}

console.log(itemsInCart)

  return (
    <SiteDataContext.Provider
      value={{ siteData, newUserRegistation, logout, login, addToCart, inCartCount, itemsInCart }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export { SiteDataProvider, SiteDataContext };
