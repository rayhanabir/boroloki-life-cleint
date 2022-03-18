import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Book.css";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KdqUYDayzVvtfISgbEIl6g1HP37kq0ODrSHv3tQNRIWCpi93HvfTtTynNg4RlFPIk6GaWD7DkqWTKCPqXp7FrAo00f09wd8SN"
);

const Book = () => {
  const [booking, setBooking] = useState({});
  const [order, setOrder] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { user } = useAuth();
  const { serviceId } = useParams();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setOrder((prev) => ({
      ...prev,
      customerName: user.displayName,
      customerEmail: user.email,
    }));
  }, [user]);

  useEffect(() => {
    document.title = "book | Luxury Life";
  }, []);

  //set order object to order state;
  const orders = {
    serviceName: booking.name,
    status: "pending",
    serviceImage: booking.image,
    cutomerName: order.customerName,
    CustomerEmail: order.customerEmail,
    servicePrice:booking.price
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    fetch("http://localhost:5000/orders", {
      method: "POST",
      body: JSON.stringify(orders),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderSuccess(true);
          setOrder({});
          setBooking({});
        }
      });
  };

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [serviceId]);

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
                defaultValue={!!order.customerName ? order.customerName : ""}
              />

              <input
                type="text"
                name="customerEmail"
                onChange={handleOnChange}
                defaultValue={!!order.customerEmail ? order.customerEmail : ""}
              />

              <input
                type="text"
                name="serviceName"
                onChange={handleOnChange}
                defaultValue={!!booking.name ? booking.name : ""}
              />
              {/* <button type='submit'>Submit</button> */}
            </form>
              {/* stripe payment  */}
            <Elements stripe={stripePromise}>
              <CheckoutForm orders = {orders}/>
            </Elements>
            {orderSuccess && (
              <Alert variant="success" className="mt-4">
                order placed succefully
              </Alert>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
