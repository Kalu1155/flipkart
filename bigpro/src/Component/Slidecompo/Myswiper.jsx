import React from 'react'
import '../Styles/Style.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../www.flipkart.com-1711445631140/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg_1.jpeg'
import img3 from '../www.flipkart.com-1711445631140/-original-imagenqrzfcgwqk7_1.jpeg'
import img5 from '../www.flipkart.com-1711445631140/-original-imagtxh2nk3spyfk_1.jpeg'
import 'swiper/css';
import Hmecard from '../Cards/Hmecard';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
        className={className}
        style={{ ...style,
           display: "block",
           background: "black" 
          }}
        onClick={onClick}
        />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
          display: "block",
          background: "black",
            }}
        onClick={onClick}
      />
    );
  }  
  const Myswiper = () => {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
  return (
    <>
   <div className="w-100 bg-white shadow px-5 pt-3 my-2 myswper swiper">
<div className="myswper">
<h3>Best of Electronics</h3>
   <Slider {...settings}>
   <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
   <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
   <div><Hmecard imageSrc={img3} title="From $9999" description="Projectors"/></div>
   <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
   <div><Hmecard imageSrc={img5} title="From $3999" description="Printers"/></div>
   <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
   <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
   <div><Hmecard imageSrc={img1} title="Shop Now" description="Top Mirrorless Cameras"/></div>
    </Slider>
</div>
   </div>
    </>
  )
}

export default Myswiper
