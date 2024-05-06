import {React,useState,useEffect} from 'react';
import axios from 'axios';
import img from '../../Component/www.flipkart.com-1711445631140/banner';
import '../../Component/Styles/Style.scss';
const Merbanner = () => {
  // const url = "http://ecommerce.reworkstaging.name.ng/v2";
  //   let merchant = JSON.parse(localStorage.getItem('token'));
  //   const [merchantData, setMerchantData] = useState([]);
  //   useEffect(() => {
  //       fetchMerchant();
  //   }, []);
  
  //   const fetchMerchant = async () => {
  //     try {
  //       const response = await axios.get(`${url}/merchants`, merchantData);
  //       setMerchantData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching merchant:", error);
  //     }
  //   };
  return (
    <>
    <div className="banner">
      {/* <img src={merchant.images} alt="" /> */}
        <img src={img} alt="" />
    </div>
    </>
  )
}

export default Merbanner
