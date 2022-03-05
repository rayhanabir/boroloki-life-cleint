import React from "react";
import { Carousel } from "react-bootstrap";
import "./TopBanner.css";
import banner from "../../../images/banner.jpg";
const TopBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="First slide" />
          <Carousel.Caption>
            <h3>We Build Your Dream</h3>
            <p>
              Online Easte Agency, the mordern way to sell your own home, You
              can use Griffin Residential to market your property
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3>We Build Your Dream</h3>
          <p>
              Online Easte Agency, the mordern way to sell your own home, You
              can use Griffin Residential to market your property
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3>We Build Your Dream</h3>
          <p>
              Online Easte Agency, the mordern way to sell your own home, You
              can use Griffin Residential to market your property
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopBanner;
