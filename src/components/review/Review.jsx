import React from 'react'
import Vector2 from '../../asstes/Vector2.png'
import Vector1 from '../../asstes/Vector.png'
import server from '../../asstes/bx_bxs-server.png'
import "./Review.css"
const Review = () => {
  return (
    <div className="container pt-5 mb-5">
      <div className="row mt-5 ">
        <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mx-auto m-lg-0 m-5">
          <div className="d-flex">
            <div className="img">
            <img className='d-flex justify-content-center mx-auto mt-3' src={Vector2} alt="" />
            </div>
            <h5 className='ms-4'><span className='fw-bold'>90+</span><br></br>Users</h5>
           

          </div>
         
        </div>
       
        <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mx-auto m-lg-0 m-5">
        <div className="d-flex">
            <div className="img">
            <img className='d-flex justify-content-center mx-auto mt-3' src={Vector1} alt="" />
            </div>
            <h5 className='ms-4'><span className='fw-bold'>30+</span><br></br>Locations</h5>
        
          </div>
        </div>
      
        <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mx-auto m-lg-0 m-5">
        <div className="d-flex">
            <div className="img">
            <img className='d-flex justify-content-center mx-auto mt-3' src={server} alt="" />
            </div>
            <h5 className='ms-4'><span className='fw-bold'>50+</span><br></br>Serversh</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review