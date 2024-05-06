import React from 'react'
import '../Styles/Style.scss' 
import { Link } from 'react-router-dom'
import logo from '../www.flipkart.com-1711445631140/fkheaderlogo_exploreplus-44005d.svg'
import { FaShoppingCart } from "react-icons/fa";

// import logo from '../flipkartcart/fk-logo_f64bb3.png'
// import cart from '../www.flipkart.com-1711445631140/header_cart-eed150.svg'
// import { BsFillCartFill } from 'react-icons/bs'


const Loginav1 = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-primary'>
        <div className="container-fluid">
          <Link to='/' className='navbar-brand homelink' aria-current="page">
            <img src={logo} className='ps-5 ms-4' alt="mahabis Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <div className='searchbar2 '>
              <input type="search"
              className='form-control '
              placeholder='Search for Product, Brands and More'
               />
              </div>
            </ul>
            <ul className="navbar-nav">
                <div className="login">
            <Link to='/login'><button className=' bg-white shadow'>Login</button></Link>
                </div>
            </ul>
            <ul className="d-flex justify-content-between loginav1">
                <li className='me-5 text-white'>Become a Seller</li>
                <li className='me-3 text-white'>More</li>
                <li><Link className='text-decoration-none text-white' to='/cart'><FaShoppingCart/> Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Loginav1
