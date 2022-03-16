import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Preloader.css';

const Preloader = () => {
    return (
        <>
         <div className='spinner'> 
            <Spinner animation="border" variant="success" /> 
         </div>  
        </>
    );
};

export default Preloader;