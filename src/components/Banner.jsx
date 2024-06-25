import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import banner from "../assets/Rectangle 2 (2).png"
import shade from "../assets/Shade 3 (6).png"

const Banner = () => {
  return (
    <div>
        <div className="emty-div   d-md-block d-lg-none"></div>
        <div className='position-relative overflow-hidden vh-100'>
            <FaArrowLeft 
               className='position-absolute d-lg-none'
               style={{top:'10px',left:'20px',fontSize:'23px',color:'white',zIndex:'5'}}
            />
            <img 
              className='img-fluid img1 w-100' 
              src={banner} 
              alt="Banner"
            />
            <img
              className='position-absolute img2 top-0 start-0 w-100'
              src={shade} 
              alt="Shade" 
            />
            <div 
              className="position-absolute text" 
              style={{ color: 'white', bottom: '45%', left: '10%' }}
            >
                <h2 
                  style={{ fontSize: '36px' }}
                >
                  Computer Engineering
                </h2>
                <p 
                  style={{ fontSize: '18px' }}
                 >
                  142,765 Computer Engineers follow this
                </p>
            </div>
        </div>
    </div>

  )
}

export default Banner