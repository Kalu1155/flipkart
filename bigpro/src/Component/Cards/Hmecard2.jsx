import React from 'react'
import Hmecard from '../Cards/Hmecard';
import '../Styles/Style.scss'
import img1 from '../www.flipkart.com-1711445631140/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg_1.jpeg'
const Hmecard2 = () => {
  return (
    <>
     <div className="grid">
     <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
    <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
    <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
     <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
    </div> 
    </>
  )
}

export default Hmecard2
