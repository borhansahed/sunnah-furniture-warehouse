import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>


<div className='header-title text-center'>
               <p className='fst-italic'> <small>since 1900</small> 
               <span><h1 className='fw-bold' >Bassett</h1></span></p>
               
               
                   
                </div> 

        <hr className='first'/>
        <div className='header-container'>
            
         <div className='header-links'>
                <Link to="/home">Home</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/inventory">Managed Inventory</Link>
          </div>  
             <div className='mr-5'>
             <Link to="/login">Login</Link>
  
             </div>
                 
          </div>
        
           <hr className='second' />
          
        
        
        
        </>
        
    );
};

export default Header;