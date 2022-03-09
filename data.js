import React, { useEffect, useState,  } from 'react';
import useAuth from './src/hooks/useAuth';

const data = () => {
    const [booking, setBooking] = useState({});
    const [orderSuccess, setOrderSuccess] = useState(false)
    const {user} = useAuth();
    
    const {serviceId} = useParams()

    const initialValue ={
        customerName:user.displayName,
        customerEmail:user.email,
        serviceName:booking.name
    };
    const [bookingInfo, setBookingInfo] = useState(initialValue);

   
    const handleBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo}
        newInfo[field] = value;
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
        
        const orders = {
            
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
            }
        })
    }
    
    useEffect(()=>{
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setBooking(data))
    },[serviceId])
    return (
        <div>
            <div className="book_input_container">
                    <div className="book_input_box">
                        <h2>Book</h2> 
                        <form onSubmit={handleSubmit}>
                            <input
                            type="text" 
                            name="customerName"
                            onBlur={handleBlur}
                            defaultValue={user.displayName}/>

                            <input 
                            type="text" 
                            name="customerEmail"
                            onBlur={handleBlur}
                            defaultValue={user.email}/>

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
        </div>
    );
};

export default data;