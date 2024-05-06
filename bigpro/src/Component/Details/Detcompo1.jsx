import React from 'react'
import img from '../www.flipkart.com-1711445631140/22fddf3c7da4c4f4.png'
import { FaShoppingCart } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";

const Detcompo1 = () => {
  return (
    <>
      <div className="justify-content-center ">
        <div className="d-flex">
          <div className="smImg ">
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          </div>
          <div className="w-100 lgImg">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="btn d-flex">
          <button className='cartBtn'><FaShoppingCart/> ADD TO CART</button>
          <button className='buyBtn'><BsLightningFill/> BUY NOW</button>
        </div>
      </div>

    </>
  )
}

export default Detcompo1
