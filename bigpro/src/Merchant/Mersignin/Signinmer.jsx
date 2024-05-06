import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Component/www.flipkart.com-1711445631140/fkheaderlogo_exploreplus-44005d.svg'
import '../../Component/Styles/Style.scss'
import Mfooter from '../Mfooter'
import SigninFrm from './SigninFrm'

const Signinmer = () => {
  return (
    <><div className="logo">
    <img src={logo} alt="" />
    </div>
   <div className="form">
   <Link to='/'><button className='btn btn-outline-info'>GO BACK</button></Link>
   <SigninFrm/>
   <Mfooter mfooterheader="Wellcome Back"/>
   </div>
      
    </>
  )
}

export default Signinmer
