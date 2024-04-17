import React from 'react'
import "./Education.css";
const Education = () => {
  return (
    <div className='education'>
      <div className='edu-title'>
        <h1>Education</h1>
        <img src="" alt="" />
      </div>
      <div className='edu-sections'>
        <div className='edu-left'>
          <img src="" alt="" />
        </div>
        <div className="edu-right">
          <div className='edu-para'>
            <p>I am a software developer, experienced in both frontend as well as backend technologies. I am a computer science engineer graduate.</p>
          </div>
          <div className="edu-skills">
            <div className="edu-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="edu-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="edu-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
            <div className="edu-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>
      <div className="edu-achievements">
        <div className="edu-achievement">
          <h1>10+</h1>
          <p>years of experience</p>
        </div>
        <div className="edu-achievement">
          <h1>90+</h1>
          <p>projects</p>
        </div>
        <div className="edu-achievement">
          <h1>15+</h1>
          <p>cleints</p>
        </div>
      </div>
    </div >
  )
}

export default Education