import React from 'react'
import Logo from '../../asstes/Logo.svg'
import facbook from '../../asstes/Facebook.png'
import twiter from '../../asstes/Twitter.png'
import instagram from '../../asstes/Instagram.png'

const Footer = () => {
  return (
    <div style={{background: "#F8F8F8"}}>

    <div className="container pt-5" >
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="d-block">
            <img src={Logo} alt="" />
            <p className="mt-3">
            LaslesVPN is a private virtual network that has unique features and has high security.
            </p>
            <div className="d-flex">
            <img src={facbook} alt="" />
            <img src={twiter} alt="" />
            <img src={instagram} alt="" />
              
            </div>
             <p className="mt-3">
            ©2020LaslesVPN
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <div className="d-block">
              <p className='fw-bold'>Product</p>
              <p>Download</p>
              <p>Pricing</p>
              <p>Locaitions</p>
              <p>Countries</p>
              <p>Blog</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <div className="d-block">
              <p className='fw-bold'>Engage</p>
              <p>LaslesVPN ? </p>
              <p>FAQ</p>
              <p>Tutorials</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <div className="d-block">
              <p className='fw-bold'>Earn Money</p>
              <p>Affiliate</p>
              <p>Become Partner</p>
            </div>
        </div>
       
       
      </div>
    </div>
    </div>
  )
}

export default Footer