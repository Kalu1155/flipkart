import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Login";
import Cart from "./Component/Pages/Cart";
import Shop from "./Component/Pages/Shop";
import Create from "./Component/Pages/Create";
import Details from "./Component/Pages/Details";
import Loginmer from "./Merchant/Merlogin/Loginmer";
import Signinmer from "./Merchant/Mersignin/Signinmer";
import Merpage from "./Merchant/Merpage/Merpage";
import Merchantprofile from "./Display/Merchantdisplay/Merchantprofile";
import Createpro from "./Merchant/Merlogin/Createpro";

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Hmecard/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path="/merchantfrm" element={<Loginmer/>}/>
      <Route path="/signinmer" element={<Signinmer/>}/>
      <Route path="/merpage" element={<Merpage/>}/>
      <Route path="/merprofile" element={<Merchantprofile/>}/>
      <Route path="/createpro" element={<Createpro/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
