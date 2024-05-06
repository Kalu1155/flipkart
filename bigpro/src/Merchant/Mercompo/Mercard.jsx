import React, { useState, useEffect } from 'react';
import '../../Component/Styles/Style.scss';
import img from '../../Component/www.flipkart.com-1711445631140/-original-imagenqrzfcgwqk7.jpeg';
import axios from 'axios';

const Mercard = () => {
    const url = "http://ecommerce.reworkstaging.name.ng/v2";
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${url}/products?merchant_id`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="mercard">
                {data.map((mercard, i) => (
                    <div className="card ca_rd m-3 shadow border-0" key={i}>
                        <img src={img} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{mercard.title}</h5>
                            <p className="card-text">{mercard.descp}</p>
                            <div className="d-flex justify-content-between">
                                <p className='brand'>{mercard.brand}</p>
                                <p className='text-success'>${mercard.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Mercard;

