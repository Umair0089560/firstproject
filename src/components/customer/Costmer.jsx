import React from 'react'
import SlickSlider from './SlickSlider'
const Costmer = () => {
  return (
    <div className="container pt-5">
      <div className="mt-5 mb-5">
        <h1 className='d-flex justify-content-center text-center mx-auto'>
        Trusted by Thousands of<br></br>Happy Customer
        </h1>
        <p className='text-center d-flex justify-content-center mx-auto mt-3'>These are the stories of our customers who have joined us with great<br></br>pleasure when using this crazy feature.</p>
      </div>

      <SlickSlider />
    </div>
  )
}

export default Costmer