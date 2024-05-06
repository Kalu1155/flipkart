import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Style.scss'


const Loginform = () => {
  return (
    <>
  <div className="loginform bg-white border shadow ps-4 pe-4 pt-2 pb-2 mt-3   rounded-0 mb-4">
  <form action="">
        <label htmlFor="">Enter Email/Mobile number</label> <br />
        <input type="email"
        className='form-control'
         />
        <p>By continuing, you agree to Flipkart's <Link className='text-decoration-none'>Terms of Use</Link> and <Link className='text-decoration-none'>Privacy Policy.</Link></p>
        <button className='loginbtn'>Request OTP</button>
        </form>
        <div className="create">
            <Link to='/create' className='text-decoration-none'>New to Flipkart?Create an account</Link>
        </div>
  </div>
      
    </>
  )
}

export default Loginform
