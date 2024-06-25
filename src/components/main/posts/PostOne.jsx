import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegEye, FaShareAlt } from 'react-icons/fa'
import firstPost from "../../../assets/Rectangle 5 (3).png"
import firstPostLit from "../../../assets/✍️ Article.png"
import firstPostprofile from "../../../assets/Rectangle 3 (7).png"

const PostONe = () => {
  return (
    <div className='posts mx-2 border p-2 rounded'>
    {/*post image*/}
    <img className='post-image' src={firstPost}  alt="" />
    
    <div className='post-desc mx-2 mt-2 '>
       <img src={firstPostLit} alt="" />
        {/*post title*/}
        <div className='mt-2 row'>
          <h2 className='title-post col-10' style={{fontWeight:'bold'}}>What if famous brands had regular fonts?Meet RegularBrands!</h2>
          <BsThreeDots className='col-2 mt-3'/>
        </div>

        {/*post description*/}
        <h5 className='post-p' style={{color:'#5c5c5c'}}>I've worked in UX for the better part of a decade.From now on, I plan to rei...</h5>

        {/*profile details*/}
        <div className='row mt-4 position-relative'>
            <div className='col-8 col-sm-8 d-flex'>
                <img className='pfp' src={firstPostprofile} alt="" />
                <p className='mt-2 ms-2' style={{fontWeight:'bold'}}>Sarthak Karma</p>
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

export default PostONe