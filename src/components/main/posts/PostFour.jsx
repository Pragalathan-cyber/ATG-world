import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegEye, FaShareAlt } from 'react-icons/fa';
import { IoBagOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import fourthPostPc from "../../../assets/Rectangle 3 (9).png"

const PostFour = () => {
  return (
    <div className='posts mx-2 border p-2 rounded'>

    <div className='post-desc mx-2 mt-2 '>
       <img src='' alt="" />
        {/*post title*/}
        <div className='mt-2 row'>
          <h2 className='title-post col-10' style={{fontWeight:'bold'}}>Software Developer - II</h2>
          <BsThreeDots className='col-2 mt-3'/>
        </div>

        {/*post description*/}
        <div className="row">
            <div className="col-6">
                <IoBagOutline className='me-1 mb-1'/>
                Innovanccer Analytic...
            </div>
            <div className="col-6">
               <IoLocationOutline className='me-1 mb-1' />
                Noida,India
            </div>
        </div>
        <div className="row d-flex justify-content-center border rounded text-primary mt-2" style={{fontWeight:'bold'}}>
            Apply on Timejobs
        </div>

        {/*profile details*/}
        <div className='row mt-4 position-relative'>
            <div className='col-8 col-sm-8 d-flex'>
                <img className='pfp' src={fourthPostPc} alt="" />
                <p className='mt-2 ms-2' style={{fontWeight:'bold'}}>Joseph Gray</p>
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

export default PostFour