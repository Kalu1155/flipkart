import {React,useEffect,useState} from 'react'
import '../../Component/Styles/Style.scss'
import {Link} from 'react-router-dom';
import logo from '../../Component/www.flipkart.com-1711445631140/fkheaderlogo_exploreplus-44005d.svg'
import  axios  from 'axios';
// import { RiProductHuntFill } from 'react-icons/ri';
import { RiProfileFill } from 'react-icons/ri';
import { GrUserWorker } from 'react-icons/gr';


const Mernav = () => {
//   useEffect(() => {
//     axios.get(`${url}/merchants`)
//         .then(res => setData(res.data))
//         .catch(err => {
//             if (err.response && err.response.status === 404) {
//                 console.log("Merchant not found.");
//             } else {
//                 console.log("Error fetching merchant:", err);
//             }
//         });
// }, []);

  const url = "http://ecommerce.reworkstaging.name.ng/v2";
    let merchant = JSON.parse(localStorage.getItem('token'));
    const [merchantData, setMerchantData] = useState([]);
    useEffect(() => {
        fetchMerchant();
    },[]);
  
    const fetchMerchant = async () => {
      try {
        const response = await axios.get(`${url}/merchants`, merchantData); //'http://localhost:9000/merchant'
        setMerchantData(response.data);
      } catch (error) {
        console.error("Error fetching merchant:", error);
      }
    };
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link to='/' className='navbar-brand homelink' aria-current="page">
            <img src={logo} alt="mahabis Logo" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <h1>{merchant.store_name}</h1>
        </li>
      </ul>
      <div class="navbar">
      <div class="dropdown dropul">
        <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"><RiProfileFill/> Profiles
        </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {/* <Link to='/merchantfrm'><li><RiProductHuntFill/> Store Profile</li></Link> */}
          <Link to='/merchantfrm'><li><GrUserWorker/>Personal Profile</li></Link>
      </ul>
    </div>
      </div>
    </div>
      <Link to='/createpro'><button className='btn btn-outline-dark'>add product</button></Link>
  </div>
</nav>
    </>
  )
}

export default Mernav
