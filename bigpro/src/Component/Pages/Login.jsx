import React from 'react'
import Loginav1 from '../Logincompo/Loginav1'
import Loginav2 from '../Logincompo/Loginav2'
import Footer from '../Footer/Footer'
import Cardimg from '../Logincompo/Cardimg'
import Loginform from '../Logincompo/Loginform'
import img from '../flipkartcart/www.flipkart.com-1712059952738/login_img_c4a81e.png'

const Login = () => {
  return (
    <>
      <div className="">
        <Loginav1/>
        <Loginav2/>
        <div className="d-flex justify-content-center">
        <Cardimg title="Login" description='Get access to your Orders,
            Wishlist and Recommendatios' imgsrc={img} />
        <Loginform/>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default Login
