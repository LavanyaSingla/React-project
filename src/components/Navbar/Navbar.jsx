import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.svg';
const Navbar = () => {
    const [menu,setmenu]=useState("home")
    return (
        <div className='navbar'>
            {/* <img src="{logo}" alt="" /> */}
            <h1 className='nav-name'> Lavanya</h1>
            <ul className='nav-menu'>
                <li><p>Home</p>{menu==="home"?<img src="underline" alt="" />:<></>}</li>
                <li><p>Education</p>{menu==="education"?<img src="underline" alt="" />:<></>}</li>
                <li><p>Experience</p>{menu==="experience"?<img src="underline" alt="" />:<></>}</li>
                <li><p>Projects</p>{menu==="projects"?<img src="underline" alt="" />:<></>}</li>
                <li><p>Skills</p>{menu==="skills"?<img src="underline" alt="" />:<></>}</li>
                <li><p>Contact</p>{menu==="contact"?<img src="underline" alt="" />:<></>}</li>
            </ul>
            <div className='nav-connect'>Connect with Me</div>
        </div>
    )
}

export default Navbar