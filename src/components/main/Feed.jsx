import React from 'react'
import { FaShareAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import PostTwo from './posts/PostTwo';
import PostThree from './posts/PostThree';
import PostFour from './posts/PostFour';

const Feed = () => {
  return (
    <div className='col-lg-9 col-md-12 col-sm-12'>

        <PostTwo/>
        <PostThree/>
        <PostFour/>
    </div>
  )
}

export default Feed