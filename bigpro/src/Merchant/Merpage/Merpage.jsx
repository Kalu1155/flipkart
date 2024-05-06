import React from 'react';
import Mernav from '../Mercompo/Mernav';
import Merbanner from '../Mercompo/Merbanner';
import Mercard from '../Mercompo/Mercard';
import '../../Component/Styles/Style.scss';

const Merpage = () => {
  // const url = "http://ecommerce.reworkstaging.name.ng/v2";
  // const [userProducts, setUserProducts] = useState([]);
  // useEffect(() => {
  //   // Assume userId is obtained after user login
  //   const merchant_id = 123;
  //   fetchUserProducts(merchant_id);
  // }, []);

  // async function fetchUserProducts(merchant_id) {
  //   try {
  //     const response = await fetch(`${url}/products?merchant`);
  //     const data = await response.json();
  //     setUserProducts(data.mercard);
  //   } catch (error) {
  //     console.error('Error fetching user products:', error);
  //   }
  // }

  // async function fetchProductInfo(product_id) {
  //   try {
  //     const response = await fetch(`${url}/products?merchant_id=123&category_id=321`);
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching product info:', error);
  //     return null;
  //   }
  // }

  return (
    <>
      <Mernav />
      <Merbanner />
      {/* <Mercard/> */}
    </>
  );
};

export default Merpage;
