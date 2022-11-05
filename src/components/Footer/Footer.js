import React from 'react';
import './Footer.css'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";
import toast from 'react-hot-toast';
import { useRef } from 'react';

const Footer = () => {
    const textRef = useRef();
   

    const handleSubmit = (event) =>{
       event.preventDefault();
            toast.success("We will Contact you soon");
       
    }
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

                        <form onSubmit={handleSubmit}>
                            <input  className='p-1 ' type="Email" placeholder='Email Address' /><br />
                            <input type='submit' className='mt-3 mb-3 btn btn-outline-dark ' value={'Submit'}/>
                        </form>

                        <div className='social-icons'>

                            <p>    <FaFacebook></FaFacebook> </p>
                            <p>   <FaInstagram></FaInstagram></p>
                            <p>  <FaGithub></FaGithub>  </p>
                            <p> <FaYoutube></FaYoutube> </p>
                            <p> <FaPinterest></FaPinterest>  </p>
                        </div>








                    </div>

                </div>
                <div className='copyRight-title'>
                     <p className='text-center'><small>Copyright © 2003-2022 Sunnah Furniture Industries. All Rights Reserved.</small></p>
                </div>
               
            </div>

        </>
    );
};

export default Footer;