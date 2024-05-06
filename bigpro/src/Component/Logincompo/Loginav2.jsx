import React from 'react'
import '../Styles/Style.scss'
import { Link } from 'react-router-dom'
const Loginav2 = () => {
  return (
    <>
      <div className="conatiner d-flex justify-content-center bg-light vh-50 loginav2">
        <div className="w-100 bg-white shadow px-5 py-1 text">
    <ul className='d-flex justify-content-around list-unstyled'>
    <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Electronics</Link>
         <ul className="dropdown-menu" aria-labelledby="menDropdown">
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
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">TVs & Applainces</Link>
         <ul className="dropdown-menu" aria-labelledby="menDropdown">
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
        <li><Link to='/shop'>Men</Link></li>
        {/* <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Men</Link>
         <ul className="dropdown-menu" aria-labelledby="menDropdown">
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
                  <li><Link to='#' className="dropdown-item">Men action</Link></li>
         </ul>
        </li> */}
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Women</Link>
         <ul className="dropdown-menu" aria-labelledby="menDropdown">
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
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Baby & Kids</Link>
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
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home & Furniture</Link>
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
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sports, Books & More</Link>
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
        <li>Flights</li>
        <li>Offer Zone</li>
    </ul>
        </div>
      </div>
    </>
  )
}

export default Loginav2
