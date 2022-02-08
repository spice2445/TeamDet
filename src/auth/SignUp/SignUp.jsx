import React, { useState } from 'react';
import axiosInstance  from '../../axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate;
  const initialFormData = Object.freeze({
    email: "",
    username: "",
    password: ''
  })

  const [formData, updateFormData] = useState(initialFormData)

  const handleChange = (e) =>{
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData)

    axiosInstance
      .post(`user/create/`, {
        email: formData.email,
        user_name:formData.username,
        password:formData.password
      })
      .then((res)=>{
        navigate("/sign-in/", { replace: true })
      })
  }
  return (
    <div>
        {/* <div id="loading">
            <div id="loading-center"></div>
        </div> */}
    
        <div className="wrapper">
            <section className="sign-in-page">
                <div id="container-inside">
                    <div id="circle-small"></div>
                    <div id="circle-medium"></div>
                    <div id="circle-large"></div>
                    <div id="circle-xlarge"></div>
                    <div id="circle-xxlarge"></div>
                </div>
                <div className="container p-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 text-center pt-5">
                            <div className="sign-in-detail text-white">
                                <Link className="sign-in-logo mb-5" to='/'><img src="./assets/images/logo-full.png"
                                        className="img-fluid" alt="logo" /></Link>
                                <div className="sign-slider overflow-hidden">
                                    <ul className="swiper-wrapper list-inline m-0 p-0">
                                        <li className="swiper-slide">
                                            <img src="./assets/images/login/1.png" className="img-fluid mb-4" alt="logo" />
                                            <h4 className="mb-1 text-white">Find new friends</h4>
                                            <p>
                                                It is a long established fact that a reader will be
                                                distracted by the readable content.
                                            </p>
                                        </li>
                                        <li className="swiper-slide">
                                            <img src="./assets/images/login/2.png" className="img-fluid mb-4" alt="logo" />
                                            <h4 className="mb-1 text-white">Connect with the world</h4>
                                            <p>
                                                It is a long established fact that a reader will be
                                                distracted by the readable content.
                                            </p>
                                        </li>
                                        <li className="swiper-slide">
                                            <img src="./assets/images/login/3.png" className="img-fluid mb-4" alt="logo" />
                                            <h4 className="mb-1 text-white">Create new events</h4>
                                            <p>
                                                It is a long established fact that a reader will be
                                                distracted by the readable content.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
                            <div className="sign-in-from">
                                <h1 className="mb-0">Sign Up</h1>
                                <p>
                                    Enter your email address and password to access admin panel.
                                </p>
                                <form className="mt-4">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="exampleInputEmail4">Your Full Name</label>
                                        <input onChange={handleChange} type="email" className="form-control mb-0" id="exampleInputEmail4"
                                            placeholder="Your Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="exampleInputEmail3">Email address</label>
                                        <input onChange={handleChange} type="email" className="form-control mb-0" id="exampleInputEmail3"
                                            placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="exampleInputPassword5">Password</label>
                                        <input type="password" onChange={handleChange} className="form-control mb-0" id="exampleInputPassword5"
                                            placeholder="Password" />
                                    </div>
                                    <div className="d-inline-block w-100">
                                        <div className="form-check d-inline-block mt-2 pt-1">
                                            <input type="checkbox" className="form-check-input" id="customCheck2" />
                                            <label className="form-check-label" htmlFor="customCheck2">I accept
                                                <Link to="/">Terms and Conditions</Link></label>
                                        </div>
                                        <button onClick={handleSubmit} type="submit" className="btn btn-primary float-end">
                                            Sign Up
                                        </button>
                                    </div>
                                    <div className="sign-info">
                                        <span className="dark-color d-inline-block line-height-2">Already Have Account ?
                                            <Link to='/sign-in/'>Log In</Link></span>
                                        <ul className="iq-social-media">
                                            <li>
                                                <a href="sign-up.html#"><i className="ri-facebook-box-line"></i></a>
                                            </li>
                                            <li>
                                                <a href="sign-up.html#"><i className="ri-twitter-line"></i></a>
                                            </li>
                                            <li>
                                                <a href="sign-up.html#"><i className="ri-instagram-line"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
};

export default SignUp;
