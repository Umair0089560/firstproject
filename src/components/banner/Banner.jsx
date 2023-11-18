import React from 'react'
import Banner_img from '../../asstes/Illustration 1.svg'
import './Banner.css'
const Banner = () => {
  return (
  <div className="container pt-5 mb-5">
    <div className="row mt-5">
      <div className="col-lg-6 col-12">
        <h1 className='banner_heading mt-4'>
        Want anything to be easy with <span className="fw-bold">LaslesVPN</span> 
        </h1>
        <p className="mt-3">
        Provide a network for all your needs with ease and fun using <span className="fw-700 fs-3">LaslesVPN</span> discover interesting features from us.
        </p>
        <button className="mt-3 btn-banner">
        Get Started
        </button>
      </div>
      <div className="col-lg-6 col-12">
        <img className='img-fluid' src={Banner_img} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Banner