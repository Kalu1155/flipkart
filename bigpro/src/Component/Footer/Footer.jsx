import React from 'react'
import '../Styles/Style.scss'
import { PiFacebookLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { Link } from 'react-router-dom';
import advert from '../www.flipkart.com-1711445631140/advertise-image-866c0b.svg'
import help from '../www.flipkart.com-1711445631140/help-centre-image-c4ace8.svg'
import gift from '../www.flipkart.com-1711445631140/gift-cards-image-d7ff24.svg'
import bank from '../www.flipkart.com-1711445631140/payment-method-c454fb.svg'
import sell from '../www.flipkart.com-1711445631140/sell-image-9de8ef.svg'

const Footer = () => {
  return (
    <>
     <div className="myfooter">
        <footer className='moal-footer my-footer'>
        <ul className='hover'>
            <h6>ABOUT</h6>
            <li><b>Contact us</b></li>
            <li><b>About us</b></li>
            <li><b>Careers</b></li>
            <li><b>Flipkart stories</b></li>
            <li><b>Press</b></li>
            <li><b>Corporate information</b></li>
        </ul>
        <ul className='hover'>
            <h6>GROUP COMPANIES</h6>
            <li><b>Myntra</b></li>
            <li><b>Flipkart wholesale</b></li>
            <li><b>Cleartrip</b></li>
            <li><b>Shopsy</b></li>
        </ul>
        <ul className='hover'>
            <h6>HELP</h6>
            <li><b>Payment</b></li>
            <li><b>Shipping</b></li>
            <li><b>Cancellation & Reaturns</b></li>
            <li><b>FAQ</b></li>
            <li><b>Report Infringment</b></li>
        </ul>
        <ul className='hover'>
            <h6>CONSUMER POLICY</h6>
            <li><b>Cancellation & Reaturns</b></li>
            <li><b>Term Of Use </b></li>
            <li><b>Security</b></li>
            <li><b>Privacy</b></li>
            <li><b>Sitmap</b></li>
            <li><b>Grievance Redressal</b></li>
            <li><b>EPR Compliance</b></li>
        </ul>
        <hr/>
        <ul>
            <h6>Mail Us:</h6>
           <li>Flipkart Internet Private Limited,</li>
           <li>Building Alyssa Begonia &</li>
           <li>Clove Embassy Tech Village,</li>
           <li>Outer Ring Road,Devarabeesanahalll Village,</li>
           <li>Bengaluru,560103,</li>
           <li>Kamataka,India</li>
           < ul class="social-icons">
               <li><i class="fa fa-facebook"></i></li>
               <li><i class="fa fa-twitter"></i></li>
               <li><i class="fa fa-linkedin"></i></li>
               <li><i class="fa fa-google-plus"></i></li>
                  <h6>Social:</h6>
            <ul className='socials'>
            <li><Link><PiFacebookLogo/></Link></li>
            <li><Link><BsTwitterX/></Link></li>
            <li><Link><FiYoutube/></Link></li>
            </ul>
           </ul>
        </ul>
        <ul>
            <h6>Registerd Office Address:</h6>
           <li>Flipkart Internet Private Limited,</li>
           <li>Building Alyssa Begonia &</li>
           <li>Clove Embassy Tech Village,</li>
           <li>Outer Ring Road,Devarabeesanahalll Village,</li>
           <li>Bengaluru,560103,</li>
           <li>Kamataka,India</li>
           <li>CIN: U51109KA2012PTC066107</li>
           <li>Telephone: 044-45614700</li>
         </ul>
        </footer>
        <hr />
        <ul className='footer-pics'>
            <li><img src={sell} alt="store" />Become a Seller</li>
            <li><img src={advert} alt="Advertise" />Advertise</li>
            <li><img src={gift} alt="Gift" />Gift Cards </li>
            <li><img src={help} alt="Help" />Help Center</li>
            <li>2007-2024 Flipkart.com</li>
            <li><img src={bank} alt="banks" /></li>
        </ul>
     </div>
    </>
  )
}

export default Footer
