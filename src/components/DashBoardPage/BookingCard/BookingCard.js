import React from "react";
import { Col } from "react-bootstrap";
import "./BookingCard.css";

const BookingCard = ({ booking }) => {
  const { serviceName, serviceImage, status } = booking;
  return (
    <>
      <Col lg={4} md={6} sm={12} className="booking_card">
        <img src={`data:image/png;base64,${serviceImage}`} alt="" />
        <h5 >{serviceName}</h5>
        <p className={`${status ==='pending'?'pending':'done'}`}>{status}</p>
      </Col>
    </>
  );
};

export default BookingCard;
