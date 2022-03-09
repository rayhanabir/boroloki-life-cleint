import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const BookList = () => {
    const [bookingList, setBookingList] = useState([])
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`http://localhost:5000/order/:${user.email}`)
        .then(res => res.json())
        .then(data => setBookingList(data))
    },[])
    console.log(bookingList);
    return (
        <>
          <section id="all_order">
              <div className="booking_list_container">
                <div className="booking_list">
                        <h2>booking{bookingList.length}</h2>
                </div>
              </div>
          </section> 
        </>
    );
};

export default BookList;