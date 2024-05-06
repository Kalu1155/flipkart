import React from 'react'
import Loginav1 from '../Logincompo/Loginav1'
import Loginav2 from '../Logincompo/Loginav2'
import Footer from '../Footer/Footer'
import Cardimg from '../Logincompo/Cardimg'
import Createfrom from '../Createcompo/Createfrom'
import img from '../flipkartcart/www.flipkart.com-1712059952738/login_img_c4a81e.png'
const Create = () => {
  return (
    <>
     
        
      <div className="">
        <Loginav1/>
        <Loginav2/>
        <div className="d-flex justify-content-center">
        <Cardimg title="Looks like you're new here" description="Sign up with your mobile number to get started" imgsrc={img}/>
        <Createfrom/>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default Create
