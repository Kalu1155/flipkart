import React from 'react'
import '../Styles/Style.scss'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../www.flipkart.com-1711445631140/27bc307b31c9ce1c.png'
import img2 from '../www.flipkart.com-1711445631140/60b019a3f4125e28.png'
import img3 from '../www.flipkart.com-1711445631140/611e77220cd10cee.png'
import img4 from '../www.flipkart.com-1711445631140/6701030f290f9f81.jpg'
import img5 from '../www.flipkart.com-1711445631140/c54402522d1f0229.png'
import img6 from '../www.flipkart.com-1711445631140/d4e55307f526de0e.jpg'
import img7 from '../www.flipkart.com-1711445631140/e85756f4c5c0eac3.png'
import img8 from '../www.flipkart.com-1711445631140/ea7c1f1041411ab8.jpg'




const Slider1 = () => {
  return (
    <>
    <div className="slider">
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img6} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img7} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img8} alt="" />
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Slider1
