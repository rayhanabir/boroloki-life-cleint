import React from 'react';
import { BsFillCartFill  } from 'react-icons/bs';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, image, price, details, _id} = service;
    const navigate = useNavigate()
    const handleBook =(id)=>{
        navigate(`/book/${id}`)
    }
    return (
        <>
          <Col  sm={12} md={6} lg={4}>
            <div className="service_card">
                <img src={`data:image/png;base64,${image}`} alt="" />
                <h3>{name}</h3>
                <h3>${price}</h3>
                <p>{details}</p>
                <button onClick={()=>handleBook(_id)}><BsFillCartFill /> Order</button>
            </div>
          </Col>  
        </>
    );
};

export default Service;