import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>

          <section id="footer">
              <Container>

                <div className="footer_container">
                    <div className="location">
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div className="company">
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>Project</li>
                            <li>Our Team</li>
                            <li>Terms & conditions</li>
                        </ul>
                    </div>
                    <div className="links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>Quick Links</li>
                            <li>Rentals</li>
                            <li>Sales</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="about">
                        <h4>About</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolores dignissimos corrupti non aut veniam asperiores eos quasi fugiat corporis?</p>
                        
                    </div>

                </div>
              </Container>
          </section>  
        </>
    );
};

export default Footer;