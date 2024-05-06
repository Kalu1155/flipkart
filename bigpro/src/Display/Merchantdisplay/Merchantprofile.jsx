import {React,useEffect,useState} from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';
// let merchant = 
const Merchantprofile = () => {
    const url = "http://ecommerce.reworkstaging.name.ng/v2";
    let merchant = JSON.parse(localStorage.getItem('token'));
    const [merchantData, setMerchantData] = useState([]);
    useEffect(() => {
        fetchMerchant();
    }, []);
  
    const fetchMerchant = async () => {
      try {
        const response = await axios.get(`${url}/merchants`, merchantData);
        setMerchantData(response.data);
      } catch (error) {
        console.error("Error fetching merchant:", error);
      }
    };
  return (
    <>
<div className='sec2'>
    <section>
        <div className="container-fluid mytable">
                <table className="table table-striped table-hover table-responsive table-group-divider table-lg table-bordered table-dark maintable">
                    <thead>
                        <tr>
                            <th>Merchant first ame</th>
                            <th>Merchant last name</th>
                            <th>Merchant email</th>
                            <th>Merchant phone</th>
                            <th>Merchant store name</th>
                            <th>Merchant description</th>
                            <th>Merchant icon</th>
                            <th>Merchant banner</th>
                            <th>Merchant password</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={merchant.id}>
                                <td>{merchant.first_name}</td>
                                <td>{merchant.last_name}</td>
                                <td>{merchant.email}</td>
                                <td>{merchant.phone}</td>
                                <td>{merchant.store_name}</td>
                                <td>{merchant.descp}</td>
                                <td>{merchant.icon}</td>
                                <td>{merchant.banner}</td>
                                <td>{merchant.password}</td>
                            </tr>
                    </tbody>
                </table>
        </div>
    </section>
    {/* <p>{merchant.first_name}</p> */}
</div>

    </>
  )
}

export default Merchantprofile
