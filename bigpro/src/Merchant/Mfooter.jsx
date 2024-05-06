import React from 'react'
import '../Component/Styles/Style.scss'
import truck from './img/Onboarding_logo_Truck.svg'
import percent from './img/Onboarding_logo_Percent.svg'
import account from './img/Onboarding_logo_Account.svg'
import charges from './img/Onboarding_logo_Charges.svg'
import calculate from './img/Onboarding_logo_Calculator.svg'
import support from './img/Onboarding_logo_Support.svg'
import payment from './img/Onboarding_logo_Payments.svg'
import mobile from './img/Onboarding_logo_Mobile.svg'

const Mfooter = ({mfooterheader}) => {
  return (
    <>
      <div className="mfooter">
       <h1 className='text-center'><b>{mfooterheader}</b></h1>
       <div className="box d-flex">
        <div className="box1">
            <img src={truck} alt="" />
            <h5><b>Sell Across India</b></h5>
            <p>Reach over 50 crore+ customers across 27000+ pincodes</p>
        </div>
        <div className="box1">
            <img src={percent} alt="" />
            <h5><b>Higher Profits</b></h5>
            <p>With 0% commission* , you take 100% profits with you</p>
        </div>
        <div className="box1">
            <img src={account} alt="" />
            <h5><b>Account Management</b></h5>
            <p>Our Dedicated managers will help your business on Flipkart</p>
        </div>
        <div className="box1">
            <img src={charges} alt="" />
            <h5><b>Lower Return Charges</b></h5>
            <p>With our flat and low return charges, ship your products stress-free</p>
        </div>
       </div>
       <div className="box d-flex">
        <div className="box1">
            <img src={calculate} alt="" />
            <h5><b>Simple Pricing Calculator</b></h5>
            <p>Use our simple pricing calculator to decide the best and competitive selling price for your product</p>
        </div>
        <div className="box1">
            <img src={support} alt="" />
            <h5><b>24x7 Seller Support</b></h5>
            <p>All your queries and issues are answered by our dedicated Seller Support Team</p>
        </div>
        <div className="box1">
            <img src={payment} alt="" />
            <h5><b>Fast & Regular Payments</b></h5>
            <p>Get payments as fast as 7-10 days from the date of dispatch</p>
        </div>
        <div className="box1">
            <img src={mobile} alt="" />
            <h5><b>Business on the go</b></h5>
            <p>Download our Flipkart Seller App to manage your business anywhere, anytime</p>
        </div>
       </div>
      </div>
    </>
  )
}

export default Mfooter
