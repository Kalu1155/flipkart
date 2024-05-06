import React from 'react'
import ShopCard1 from '../Shopcompo/ShopCard1'
import ShopCard2 from '../Shopcompo/ShopCard2'
import ShopCard3 from '../Shopcompo/ShopCard3'
import Written from '../written/Written'
const Shopremain = () => {
  return (
    <>
      <ShopCard1/>
      <div className="d-flex">
      <ShopCard2/>
      <ShopCard3/>
      </div>
      <Written/>
    </>
  )
}

export default Shopremain
