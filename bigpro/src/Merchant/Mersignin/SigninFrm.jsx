import React, { useState } from 'react';
import '../../Component/Styles/Style.scss';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = "http://ecommerce.reworkstaging.name.ng/v2";

const SigninFrm = () => {
  const [sdata, setsdata] = useState({ email: '', password: '' });
  const [serror, setserror] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setsdata({ ...sdata, [name]: value });
  };

  const validation = () => {
    let error = {};
    let valid = true;

    if (!sdata.email.trim()) {
      error.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S/.test(sdata.email)) {
      error.email = "Invalid email format";
      valid = false;
    }

    if (!sdata.password.trim()) {
      error.password = 'Password is required';
      valid = false;
    } else if (sdata.password.length < 8) {
      error.password = "Password must be at least 8 characters";
      valid = false;
    }

    setserror(error);
    return valid;
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const response = await axios.post(`${url}/merchants/login`, sdata);  
        console.log("Sign-in successful:", response.data);
        window.location.replace("/merpage");
        setsdata(sdata =>({...sdata, ...response.data}))
         } catch (error) {
        console.error("Error signing in:", error.response); 
          alert("An error occurred while signing in. Please try again later.");
      }
    }
  };
  
  return (
    <div className="justify-content-start h-auto shadow-lg">
      <div className="signinmer pt-5">
        <form onSubmit={handleSignin}>
          <div className="d-flex justify-content-around">
            <div className="signin_1">
              <label htmlFor="forEmail" className='form-label'><b>Email:</b></label>
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input
                  type="email"
                  placeholder="xxxxxxx@gmail.com"
                  className="form-control"
                  id="forEmail"
                  name="email"
                  value={sdata.email}
                  onChange={handleChange}
                />
              </div>
              {serror.email && <span>{serror.email}</span>}
            </div>
            <div className="signin_2">
              <label htmlFor="pass" className='form-label'><b>Password:</b></label>
              <div className="input-group">
                <div className="input-group-text"><BsEye /></div>
                <input
                  type="password"
                  placeholder="xxxxxxxx"
                  className="form-control merinput"
                  id="pass"
                  name="password"
                  value={sdata.password}
                  onChange={handleChange}
                />
              </div>
              {serror.password && <span>{serror.password}</span>}
            </div>
          </div>
          <div className="logo align-content-center">
            <button type="submit" className='btn btn-outline-primary mb-5'>Sign in</button>
          </div>
          <p>Don't have an account <Link to='/merchantfrm'>Sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SigninFrm;
