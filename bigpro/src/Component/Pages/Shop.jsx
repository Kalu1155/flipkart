import React from 'react'
import '../Styles/Style.scss'
import Loginav1 from '../Logincompo/Loginav1'
import Loginav2 from '../Logincompo/Loginav2'
import Shopremain from '../normals/Shopremain'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
const Shop = () => {
  return (
    <>
      <Loginav1/>
        <Loginav2/>
        <Shopremain/>
        <Link to='/details'>deatls</Link>
        <Footer/>
    </>
  )
}

export default Shop
