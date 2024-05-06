import React from 'react'
import '../Styles/Style.scss'
import mobiles from '../www.flipkart.com-1711445631140/22fddf3c7da4c4f4.png'
import grocery from '../www.flipkart.com-1711445631140/29327f40e9c4d26b.png'
import fashion from '../www.flipkart.com-1711445631140/0d75b34f7d8fbcb3.png'
import electroics from '../www.flipkart.com-1711445631140/69c6589653afdb9a.png'
import furniture from '../www.flipkart.com-1711445631140/ab7e2b022a4587dd.jpg'
import appliance from '../www.flipkart.com-1711445631140/0139228b2f7eb413.jpg'
import travel from '../www.flipkart.com-1711445631140/71050627a56b4693.png'
import beauty from '../www.flipkart.com-1711445631140/dff3f7adcf3a90c6.png'
import  Wheelers from '../www.flipkart.com-1711445631140/05d708653beff580.png'
import { Link } from 'react-router-dom'
const Mynav2 = () => {
  return (
    <>
      <div className="conatiner d-flex bg-light vh-50">
        <div className="w-100 bg-white shadow px-5 pt-3 my-2">
    <ul className='d-flex justify-content-around list-unstyled mynav'>
        <li><img src={grocery} alt=""/><br /> Grocery</li>
        <li><img src={mobiles} alt="" /><br /> Mobiles</li>
        <li className="nav-item dropdown">
        <div class="dropdown dropul">
        <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false">
                <img src={fashion} alt="" /><br />Fashion
        </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>More in men's top wear</li>
         <Link to='/shop'> <li>All</li></Link>
          <li>Men's T-Shirts</li>
          <li>Men's Casual Shirts</li>
          <li>Men's Formal Shirts</li>
          <li>Men's kurtas</li>
          <li>Men's Ethnic sets</li>
          <li>Men's blazers</li>
          <li>Men's Raincoat</li>
          <li>Men's Windcheaters</li>
          <li>Men's suit</li>
          <li>Men's Fabrics</li>
          <li></li>
      </ul>
    </div>
        </li>

        <li className="nav-item dropdown">
        <div class="dropdown dropul">
        <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false">
                <img src={electroics} alt="" /><br />Home & Furniture
        </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>Action</li>
          <li>Another action</li>
          <li>Something else here</li>
      </ul>
    </div>
        </li>
        <li className="nav-item dropdown dropul">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={furniture} alt="" /><br />Home & Furniture</Link>
         <ul className="dropdown-menu" aria-labelledby="menDropdown">
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  {/* Add more dropdown items if needed */}
         </ul>
        </li>
        <li><img src={appliance} alt="" /><br />Appliance</li>
        <li><img src={travel} alt="" /><br />Travel</li>
        <li className="nav-item dropdown dropul">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={beauty} alt="" /><br />Beauty, Toys & More</Link>
         <ul className="dropdown-menu" aria-labelledby="menDropdown">
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  {/* Add more dropdown items if needed */}
         </ul>
        </li>
        <li className="nav-item dropdown dropul">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={Wheelers} alt="" /><br />Two Wheelers</Link>
         <ul className="dropdown-menu" aria-labelledby="menDropdown">
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  {/* Add more dropdown items if needed */}
         </ul>
        </li>
    </ul>
        </div>
      </div>
    </>
  )
}

export default Mynav2
