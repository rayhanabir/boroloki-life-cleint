import React, { useEffect, useState } from 'react';
import {Alert} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Book.css';
const Book = () => {
    const [booking, setBooking] = useState({});
    const [orderSuccess, setOrderSuccess] = useState(false)
    const {user} = useAuth();
    const [userData, setUserData] = useState({...user})
    const {serviceId} = useParams()
    
    const handleBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...booking}

        if(field ==='serviceName'){
            newInfo[field] = value;
            setBooking(newInfo);
        }
        else{
            const updateUser = {...user}
            updateUser[field] = value;
            setUserData(updateUser);
        }  
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
        
        const orders = {
            serviceName:booking.name,
            serviceImage:booking.image,
            cutomerName : userData.displayName,
            CustomerEmail : userData.email
        };
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
                            onBlur={handleBlur}
                            defaultValue={userData.displayName}/>

                            <input 
                            type="text" 
                            name="customerEmail"
                            onBlur={handleBlur}
                            defaultValue={userData.email}/>

                            <input 
                            type="text"
                            name="serviceName" 
                            onBlur={handleBlur}
                            defaultValue={booking.name}/>
                            <p>pay with</p>
                            <div className="payment">
                                <input type="radio" name="payment" id="credit" />
                                <label htmlFor="credit">Credit Card</label>
                                <input type="radio" name="payment" id="paypal" />
                                <label htmlFor="paypal">Paypal</label>
                            </div>  
                            <button type='submit' className='btn btn-primary mb-3'>Submit</button>                          
                        </form>
                        {orderSuccess && <Alert variant='success'>order placed succefully</Alert>}
                    </div>
                </div>   
          </section>   
        </>
    );
};

export default Book;