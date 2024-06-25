import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";

const Mainhead = () => {
  return (
    <div className="position-relative">
      <div style={{zIndex:'5'}} className='d-flex position-relative justify-content-between  '>
        <ul className='main-head-ul d-none d-lg-flex d-md-flex  '>
          <li 
            className='pb-3' 
            style={{fontWeight:'bold',borderBottom:'2px solid black'}}
          >
            All Posts(32)
          </li>
          <li>Article</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>
        {/*sm devices*/}
        <div 
          style={{color:'black',fontWeight:'bold'}} 
          className="d-lg-none d-md-none ms-4"
        >
          Posts(368)
        </div>

        <div className='d-none d-lg-block d-md-block '>
          <button 
            className='border-0 py-1 px-2 me-3 rounded' 
            style={{backgroundColor:'#d6d3d3'}}
          >
            Write a Post
            <IoMdArrowDropdown/>
          </button>
          <button 
            className='border-0 py-1 px-2 rounded' 
            style={{backgroundColor:'blue',color:'white'}}
          >
            <MdGroupAdd />  
            Join Group
          </button>
        </div>

        {/*sm devices*/}
        <div className=" d-lg-none d-md-none me-2">
            <button 
              style={{marginTop:'-10px',color:'black',backgroundColor:'#d4d2d2'}} 
              className='rounded  border-1 py-1 px-2 '
            >
              Filter:All
              <IoMdArrowDropdown/>
            </button>
        </div>
      </div>
      <div className="line"></div>
    </div>

  )
}

export default Mainhead