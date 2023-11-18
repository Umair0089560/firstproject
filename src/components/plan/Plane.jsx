import React from 'react'
import free from '../../asstes/Free.png'
import correct2 from '../../asstes/Group 1223.png'
import './Plane.css'
const Plane = () => {
  return (
    <div className="container pt-5 mb-5">
      <div className="mt-5">
        <h1 className='d-flex justify-content-center mx-auto'>
          Choose Your Plan
        </h1>
        <p className='text-center d-flex justify-content-center mx-auto'>Let's choose the package that is best for you and explore it happily and<br></br>cheerfully.</p>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="border rounded p-2 pt-3 h-100">
            <img className='d-flex mt-5 mx-auto' src={free} alt="" />
            <h5 className='d-flex justify-content-center mt-4 mx-auto'>Free Plan</h5>
         <div className="ms-5">
         <div className="d-flex mt-5 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Unlimited Bandwitch</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Encrypted Connection</p>

            </div>
            <div className="d-flex mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>No Traffic Logs</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Works on All Devices</p>

            </div>
            
         </div>
         <h4 className='d-flex justify-content-center mx-auto' style={{marginTop: "130px"}}>Free<span className='fs-4' style={{color: "#4F5665"}}>/mo</span></h4>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <button className='plane_btn'>
                Select
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="border rounded p-2 pt-3 h-100">
            <img className='d-flex mt-5 mx-auto' src={free} alt="" />
            <h5 className='d-flex justify-content-center mt-4 mx-auto'>Standard Plan</h5>
           <div className="ms-5">
             <div className="d-flex  mt-5 mx-auto text-left">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Unlimited Bandwitch</p>

            </div>
            <div className="d-flex mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Encrypted Connection</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Yes Traffic Logs</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Works on All Devices</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Connect Anyware</p>

            </div>
           </div>
           
           <h4 className='d-flex justify-content-center mx-auto' style={{marginTop: "80px"}}>$9<span className='fs-4' style={{color: "#4F5665"}}>/mo</span></h4>


            <div className="d-flex justify-content-center mt-4 mb-4">
              <button className='plane_btn'>
                Select
              </button>
            </div>
          
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="border rounded p-2 pt-3 h-100">
            <img className='d-flex mt-5 mx-auto' src={free} alt="" />
            <h5 className='d-flex justify-content-center mt-4 mx-auto'>Premium Plan</h5>
           <div className="ms-5">
           <div className="d-flex  mt-5 mx-auto text-left">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Unlimited Bandwitch</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Encrypted Connection</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Yes Traffic Logs</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Works on All Devices</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Connect Anyware</p>

            </div>
            <div className="d-flex  mt-2 mx-auto">
              <div>
                <img className='img-fluid' src={correct2} alt="" />
              </div>
              <p className='ms-3 d-flex mt-1'>Get New Features</p>

            </div>
           </div>

           <h4 className='d-flex justify-content-center mt-4 mx-auto'>$12<span className='fs-4' style={{color: "#4F5665"}}>/mo</span></h4>
           <div className="d-flex justify-content-center mt-4 mb-4">
              <button className='plane_btn'>
                Select
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Plane