import React from 'react'
import { Link } from 'react-router-dom'
import LoginFrm from './LoginFrm'
import logo from '../../Component/www.flipkart.com-1711445631140/fkheaderlogo_exploreplus-44005d.svg'
import '../../Component/Styles/Style.scss'
import Mfooter from '../Mfooter'

const Loginmer = () => {
  return (
    <>
    <div className="logo">
    <img src={logo} alt="" />
    </div>
   <div className="form">
   <Link to='/'><button className='btn btn-outline-info'>GO BACK</button></Link>
   <LoginFrm/>
   <Mfooter mfooterheader="Why sell on flipkart"/>
   </div>
      
    </>
  )
}

export default Loginmer
