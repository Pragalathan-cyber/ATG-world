import React from 'react'
import Mainhead from './Mainhead'
import Feed from "./Feed"
import Location from "./Location"

const Main = () => {
  return (
    <div className='main mt-3 ' >
        <Mainhead/>
        <div className="d-flex row ms-3">
           <Feed/>
           <Location/>
        </div>
    </div>
  )
}

export default Main