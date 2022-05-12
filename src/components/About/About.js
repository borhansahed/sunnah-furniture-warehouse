import React from 'react';
import './About.css'
import logo from '../../Images/my-bg.png'

const About = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <img src={logo} alt="" />
                </div>
            <h3 className='text-center mt-5 mb-2'>Iam Mohammad Sahed</h3>
            <div className=' mx-auto mb-5 about-text'>
                <p>My mission is learn web development properly! And try to learn more about programming.This is year my vision is learn complete web development with Jhankar Mahbub! I want to intern this year.And i want to Develop my skills. My goals is want to be world class programmer. I want to learn full stack development ! I want create many apps and websites! Inshaallah i can do it!</p>
            </div>
        </div>
    );
};

export default About;