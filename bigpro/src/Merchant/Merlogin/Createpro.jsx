import React, { useState } from 'react'
// import Mernav from '../Mercompo/Mernav'
// import useNavigate from 'react-router-dom'
import '../../Component/Styles/Style.scss'
import img from '../../Component/www.flipkart.com-1711445631140/-original-imagbwf3wvhzfh5z_5.jpeg'
import axios from 'axios';

const Createpro = () => {
const url = "http://ecommerce.reworkstaging.name.ng/v2";
const [merpro, setMerpro] = useState({
  title: "",
  descp: "",
  price: '',
  brand: '',
  quantity: '',
  images: '',
  currency: '',
  min_qty: '',
  max_qty: "",
  discount:"",
  discount_expiration:"",
  has_refund_policy:"",
  has_discount:"",
  has_shipment:"",
  has_variation:"",
  shipping_locations:"",
  attrib:""
});
// const [formError, setFormError] = useState({});

const handleProChange = (event) => {
  const { name, value } = event.target;
  setMerpro({ ...merpro, [name]: value });
};
const validateForm = () => {
// if (merpro.title ===''
//  || merpro.descp ==='' 
//  || merpro.price ==='' 
//  || merpro.brand ==='' 
//  || merpro.quantity ===''
// //  || merpro.images ===''
// //  || merpro.currency ===''
//  || merpro.min_qty ===''
//  || merpro.max_qty ===''
//  || merpro.discount ===''
//  || merpro.discount_expiration ===''
//  || merpro.has_refund_policy ===''
//  || merpro.has_discount ===''
//  || merpro.has_shipment ===''
//  || merpro.has_variation ===''
//  || merpro.shipping_locations ===''
// ) {
//   alert('some form are not filled')
// } else {
//   alert('Product created')
alert('hi')
// }
};
const productSubmit = async (e) => {
  e.preventDefault();
  // if (validateForm()) {
    try {
      const res = await axios.post(`${url}/products`, merpro); //'http://localhost:3000/merchantproduct'
      console.log("Product created:", res.data);
      window.location.replace("/merpage");
      alert("Product successfully created!");
      setMerpro({
        title: "",
        descp: "",
        price: 1,
        brand: '',
        quantity: 1,
        images: '',
        currency: '',
        min_qty: 1,
        max_qty: 1,
        discount:1,
        discount_expiration:"",
        has_refund_policy: false,
        has_discount: false,
        has_shipment: true,
        has_variation: false,
        shipping_locations:"",
        // attrib:""
      });
      // localStorage.setItem('token', JSON.stringify(merpro));
      // window.location.replace("/dashboard");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("An error occurred while creating product. Please try again later.");
    }
  // } else {
  //   console.error("Invalid product data");
  // }
};

  return (
    <>
      <div className="h-auto shadow-lg">
    <h1>Create a new product</h1>
        <div className="container-fluid p-3 create_pro">
          <form className='justify-content-center' onSubmit={productSubmit}>
    <div className="proimg">
      <img src={img} alt="" />

    </div>
           <div className="form1 d-flex p-2">
           <div className="pro1 me-3">
          <label htmlFor="title" className='form-label'><b>Title:</b></label>
              <input type="text"
              placeholder='Product name'
              className='form-control'
               name="title"
                id="title"
                onChange={handleProChange}
                />
          </div>
          <div className="pro2 me-3">
          <label htmlFor="brand" className='form-label'><b>Brand:</b></label>
              <input type="text"
              placeholder='brand name'
              className='form-control'
               name="brand"
                id="brand"
                onChange={handleProChange}
                />
          </div>
          <div className="pro3 me-3">
          <label htmlFor="price" className='form-label'><b>Price:</b></label>
              <input type="number"
              placeholder='Price'
              className='form-control w-100'
               name="price"
                onChange={handleProChange}
                id="price"
                />
          </div>
          <div className="pro4 me-3">
          <label htmlFor="quantity" className='form-label'><b>Quantity:</b></label>
              <input type="number"
              placeholder='quantity'
              className='form-control w-100'
               name="quantity"
                onChange={handleProChange}
                id="quantity"
                />
          </div>
           </div>
           <div className="fom2 p-2">
          <div className="pro5">
          <label htmlFor="descp" className='form-label'><b>Description:</b></label>
              <textarea type='number'
              placeholder='Product Description'
              className='form-control'
               name="descp"
                onChange={handleProChange}
                id="descp"
                />
          </div>
          <div className="pro6">
          <label htmlFor="quantity" className='form-label'><b>Currency:</b></label>
              <input class="form-control w-50"
               type="text"
                placeholder="NGN"
                onChange={handleProChange}
                name='currency'
                disabled/>
          </div>
           </div>
           <div className="fom3 d-flex p-2">
           <div className="pro7">
          <label htmlFor="min_qty" className='form-label'><b>Min_qty:</b></label>
              <input type="number"
              placeholder='min_qty'
              className='form-control-sm w-75'
               name="min_qty"
                onChange={handleProChange}
                id="min_qty"
                />
          </div>
          <div className="pro8">
          <label htmlFor="max_qty" className='form-label'><b>Max_qty:</b></label>
              <input type="number"
              placeholder='max_qty'
              className='form-control-sm w-75'
               name="max_qty"
                onChange={handleProChange}
                id="max_qty"
                />
          </div>
          <div className="pro9">
          <label htmlFor="discount" className='form-label'><b>Discount:</b></label>
              <input type="number"
              placeholder='discount'
              className='form-control-sm w-75'
               name="discount"
                onChange={handleProChange}
                id="discount"
                />
          </div>
          <div className="pro_10 me-3">
          <label htmlFor="has_refund_policy" className='form-label'><b>Has Refund Policy:</b></label>
              <select name="has_refund_policy" id="has_refund_policy" className='form-select w-100' onChange={handleProChange}>
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
          </div>
          <div className="pro_11 me-3">
          <label htmlFor="has_discount" className='form-label'><b>Has Discount:</b></label>
              <select name="has_discount" id="has_discount" className='form-select w-100' onChange={handleProChange}>
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
          </div>
          <div className="pro_12 me-3">
          <label htmlFor="has_shipment" className='form-label'><b>Has Shipment:</b></label>
              <select name="has_shipment" id="has_shipment" className='form-select w-100' onChange={handleProChange}>
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
          </div>
          <div className="pro_13 me-3">
          <label htmlFor="has_variation" className='form-label'><b>Has Variation:</b></label>
              <select name="has_variation" id="has_variation" className='form-select w-100' onChange={handleProChange}>
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
          </div>
           </div>
           <div className="fom4 d-flex">
           <div className="pro_14 me-3">
          <label htmlFor="shipping_locations" className='form-label'><b>Shipping Locations:</b></label>
              <select name="shipping_locations" id="shipping_locations" className='form-select w-100' onChange={handleProChange}>
                <option value=""></option>
                <option value="nigeria">Nigeria</option>
                <option value="ghana">Ghana</option>
                <option value="egypt">Egypt</option>
              </select>
          </div>
          <div className="pro_15 me-3">
          <label htmlFor="discount_expiration" className='form-label'><b>discount_expiration:</b></label>
              <input type="text"
              className='form-control'
                onChange={handleProChange}
              name='discount_expiration'
              id='discount_expiration' />
          </div>
           </div>
           <button className='btn btn-outline-info'><b>SUBMIT</b></button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Createpro
