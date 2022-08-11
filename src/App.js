import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import EarphoneProduct from './pages/EarphoneProduct';
import HeadphonesProduct from './pages/HeadphonesProduct'
import SpeakersProduct from './pages/SpeakersProduct'
import MarkII from './pages/headphones/MarkII'
import MarkI from './pages/headphones/MarkI'
import Xx59 from './pages/headphones/Xx59'
import GoToTop from './assets/GoToTop'
import Zx9 from './pages/speakers/Zx9'
import Zx7 from './pages/speakers/Zx7'
import Yx1 from './pages/earphones/Yx1'
import Profile from './pages/ProfilePages/Profile'
// import SignIn from './pages/authentication/SignIn'

function App() {
  return (
    <div className="align h-screen">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/earphoneproductpage' element={<EarphoneProduct />}></Route>
        <Route path='/headphonesproductpage' element={<HeadphonesProduct />}></Route>
        <Route path='/speakerproductpage' element={<SpeakersProduct />}></Route>
        <Route path='/xx99m2' element={<MarkII />}></Route>
        <Route path='/xx99m1' element={<MarkI />}></Route>
        <Route path='/xx59' element={<Xx59 />}></Route>
        <Route path='/zx9' element={<Zx9 />}></Route>
        <Route path='/zx7' element={<Zx7 />}></Route>
        <Route path='/yx1' element={<Yx1 />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        {/* <Route path='/signinpage' element={<SignIn />}></Route> */}
      </Routes>
      <GoToTop />
      
<Footer />
    </div>
  );
}

export default App;
