import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import EarphoneProduct from './pages/EarphoneProduct';
import HeadphonesProduct from './pages/HeadphonesProduct'
import SpeakersProduct from './pages/SpeakersProduct'
import MarkII from './pages/headphones/MarkII'
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
      </Routes>
      
<Footer />
    </div>
  );
}

export default App;
