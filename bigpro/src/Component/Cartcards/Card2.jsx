import React, { useState } from 'react'
import '../Styles/Style.scss'
import sheild from '../www.flipkart.com-1711445631140/shield' 

const Card2 = () => {
  const [item, setItem] = useState(1)
  const [amt, setamt] = useState(1999)
  let dic = (amt - 369)
  let total = (amt - dic)

  // setPrice(1)
  return (
    <>
    <div className="d-fex justify-content-end align-items-center bg- vh-100 w-50">
        <div className="w-auto border bg-white shadow ps-4 pe-4 pt-2 ms-5 me-4 mt-3  rounded-1 ">
          <h4 className='text-body-tertiary'>PRICE DETAILS</h4>
          <hr />
          <div className="cardflex">
            <p>Price({item}item)</p>
            <p>${amt}</p>
          </div>
          <div className="cardflex">
            <p>Discount</p>
            <p>${dic}</p>
          </div>
          <div className="cardflex">
            <p>Delivery Charges</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cardflex">
            <h4>Total Amount</h4>
            <h4>${total}</h4>
          </div>
          <hr />
          <p className='text-success'>You will save ${dic} on this order</p>
        </div>
      <div className="sheild d-flex  ps-4 pe-4 pt-2 pb-2 ms-5 me-4 mt-3 ">
        <img src={sheild} alt="shield" /><p className='text-body-tertiary'>Safe and Secure Payments.Easy returns.100% <br />Authentic products.</p>
      </div>
      </div>
      
    </>
  )
}

export default Card2
