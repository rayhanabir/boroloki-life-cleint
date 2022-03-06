import React from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h3>this is book page{serviceId}</h3>
        </div>
    );
};

export default Book;