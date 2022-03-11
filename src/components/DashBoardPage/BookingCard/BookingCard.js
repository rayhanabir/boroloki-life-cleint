import React from "react";
import { Col } from "react-bootstrap";
import "./BookingCard.css";

const BookingCard = ({ booking }) => {
  const { serviceName, serviceImage } = booking;
  return (
    <>
      <Col lg={4} md={6} sm={12} className="booking_card">
        <img src={serviceImage} alt="" />
        <h5>{serviceName}</h5>
      </Col>
    </>
  );
};

export default BookingCard;
