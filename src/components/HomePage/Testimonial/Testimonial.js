import React from 'react';
import { Container } from 'react-bootstrap';
import ReviewCard from '../../OtherPage/ReviewCard/ReviewCard';

const Testimonial = () => {
    return (
        <>
          <section id="testimonial" className='my-5'>
             <Container>
             <h2 className='text-center mb-5'>Testimonial</h2>  
             <ReviewCard/>
             </Container>
          </section>  
        </>
    );
};

export default Testimonial;