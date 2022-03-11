import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import BookingCard from '../BookingCard/BookingCard';

const BookList = () => {
    const [bookingList, setBookingList] = useState([])
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBookingList(data))
    },[])
    return (
        <>
          <section id="all_order"> 
                <div className="booking_list p-5">
                        <h2>Booking : {bookingList.length}</h2>
                        <Row>
                            {
                                bookingList.map(booking => <BookingCard key={booking._id} booking={booking}></BookingCard>)
                            }
                        </Row>
                </div>
          </section> 
        </>
    );
};

export default BookList;