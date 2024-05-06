import React,{useState,useEffect} from 'react'
import '../Styles/Style.scss'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import axios from 'axios';
import img from '../www.flipkart.com-1711445631140/fa_62673a.png'

const ShopCard2 = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axios.get('http://localhost:8000/brands');
      setBrands(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  return (
    <>
      <div className="filter">
      <div className=" justify-content-start shadow border-1 m-1 p-2">
   <div className="filter1">
   <h3>Filters</h3>
      <hr />
      <h6>CATEGORIES</h6>
      <p><MdOutlineKeyboardArrowLeft/> Clothing and Accessor...</p>
      <p><MdOutlineKeyboardArrowLeft/>Topwear</p>
      <p><MdOutlineKeyboardArrowLeft/> T-shirts</p>
      <Link>Men's T-shirt</Link>
      <hr />
   </div>
    <div className="filter2">
      <label htmlFor="pricerange">PRICE</label>
    <input type="range" className='range' id='pricerange'/>
   <div className="d-flex justify-content-around">
   <select name="" id="">
      <option value="">Min</option>
      <option value="">$200</option>
      <option value="">$300</option>
      <option value="">$700</option>
      <option value="">$1000</option>
    </select>
    <p>to</p>
    <select name="" id="">
      <option value="">$200</option>
      <option value="">$300</option>
      <option value="">$700</option>
      <option value="">$1000</option>
      <option value="">$1000+</option>
    </select>
   </div>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        BRAND
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className=' justify-content-around align-content-center'>{
          brands.map(brand =>(
            <div className=" d-flex align-content-center" key={brand.id}>
              <input type="checkbox" />
              <p className='ps-5'> {brand.name}</p>
            </div>
          ))
        }</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        GENDER
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Men</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Women</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Couple</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        DISCOUNT
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>30% or more</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>40% or more</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>50% or more</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>60% or more</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>70% or more</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        SIZE
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>3XS</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>2XS</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>XS</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>S</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>M</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>L</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>XL</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>2XL</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>3XL</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>4XL</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>5XL</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>6XL</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>7XL</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>8XL</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Free</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        FABRIC
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Cotton Blend</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Elastane</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Linen Blend</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Modal</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Nylon</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Organic Cotton</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Ploy Cotton</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Polyester</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Pure Cotton</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Viscose Rayon</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Wool Blend</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        PARTTEN
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Abstract</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Animal Print</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Cartoon</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Checkered</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Chevron/Zig Zag</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Colorblock</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        OCCASION
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Beach Wear</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Casual</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Formal</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Lounge Wear</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Party</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Sports</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        COLORS
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Beige</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>black</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Blue</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Brown</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Green</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      CUSTOMER RATINGS
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>4 ⭐ & above</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>3 ⭐ & above</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3 filterlogo d-flex">
    <input type="checkbox"/> <img className='fa-logo' src={img} alt="" />
    </div>
    <hr/>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      NECK TYPE
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Boat Neck</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Cowl Neck</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Crew Neck</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Halter Neck</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Henley Neck</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>High Neck</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      SLEEVE TYPE
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>3/4 Sleeve</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Full Sleeve</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Half Sleeve</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Layered Sleeve</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Raglan</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Short Sleeve</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Sleeveless</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      FIT
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Boxy</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Compression</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Loose</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Oversized</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Regular</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Slim</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      PACK OF
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>3-6</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>7-10</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Pack of 2</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Pack of 1</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
      </div>
      <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      OFFERS
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Buy More,Save More</p> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Special Price</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
      </div>
      <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        COLLECTIOS
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className=' justify-content-around align-content-center'>{
          brands.map(brand =>(
            <div className=" d-flex align-content-center" key={brand.id}>
              <input type="checkbox" />
              <p className='ps-5'> {brand.category}</p>
            </div>
          ))
        }</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    </div>
    <div className="filter3">
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      AVAILABILITY
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className=" d-flex align-content-center" ><input type="checkbox"/> <p className='ps-2'>Include Out of Stock</p> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
      </div>
      </div>
      </div>
    </>
  )
}

export default ShopCard2
