import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <>
            <section id="contact">
                
                <div className="contact_heading">
                    <p>Contact</p>
                    <h3>Let Us Handle 
                        <br />
                        Your Project Professionally</h3>
                </div>
                <div className="input_container">
                       <div className="input_box">
                            <input type="text" placeholder='First Name'/>
                            <input type="text" placeholder='Last Name'/>
                            <input type="text" placeholder='Your Email'/>
                            <input type="text" placeholder='Your Phone'/>
                            
                       </div>
                       <div className="text_area">
                            <textarea name=""placeholder='Your Message'></textarea>
                            <button>Submit</button>
                        </div>
                        
                </div>
                
                
            </section>  
        </>
    );
};

export default Contact;