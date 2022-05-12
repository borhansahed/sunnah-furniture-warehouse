import React from 'react';
import './Footer.css'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub} from "@react-icons/all-files/fa/FaGithub";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";

const Footer = () => {
    return (
        <>
        <div className='footer'>
        <div className='footer-main-container'>
            <div className='footer-container'>
                <div>
                    <h6 className='mb-3'>ABOUT US</h6>
                    <p>Vision & Values</p>
                    <p> Your Story</p>
                    <p>Store Reviews</p>
                    <p>Careers</p>
                    <p> Investors</p>
                    <p>Our Community Impact</p>

                    <p>Environmental Initiatives</p>
                    <p>Military & First Responders Discount</p>
                </div>
                <div>
                    <h6 className='mb-3'>RESOURCES</h6>
                    <p>Upholstery Warranty</p>
                    <p> Wood Warranty</p>
                    <p> Catalog</p>
                    <p> Product Registration</p>
                    <p>Product Safety</p>
                    <p> Bassett Community</p>

                </div>
                <div>
                    <h6 className='mb-3'>CUSTOMER SERVICE</h6>
                    <p>Shipping & Delivery</p>
                    <p>Return Policy
                    </p>
                    <p> Preference Center
                    </p>
                    <p>  Bassett Credit Card</p>
                    <p>  Online Terms</p>
                    <p> Privacy</p>
                    <p></p>
                    <p> Accessibility</p>
                    <p> FAQs</p>
                    <p> Contact Us</p>
                </div>

            </div>
            <div className='social-container'>
                <h4 className='text-center'>SOCIAL</h4>

              <div className=''>
              <input className='p-1 ' type="text" placeholder='Email Address' /><br />
                <button className='mt-2 btn btn-outline-dark '>Submit</button>
              </div>

                <div className='social-icons'>

                    <p>    <FaFacebook></FaFacebook> </p>
                    <p>   <FaInstagram></FaInstagram></p>
                    <p>  <FaGithub></FaGithub>  </p>
                    <p> <FaYoutube></FaYoutube> </p>
                    <p> <FaPinterest></FaPinterest>  </p>
                </div>
             
                
            
              
               
               
                
                
            </div>
            
        </div>
         <p className='text-center mt-4'><small>Copyright © 2003-2022 Bassett Furniture Industries. All Rights Reserved.</small></p>
        </div>
       
        </>
    );
};

export default Footer;