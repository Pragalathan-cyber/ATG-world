import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";

const Location = () => {
  return (
    <div  className='col-3 d-none d-lg-block mt-5'>
         <div 
           style={{width:'100%'}} 
           className='d-flex justify-content-between p-2 border-bottom'
         >
            <div >
                <FaLocationDot />
                <span className='ms-2 '>
                  Noida, India
                </span>
            </div>
            <FaPen style={{cursor:'pointer'}}/>
         </div>
         <p 
           style={{color:'#b0aeae'}} 
           className='mt-4'><CgDanger 
          />  
            Your location will help us serve better and extend a personalised experience.
          </p>
    </div>
  )
}

export default Location