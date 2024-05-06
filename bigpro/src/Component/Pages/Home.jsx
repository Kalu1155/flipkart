import React from 'react'
import '../Styles/Style.scss'
import Slider1 from '../Slidecompo/Slider1'
import img1 from '../www.flipkart.com-1711445631140/fc822dc700322fcd.jpg'
import Myswiper from '../Slidecompo/Myswiper'
import Slider2 from '../Slidecompo/Slider2'
import Hmeremain from '../normals/Hmeremain'
import Mynav from '../Mynav/Mynav'
import Mynav2 from '../Mynav/Mynav2'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <>
    <Mynav/>
    <Mynav2/>
    <div className="home">
      <Slider1/>
    <div className="flex">
    <Myswiper/><img src={img1} alt="" />
    </div>
    <Slider2/>
    <Hmeremain/>
    </div>
    <Footer/>
    </>
  )
}

export default Home
