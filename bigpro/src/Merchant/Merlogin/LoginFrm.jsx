import React, { useState } from 'react';
import { CiPhone } from 'react-icons/ci';
import { CgPassword } from 'react-icons/cg';
import { BiStoreAlt } from 'react-icons/bi';
import { BsPenFill } from 'react-icons/bs';
import { VscSymbolNamespace } from 'react-icons/vsc';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Component/Styles/Style.scss';


const LoginFrm = () => {
  const url = "http://ecommerce.reworkstaging.name.ng/v2";

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: '',
    phone: '',
    store_name: '',
    descp: '',
    icon: '',
    banner: '',
    password: ""
  });
  const [formError, setFormError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let error = {};
    let valid = true;

    if (!formData.first_name.trim()) {
      error.first_name = "Input first name";
      valid = false;
    }
    if (!formData.last_name.trim()) {
      error.last_name = "Input last name";
      valid = false;
    }
    if (!formData.email.trim()) {
      error.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S/.test(formData.email)) {
      error.email = "Invalid email format";
      valid = false;
    }
    if (!formData.phone.trim()) {
      error.phone = "Input phone number";
      valid = false;
    } else if (formData.phone.length !== 11) {
      error.phone = "Phone number must be 11 digits";
      valid = false;
    }
    if (!formData.password.trim()) {
      error.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      error.password = "Password must be at least 8 characters long";
      valid = false;
    }

    setFormError(error);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await axios.post(`${url}/merchants`, formData); // 'http://localhost:9000/merchant'
        console.log("Form submitted:", res.data);
        alert("Registration successful!");
        window.location.replace("/signinmer");
        setFormData({
          first_name: "",
          last_name: "",
          email: '',
          phone: '',
          store_name: '',
          descp: '',
          icon: '',
          banner: '',
          password: ""
        });
        localStorage.setItem('token', JSON.stringify(formData));
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while registering. Please try again later.");
      }
    } else {
      // console.error("Invalid form data");
    }
  };

  return (
    <>
   <div className="justify-content-start h-auto shadow-lg">
      <div className="merform">
        <form onSubmit={handleSubmit}>
        <div className="d-flex merconn1">
       <div className="mercon1">
       <label htmlFor="forName" className='form-label'><b>First name:</b></label>
<div className="input-group">
<div className="input-group-text"><VscSymbolNamespace/></div>
          <input
            type="text"
            placeholder="first name"
            className="form-control merinput"
            id="forName"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
</div>
          {formError.first_name && <span>{formError.first_name}</span>}
        </div>
        <div className="mercon1">
          <label htmlFor="lasName" className='form-label'><b>Last name:</b></label>
          <div className="input-group">
          <div className="input-group-text"><VscSymbolNamespace/></div>
          <input
            type="text"
            placeholder="last name"
            className="form-control input-name merinput"
            id="lasName"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          </div>
          {formError.last_name && <span>{formError.last_name}</span>}
        </div>
        <div className="mercon1">
          <label htmlFor="forEmail" className='form-label'><b>Email:</b></label>
          <div className="input-group">
              <div className="input-group-text">@</div>
          <input
            type="email"
            placeholder="email"
            className="form-control input-name merinput"
            id="forEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          </div>
          {formError.email && <span>{formError.email}</span>}
        </div>
       </div>
        <div className="d-flex merconn1">
        <div className="mercon1">
          <label htmlFor="forPhone" className='form-label'><b>Phone:</b></label>
         <div className="input-group">
             <div className="input-group-text"><CiPhone/></div>
         <input
            type="number"
            placeholder="081xxxxxxxxx"
            className="form-control input-name merinput"
            id="forPhone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
         </div>
         {formError.phone && <span>{formError.phone}</span>}
        </div>
        <div className="mercon1">
            <label htmlFor="forStore"><b>Store name:</b></label>
            <div className="input-group">
            <div className="input-group-text"><BiStoreAlt/></div>
          <input
            type="text"
            placeholder="Store name"
            className="form-control input-name merinput"
            id="forStore"
            name="store_name"
            value={formData.store_name}
            onChange={handleChange}
          />
            </div>
        </div>
        <div className="mercon1">
            <label htmlFor="foeDes"><b>Description:</b></label>
            <div className="input-group">
            <div className="input-group-text"><BsPenFill/></div>
          <textarea
           name="descp"
            id="foeDes"
            cols="30"
            rows=""
            value={formData.descp}
            onChange={handleChange}
              ></textarea>
            </div>
        </div>
        </div>
        <div className="d-flex merconn1">
        <div className="mercon1">
            <label htmlFor="forlogo"><b>Brand logo:</b></label>
          <input
            type="file"
            placeholder="logo"
            className="form-control input-name merinput"
            id="forlogo"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
          />
        </div>
        <div className="mercon1">
        <label htmlFor="forBanner"><b>Banner:</b></label>
          <input
            type="file"
            placeholder="banner"
            className="form-control  merinput"
            id="forBanner"
            name="banner"
            value={formData.banner}
            onChange={handleChange}
          />
        </div>
        <div className="mercon1">
            <label htmlFor="forPass"><b>Password:</b></label>
          <div className="input-group">
              <div className="input-group-text"><CgPassword/></div>
          <input
            type="password"
            placeholder="password"
            className="form-control input-name merinput"
            id="forPass"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          </div>
          {formError.password && <span>{formError.password}</span>}
        </div>
        </div>
        <div className="logo">
        <button className='btn btn-outline-primary mb-5'>Register & continue</button>
        </div>
        <p>Already have an account <Link to='/signinmer'>Sign in</Link></p>
        </form>
      </div>
      </div>
    </>
  )
}

export default LoginFrm;
