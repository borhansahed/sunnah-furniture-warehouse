import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../../Images/photos1.jpg'
import logo1 from '../../Images/photos2.jpg'
import logo2 from '../../Images/photos3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <>
        <Carousel className='banner-container'>
  <Carousel.Item>
    <img 
      className=" "
      src={logo1}
      
    />
    <Carousel.Caption>
      <h2>20% OFF FOR YOUR FAMILY</h2>
      <p>ENJOY THIS EID</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" "
      src={logo2}
     
    />

    <Carousel.Caption>
    <h2>30% OFF FOR YOUR FAMILY</h2>
      <p>ENJOY THIS EID</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=""
      src={logo}
      
    />

    <Carousel.Caption>
    <h2>60% OFF FOR YOUR FAMILY</h2>
      <p>ENJOY THIS EID</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;