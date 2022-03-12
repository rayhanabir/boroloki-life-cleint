import React,{useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const ReviewCard = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    
    return (
        <>
        <Swiper
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            reviews.map(review =><SwiperSlide key={review._id}>
                <div className='rounded p-3'>
                <p>{review.comment.slice(0, 106)}</p>
                <h5 className='text-dark'>{review.name}</h5>
                <p><small>{review.companyDesignation}</small></p>
                </div>
            </SwiperSlide>)
        }
        
      </Swiper>  
        </>
    );
};

export default ReviewCard;
