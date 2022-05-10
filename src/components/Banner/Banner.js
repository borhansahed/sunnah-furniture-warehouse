import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../../Images/photos1.jpg'
import logo1 from '../../Images/photos2.jpg'
import logo2 from '../../Images/photos3.jpg'
import logo3 from '../../Images/photo4.webp'
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
      {/* <h1 className='fst-italic fw-bold banner-title fs-xl'>Bassett</h1> */}
      <h2 className='caption-title'>20% OFF FOR YOUR FAMILY</h2>
      <p className='caption-subtitle'>ENJOY THIS EID</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" "
      src={logo2}
     
    />

    <Carousel.Caption>
    <h2 className='caption-title'>30% OFF BUY ONE GET TWO</h2>
      <p className='caption-subtitle'>ENJOY THIS EID</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=""
      src={logo}
      
    />

    <Carousel.Caption>
    <h2 className='caption-title'>60% OFF HURRY UP</h2>
      <p className='caption-subtitle'>ENJOY THIS EID</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/* <h2>Outdoor Furniture Collections</h2>
<div className='mt-5'>
 <img src={logo3} alt="" />
</div> */}
        </>
    );
};

export default Banner;