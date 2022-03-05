import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import projectOne from '../../../images/project-1.png'
import projectTwo from '../../../images/project-2.png'
import projectThree from '../../../images/project-3.png'
import './Project.css';
const Project = () => {
    return (
        <>
          <section id="project">
              <div className="text-center my-5 ">
                <p className='fw-bold'>Project</p>
                <h3>Discover the latest Interior Design available today</h3>
              </div>
              <Container>
                  <Row>
                      <Col sm={12} md={6} lg={4}>
                            <div className="text-center project_box">
                            <img className='img-fluid' src={projectTwo} alt="" />
                            <h5>Villa On Washingtone Avenue</h5>
                            <address>Dhaka, Bangladesh</address>
                            </div>
                      </Col>
                      <Col sm={12} md={6} lg={4}>
                            <div className="text-center  project_box">
                            <img className='img-fluid' src={projectThree} alt="" />
                            <h5>Villa On Washingtone Avenue</h5>
                            <address>Dhaka, Bangladesh</address>
                            </div>
                      </Col>
                      <Col sm={12} md={6} lg={4}>
                            <div className="text-center  project_box">
                            <img className='img-fluid' src={projectOne} alt="" />
                            <h5>Villa On Washingtone Avenue</h5>
                            <address>Dhaka, Bangladesh</address>
                            </div>
                      </Col>
                  </Row>
              </Container>
          </section>  
        </>
    );
};

export default Project;