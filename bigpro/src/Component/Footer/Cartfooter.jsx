import React from 'react'
import '../Styles/Style.scss'
import { Link } from 'react-router-dom'

const Cartfooter = () => {
  return (
    <>
<div className="cartend">
<hr />
     <div className="flex justify-content-around">
     <ul className='d-flex list-unstyled cartfooter align-items-center'>
        <li>Policies:Returns Policy</li>
        <li><hr /></li>
        <li>Terms of use</li>
        <li><hr /></li>
        <li>Security</li>
        <li><hr /></li>
        <li>Privacy</li>
        <li><hr /></li>
        <li>Infringment</li>
      </ul>
      <ul className='list-unstyled '>
        <li>2007-2024 Flipkart.com</li>
      </ul>
      <ul className='list-unstyled'>
        <li>Need help? Visit the <Link className='text-decoration-none'>Help Center</Link> or <Link className='text-decoration-none'>Contact Us</Link></li>
      </ul>
     </div>
     
</div>
    </>
  )
}

export default Cartfooter
