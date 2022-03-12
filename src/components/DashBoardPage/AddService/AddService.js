import React, { useState } from "react";
import {Alert} from 'react-bootstrap';
import "./AddService.css";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState(0);
  const [serviceDetails, setServiceDetails] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", serviceName);
    formData.append("price", servicePrice);
    formData.append("details", serviceDetails);
    formData.append("image", image);

    fetch("http://localhost:5000/services", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            setSuccess(true)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <section id="add_service">
        <div className="add_service_input_container">
          <div className="add_service_input_box">
            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                onChange={(e) => setServiceName(e.target.value)}
                placeholder="service title"
              />
              <input
                type="number"
                onChange={(e) => setServicePrice(e.target.value)}
                placeholder="service price"
              />
              <textarea
                onChange={(e) => setServiceDetails(e.target.value)}
                placeholder="service details"
              />

              <input type="file" onChange={e => setImage(e.target.files[0])} />
              <input type="submit" value="Submit" />
            </form>
            {success && <Alert variant='success' className="mt-4">Service Added Successfully</Alert>}
          </div>
          
        </div>
      </section>
    </>
  );
};

export default AddService;
