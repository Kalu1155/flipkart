import React from 'react'
import '../Styles/Style.scss'
import img from '../www.flipkart.com-1711445631140/-original-imagbwf3wvhzfh5z_3.jpeg'
const Card1 = () => {
  // const [productname, setProductname] = useState("LEWEL Men Checkered Casual Green,Black Shirt")
  // const [delivery, setDelivery] = useState('Mon Apr 1')
  // setDelivery ()
  return (
    <>
      <div className=" justify-content-start align-items-center vh-100 w-75 me-4 mt-5">
    <div className="w-100 border bg-white shadow ps-4 pe-4 pt-2 pb-2 ms-5 me-4 mt-3  rounded-1">
      <div className="flex justify-content-between">
      <p>From Saved Addresses</p> <button className='btn b border text-primary'>Enter Delivery Pincode</button>
      </div>
    </div>
        <div className="w-100 border bg-white shadow ms-5 me-4 mt-3 mb-5 rounded-1">
       <div className="cart">
       <div className="main d-flex justify-content-around">
       <div className="">
          <img src={img} alt="" />
        </div>
    <div className="product-details">
      <p><b>LEWEL Men Checkered Casual Green,Black Shirt</b></p>
      <p>size</p>
      <span className='d-flex'>
      <p className='text-decoration-line-through text-body-tertiary'>$1999</p>
      <p className='ms-3'><b>$369</b></p>
      <p className='ms-3 text-success'>81% off 2 offers applied</p>
      </span>
    </div>
    <div className="">
      <p>Delivery by Mon Apr 1</p>
    </div>
        
       </div>
       <div className="creament d-flex mx-4">
        <button className='btn'>➖</button>
        <div className="num">
          1
        </div>
        <button className='btn'>➕</button>
       </div>
       </div>
        <div className="orderbtn w-100 border bg-white shadow-lg p-3">
          <button className='btn btn-lg rounded-1'>PLACE ORDER</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Card1
