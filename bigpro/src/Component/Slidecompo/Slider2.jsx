import React from 'react'
import '../Styles/Style.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../www.flipkart.com-1711445631140/119766-flair-original-imag9nzubznagufg.jpeg'
import img2 from '../www.flipkart.com-1711445631140/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m_5.jpeg'
import img3 from '../www.flipkart.com-1711445631140/-original-imagenqrzfcgwqk7_1.jpeg'
import img4 from '../www.flipkart.com-1711445631140/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg'
import img5 from '../www.flipkart.com-1711445631140/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6_4.jpeg'
import 'swiper/css';
import img6 from '../www.flipkart.com-1711445631140/ft098-steel-motorized-ft98-steel-motorized-motorized-fitkit-original-imafuerskytashcz.jpeg'
import Hmecard from '../Cards/Hmecard';
const Slider2 = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          }
        ]
      };
  return (
    <>
       <div className="swiper w-100 bg-white shadow px-5 pt-3 my-2">
   <h3>Best, Food, Toys & more</h3>
   <Slider {...settings}>
   <div><Hmecard imageSrc={img1} title="From $49" description="Top Selling Stationery"/></div>
   <div><Hmecard imageSrc={img2} title="Up to 70% off" description="Best of Action Toys"/></div>
   <div><Hmecard imageSrc={img3} title="Upto 70% off" description="Soft Toys"/></div>
   <div><Hmecard imageSrc={img4} title="From $139" description="Gym Essentails"/></div>
   <div><Hmecard imageSrc={img5} title="Upto 75% off" description="Dry Fruits"/></div>
   <div><Hmecard imageSrc={img6} title="Upto 70% off" description="Trendmill, Exercise Bikes..."/></div>
   <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
   <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
   
    </Slider>
   </div>
    </>
  )
}

export default Slider2
