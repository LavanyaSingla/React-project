import React from 'react'
import './Contact.css';
const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-tile">
                <h1> Get In Touch</h1>
                <img src="" alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1> Lets' talk</h1>
                    <p> I'm currently available to collaborate and contribute on any new project. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src="" /> <p> lavanya.singla@dummy.com</p>
                        </div>
                        <div className="contact-detail">
                        <img src="" /> <p> +919876543210</p>
                        </div>
                        <div className="contact-detail">
                        <img src="" /> <p> Thane, Maharashtra</p>
                        </div>
                    </div>
                </div>
                <form className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name='message' rows='8' placeholder='Enter your message here' />
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact