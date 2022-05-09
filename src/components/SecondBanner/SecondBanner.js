import React from 'react';
import './SecondBanner.css'
import logo from '../../Images/photo4.webp'
import { Link } from 'react-router-dom';
const SecondBanner = () => {
    return (
        <div className='second-banner'>
           
           <img src={logo} alt="" />
           
<div className='second-banner-title'>
     <h3> Make the most of your time.</h3>
            <h4>Book a virtual design appointment or a<br />private in-store meeting today.Either way, <br />you'll get personal attention,expert design <br />assistance,and someone to help you get <br />  started with that project.</h4>
            <button className='btn btn-outline-light fs-5 text-dark ' ><Link to={'/inventory'} className='fst-italic'>Book Now</Link> </button> 
             
</div>
           
            
           
        </div>
    );
};

export default SecondBanner;