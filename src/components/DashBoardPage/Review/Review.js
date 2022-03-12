import React, { useState ,useEffect} from "react";
import {Alert} from 'react-bootstrap';
import useAuth from "../../../hooks/useAuth";
import "./Review.css";

const Review = () => {
  const [review, setReview] = useState({});
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const {user} = useAuth();
  console.log(review);
  
  const handleOnChange =(e)=>{
      setReview(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  useEffect(()=>{
    setReview(prev=>({...prev, name :user.displayName, companyDesignation:'rayhan'}))
  },[user.displayName])

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/review", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-type": "application/json",
      }
    })
    .then(res => res.json())
    .then(data =>{
        if(data.insertedId){
          setReviewSuccess(true);
          setReview({})
        }
    })
  };
  return (
    <>
      <section id="review">
        <div className="review_input">
          <div className="review_input_box">
            <h3>Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <input
                type="text"
                onChange={handleOnChange}
                name="name"
                value={review.name || ''}
                placeholder="Your Name"
              />
              <input
                type="text"
                onChange={handleOnChange}
                name="companyDesignation"
                value={review.companyDesignation || ''}
                required
                placeholder="Company Designation"
              />
              <textarea
                onChange={handleOnChange}
                name="comment"
                value={review.comment || ''}
                required
                placeholder="Description"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
            {reviewSuccess && <Alert variant='success' className="mt-4">Thanks For Your Valuable Comment</Alert>}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Review;
