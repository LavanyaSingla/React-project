import React from 'react'
import "./Projects.css"
import Projects_data from './Projects_data'
const Projects = () => {
  return (
    <div className='project'>
        <div className="project-title">
            <h1>My Projects</h1>
            <img src ="" alt="" />
        </div>
        <div className="project-container">
            {Projects_data.map((project,index)=>{
                return <div key={index} className="project-format">
                    <h3>{project.s_no}</h3>
                    <h2>{project.s_name}</h2>
                    <p>{project.s_desc}</p>
                    <div className="project-readmore"><p>Read More</p>
                    <img src="" alt="" /></div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Projects