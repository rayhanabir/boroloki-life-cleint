import React,{useState,useEffect} from 'react';
import { Container,Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <>
           <section id="services" className='my-5'>
                <Container>
                    <div className="service_heading text-center my-5">
                    <p className='fw-bold'>Services</p>
                    <h2>We're an agency tailored to all clients' <br /> needs that always delivers</h2>
                    </div>
                    <Row>
                        {
                            services.map(service =><Service key={service._id} service={service}></Service>)
                        }
                    </Row>
                </Container>
            </section> 
        </>
    );
};

export default Services;