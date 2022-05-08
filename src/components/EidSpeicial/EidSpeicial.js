import React from 'react';
import './EidSpeicial.css';
import logo from '../../Images/photos5.webp'
import logo1 from '../../Images/photos6.webp'
import logo2 from '../../Images/photos7.webp'

const EidSpeicial = () => {
    return (
        <div className=''>
            <h1 className='text-center  second-part-title'>Complete the Look </h1> 
            <div className='card-container  '>
                <div>
                    <img src={logo} alt="" />
                  <h5 className='text-center mt-3'>Umbrellas</h5>
                  <p className='text-center'>A collection of the finest fabrics coordinated to <br /> our collection of wood finishes.</p>
                </div>
                <div>
                    <img src={logo1} alt="" />
                  <h5 className='text-center mt-3'>Rugs</h5>
                  <p className='text-center mt-3'>Our collection of outdoor rugs is a palette of <br /> patterns, textures and colors. They're designed to <br /> be outdoor-friendly but beautiful enough to live <br /> inside.</p>
                </div>
                <div>
                    <img src={logo2} alt="" />
                  <h5 className='text-center mt-3'>Accents</h5>
                  <p className='text-center mt-3'>Give your outdoor space a designer touch with <br /> accent pillows in attractive patterns and colors, all <br /> selected to marry perfectly with our outdoor <br /> fabrics.</p>
                </div>
            </div>

        </div>
    );
};

export default EidSpeicial;