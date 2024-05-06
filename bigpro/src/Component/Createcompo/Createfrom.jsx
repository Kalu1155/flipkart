import React from 'react'
import { Link } from 'react-router-dom'

const Createfrom = () => {
  return (
    <>
      <div className="loginform bg-white border shadow ps-4 pe-4 pt-2 pb-2 mt-3   rounded-0 mb-4">
  <form action="">
        <label htmlFor="">Enter Mobile number</label> <br />
        <input type="email"
        className='form-control'
         />
        <p>By continuing, you agree to Flipkart's <Link className='text-decoration-none'>Terms of Use</Link> and <Link className='text-decoration-none'>Privacy Policy.</Link></p>
        <button className='signup'>Signup</button>
        </form>
        <div className="login">
            <Link to='/login' className='text-decoration-none'><button>Existing User? Log in</button></Link>
        </div>
  </div>
    </>
  )
}

export default Createfrom
