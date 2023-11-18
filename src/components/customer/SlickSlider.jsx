import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import men1 from '../../asstes/Ellipse 175.png'
import men2 from '../../asstes/Ellipse 176.png'
import men3 from '../../asstes/Ellipse 177.png'
import {AiFillStar} from 'react-icons/ai'
import './Costmer.css'
const Slider2 = () => {
    
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {

    if (window.innerWidth < 768) {
      setSlidesToShow(1); 
    } else if (window.innerWidth < 1200){
      setSlidesToShow(2); 
    } else {
      setSlidesToShow(3); 
    }
  };

  useEffect(() => {
  
    window.addEventListener("resize", updateSlidesToShow);

    updateSlidesToShow();

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, 
    slidesToScroll: 1,
  };
        return (
          <div className="mb-5">
         
            <Slider {...settings} className="container">
          <div className="border rounded p-4" style={{width: '18rem'}}>
            <div className="d-flex justify-content-between">
               <div className="d-flex">
               <img className="profile_img" src={men1} alt="" />
                <div className="d-block ms-3">
                <h6>Viezh Robert</h6>
                <p>Warsaw, Poland</p>
                </div>
               </div>
               <p>$4.5 <AiFillStar style={{color: "#fea250"}}/></p>
            </div>
                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
          </div>
          <div className="border rounded p-4 ms-4" style={{width: '18rem'}}>
            <div className="d-flex justify-content-between">
               <div className="d-flex">
               <img className="profile_img" src={men2} alt="" />
                <div className="d-block ms-3">
                <h6>Yessica Christy</h6>
                <p>Shanxi, China</p>
                </div>
               </div>
               <p>$4.5 <AiFillStar style={{color: "#fea250"}}/></p>
            </div>
            <p>“I like it because I like to travel far and still can connect with high speed.”.</p>
          </div>
          <div className="border rounded p-4 ms-5" style={{width: '18rem'}}>
            <div className="d-flex justify-content-between">
               <div className="d-flex">
               <img className="profile_img" src={men3} alt="" />
                <div className="d-block ms-3">
                <h6>Kim Young Jou</h6>
                <p>Seoul, South Korea</p>
                </div>
               </div>
               <p>$4.5 <AiFillStar style={{color: "#fea250"}}/></p>
            </div>
            <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
          </div>
        
             
         
             
  
            </Slider>
          </div>
        );
     
}

export default Slider2