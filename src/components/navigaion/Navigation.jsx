import React from "react";


import logo from "../../asstes/Logo.svg";


import { CgMenuLeft } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import './Navigation.css'
const Navigation = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">

          <img src={logo} alt="app__logo" className="img-fluid mt-4" width={"150px"}/>


        </div>
        <ul className="app__navbar-links mt-lg-2">




          <li className="p__opensans mt-4"><a href="#about">About Us</a></li>


          <li className="p__opensans mt-4"><a href="#about">Features</a></li>


          <li className="p__opensans mt-4"><a href="#menu">Pricing</a></li>


          <li className="p__opensans mt-4"><a href="#awards">Testimonials</a></li>

          <li className="p__opensans mt-4"><a href="#awards">Help</a></li>



        </ul>
      


          <a className="mt-4 me-5 fs-5 text-dark d-lg-block d-none">Sign In</a>
          <button className="cta-btn mt-4 d-lg-block d-none">Sign Up</button>



        <div className="app__navbar-smallscreen">

        <button className="cta-btn mt-4">Sign Up</button>

          <CgMenuLeft className="ms-3 menu-icon" color="#000" cursor="pointer" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">




                <li><a onClick={() => setToggleMenu(false)}>About Us</a></li>


                <li><a onClick={() => setToggleMenu(false)}>Features</a></li>


                <li><a onClick={() => setToggleMenu(false)}>Pricing</a></li>


                <li><a onClick={() => setToggleMenu(false)}>Testimonials</a></li>


                <li><a onClick={() => setToggleMenu(false)}>Help</a></li>






              </ul>

            </div>
          )}
        </div>

      </nav>


    </>
  )
}

export default Navigation



