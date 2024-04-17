import React from 'react'
import './Experience.css';
import Exp from './Experience_data';
const Experience = () => {
  return (
    <div className='exp'>
        <div className="exp-title">
            <h1>My Experience</h1>
            <img src ="" alt="" />
        </div>
        <div className="exp-container">
            {Exp.map((exp,index)=>{
                return <div></div>
            })}
        </div>
    </div>
  )
}

export default Experience