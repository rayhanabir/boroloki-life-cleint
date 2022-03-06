import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, image, price, description, _id} = service;
    const navigate = useNavigate()
    const handleBook =(id)=>{
        navigate(`/dashboard/book/${id}`)
    }
    return (
        <>
          <Col  sm={12} md={6} lg={4}>
            <div className="service_card">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <h3>${price}</h3>
                <p>{description}</p>
                <button onClick={()=>handleBook(_id)}>Order</button>
            </div>
          </Col>  
        </>
    );
};

export default Service;