import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./Review.css";

const Review = () => {
  const [review, setReview] = useState({});
  const {user} = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...review };
    newInfo[field] = value;
    console.log(newInfo);
    setReview(newInfo);
  };
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
        console.log(data)
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
                onChange={handleOnBlur}
                name="name"
                defaultValue={user.displayName}
                placeholder="Your Name"
              />
              <input
                type="text"
                onChange={handleOnBlur}
                name="companyDesignation"
                required
                placeholder="Company Designation"
              />
              <textarea
                onChange={handleOnBlur}
                name="comment"
                required
                placeholder="Description"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Review;
