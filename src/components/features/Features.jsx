import React from 'react'
import feature_img from '../../asstes/Illustration 2.png'
import correct from '../../asstes/Group 1120.png'
const Features = () => {
  return (
    <div className="container pt-5 mb-5">
    <div className="row mt-5">
    
      <div className="col-lg-6 col-12">
        <img className='img-fluid' src={feature_img} alt="" />
      </div>
      <div className="col-lg-6 col-12">
        <h1 className='banner_heading mt-4'>
        We Provide Many Features You Can Use
        </h1>
        <p className="mt-3">
        You can explore the features that we provide with fun and have their own functions each feature.
        </p>
       <div className="d-flex">
        <div>
        <img className='img-fluid' src={correct} alt="" />
        </div>
        <p className='ms-3 mt-1'>Powerfull online protection.</p>

       </div>
       <div className="d-flex">
        <div>
        <img className='img-fluid' src={correct} alt="" />
        </div>
        <p className='ms-3 mt-1'>Internet without borders.</p>

       </div>
       <div className="d-flex">
        <div>
        <img className='img-fluid' src={correct} alt="" />
        </div>
        <p className='ms-3 mt-1'>Supercharged VPN</p>

       </div>
       <div className="d-flex">
        <div>
        <img className='img-fluid' src={correct} alt="" />
        </div>
        <p className='ms-3 mt-1'>No specific time limits.</p>

       </div>
       
      </div>
    </div>
  </div>
  )
}

export default Features