import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/whole.png"

const Header = () => {
  return (
    <div className='row  py-4 ms-5 me-2 d-none d-lg-flex'>
    <div className='col-4'>
        <img 
          src={logo} 
          style={{ height: '24px', width: '163px' }}
          alt="" 
        />
    </div>
    <div className='col-4 search border rounded-pill d-flex align-items-center '>
        <IoSearchSharp className='search-icon'/>
        <input 
          type="search" 
          className='search-bar border-0'
          placeholder='Search for your groups in ATG'
        />
    </div>
    <div className='col-4 d-flex  justify-content-end'>
        <p>Create account.</p>
        <span 
          className='fw-bold' 
          style={{ color: 'blue',cursor:'pointer' }}>
            It's free! 
        </span>
        <IoMdArrowDropdown className='mt-1' style={{cursor:'pointer'}}/>
    </div>
</div>

  )
}

export default Header