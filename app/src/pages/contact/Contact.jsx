import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className="contact-container">
        <div className="contact-text">
             <h1>Contact Us</h1>
             <p>If you are looking for quality rubber components , You can submit your details on this section. We will connect you soon. For any other reason you may wish to contact us.</p>
        </div>
        <div className="contact-form">
            <div className="name">
            <div className="fisrtname">
            <label htmlFor="fname">First name</label><br />
            <input type="text" id='fname' name='fname' placeholder='first name' />
            </div>
            <div className="lastname">
            <label htmlFor="lname">last name</label><br />
            <input type="text" id='lname' name='lname' placeholder='last name' />
            </div>
            </div>

            <div className="cont">
            <div className="email">
            <label htmlFor="email">First name</label><br />
            <input type="email" id='email' name='email' placeholder='email id' />
            </div>
            <div className="phone">
            <label htmlFor="phone">phone</label><br />
            <input type="tel" id='phone' name='phone' placeholder='phone number' />
            </div>
            </div>
            <div className="message">
            <label htmlFor="message">Message</label><br />
            <textarea id='message' name='message' placeholder='enter your message'  />
            </div>

            <button type='submit'>Sent</button>
             
        </div>
    </div>
  )
}

export default Contact