import React from 'react'
import Cartnav from '../Cartcards/Cartnav'
import Card1 from '../Cartcards/Card1'
import Card2 from '../Cartcards/Card2'
import '../Styles/Style.scss'
import Cartfooter from '../Footer/Cartfooter'

const Cart = () => {
  return (
    <>
    <Cartnav/>
   <div className="bg-light">
   <div className="flex">
      <Card1/>
      <Card2/>
      </div>
   <Cartfooter/>
   </div>
    </>
  )
}

export default Cart
