import React, { useEffect, useState } from 'react';
import {Alert} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Book.css';
const Book = () => {
    const [booking, setBooking] = useState({});
    const [order, setOrder] = useState({});
    const [orderSuccess, setOrderSuccess] = useState(false)
    const {user} = useAuth();
    const {serviceId} = useParams()
    
    const handleOnChange = e =>{
        setOrder(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    useEffect(()=>{
        setOrder(prev =>({...prev, customerName:user.displayName, customerEmail:user.email}))
    },[user])
    
    const handleSubmit = e =>{
        e.preventDefault();
        
        const orders = {
            serviceName:booking.name,
            serviceImage:booking.image,
            cutomerName : order.customerName,
            CustomerEmail : order.customerEmail
            
        };
        console.log(orders);
        fetch('http://localhost:5000/orders',{
            method:"POST",
            body:JSON.stringify(orders),
            headers:{
                "Content-type":"application/json"
            }
            
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                setOrderSuccess(true)
                setOrder({})
                setBooking({})
            }
        })
    }

    
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setBooking(data))
    },[serviceId])
    
    return (
        <>
         <section id="book">
                <div className="book_input_container">
                    <div className="book_input_box">
                        <h2>Book</h2> 
                        <form onSubmit={handleSubmit}>
                            <input
                            type="text" 
                            name="customerName"
                            onChange={handleOnChange}
                            defaultValue={!! order.customerName? order.customerName : ''}/>

                            <input 
                            type="text" 
                            name="customerEmail"
                            onChange={handleOnChange}
                            defaultValue={!!order.customerEmail ? order.customerEmail:'' }/>

                            <input 
                            type="text"
                            name="serviceName" 
                            onChange={handleOnChange}
                            defaultValue={!!booking.name ? booking.name : ''}/>
                             
                            <button type='submit'>Submit</button>                          
                        </form>
                        {orderSuccess && <Alert variant='success' className='mt-4'>order placed succefully</Alert>}
                    </div>
                </div>   
          </section>   
        </>
    );
};

export default Book;