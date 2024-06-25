import React from 'react'
import thirdPost from "../../../assets/Rectangle 5 (5).png"
import thirdPostPic from "../../../assets/Rectangle 3 (6).png"
import { BsThreeDots } from 'react-icons/bs'
import { FaRegEye, FaShareAlt } from 'react-icons/fa'
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";

const PostThree = () => {
  return (
    <div className='posts mx-2 border p-2 rounded'>
    {/*post image*/}
    <img className='post-image' src={thirdPost}  alt="" />
    
    
    <div className='post-desc mx-2 mt-2 '>
       <img src='' alt="" />
        {/*post title*/}
        <div className='mt-2 row'>
          <h2 className='title-post col-10' style={{fontWeight:'bold'}}>Finance % Investment Elite Social Mixer @Lujiazui</h2>
          <BsThreeDots className='col-2 mt-3'/>
        </div>

        {/*post description*/}
        <div className="row">
            <div className="col-6">
                <SlCalender className='me-1 mb-1'/>
                Fri, 12 Oct,2018
            </div>
            <div className="col-6">
               <IoLocationOutline className='mb-1 me-1'/>
                Ahmedabad,India
            </div>
        </div>
        <div className="row d-flex justify-content-center border rounded text-danger mt-2" style={{fontWeight:'bold'}}>
            Visit Website
        </div>

        {/*profile details*/}
        <div className='row mt-4 position-relative'>
            <div className='col-8 col-sm-8 d-flex'>
                <img className='pfp' src={thirdPostPic} alt="" />
                <p className='mt-2 ms-2' style={{fontWeight:'bold'}}>Roanl Jones</p>
            </div>
            <div className='position-absolute d-lg-none d-md-none' style={{left:'3.8rem',top:'1.7rem',fontSize:'14px'}}>
                   <FaRegEye className='me-1'/>
                   1.4k views
                </div>
            <div className='col-2 d-none d-md-block d-lg-block mt-2' style={{color:'#5c5c5c'}}>
               <FaRegEye className='me-1'/>
                1.4k views
            </div>
            <div className='col-1 d-none d-md-block d-lg-block mt-1 d-flex justify-content-end ' >
              <FaShareAlt style={{backgroundColor:'#dcd9d9'}} className='p-2 fs-2 rounded'/>
            </div>

            <div className="col-3 d-lg-none d-md-none mt-2" >
              <div style={{backgroundColor:'#dcd9d9'}} className='rounded p-1' >
                <FaShareAlt className='me-1 '/>
                Share
              </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default PostThree