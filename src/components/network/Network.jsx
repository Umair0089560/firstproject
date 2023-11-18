import React from 'react'
import global from '../../asstes/Huge Global.png'
import sponser from '../../asstes/Sponsored.png'
const Network = () => {
  return (
    <div className="container pt-5">
       <div className="mt-5 mb-5">
        <h1 className='d-flex justify-content-center text-center mx-auto'>
        Huge Global Network<br></br>of Fast VPN
        </h1>
        <p className='text-center d-flex justify-content-center mx-auto mt-3'>See LaslesVPN everywhere to make it easier for you when you move<br></br>locations.</p>
      </div>

      <div className="mt-5 d-flex justify-content-center mx-auto">
        <img className='img-fluid' src={global} alt="" />
      </div>

      <div className="mt-5 d-flex justify-content-center mx-auto">
        <img className='img-fluid' src={sponser} alt="" />
      </div>
    </div>
  )
}

export default Network