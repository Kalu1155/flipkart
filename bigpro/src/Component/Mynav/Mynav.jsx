import React from 'react'
import '../Styles/Style.scss'
import {Link} from 'react-router-dom';
import logo from '../www.flipkart.com-1711445631140/fkheaderlogo_exploreplus-44005d.svg'
// import { FaShoppingCart } from "react-icons/fa";

import cart from '../www.flipkart.com-1711445631140/header_cart-eed150.svg'
import store from '../www.flipkart.com-1711445631140/Store-9eeae2.svg'
import vertical from '../www.flipkart.com-1711445631140/header_3verticalDots-ea7819.svg'
import profile from '../www.flipkart.com-1711445631140/profile-52e0dc.svg'
const Mynav = () => {
  return (
    <>
       <nav className='navbar navbar-expand-lg'>
        <div className="container-fluid">
          <Link to='/' className='navbar-brand homelink' aria-current="page">
            <img src={logo} alt="mahabis Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <div className='searchbar'>
              <input type="search"
              className='form-control'
              placeholder='Search for Product, Brands and More'
               />
              </div>
            </ul>
            <ul className="navbar-nav homeitem">
              {/* {/* <li className="nav-item">
                <Link to='#' className='nav-link'></Link>
              </li> */}
              {/* <li className="nav-item dropdown ms-4 me-3">
                <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={profile} alt="" /> Login</Link>
                <ul className="dropdown-menu" aria-labelledby="menDropdown">
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                </ul>
              </li>  */}
              <li className="nav-item">
                <Link to='/login' className='nav-link me-2'><img src={profile} alt="" /> Login</Link>
              </li>
              <li className="nav-item">
                <Link to='/cart' className='nav-link me-2'><img src={cart} alt="" />Cart</Link>
              </li>
              <li className="nav-item">
                <div class="dropdown dropul">
        <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"><img src={store} alt="" />Become a Seller
        </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to='/merchantfrm'><li>LOGIN</li></Link>
          <div class="dropdown dropul">
        <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false">MORE
        </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to='/signinmer'> <li>SIGN IN</li></Link>
          <Link to='/merpage'> <li>Profile</li></Link>
          <Link to='/merprofile'> <li>Display</li></Link>
      </ul>
    </div>
      </ul>
    </div>
              </li>
              <li className="nav-item">
                <Link to='#' className='nav-link'><img src={vertical} alt="" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Mynav