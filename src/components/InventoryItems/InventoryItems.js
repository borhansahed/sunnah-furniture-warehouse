import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './InventoryItems.css'

const InventoryItems = ({product}) => {
 const {name ,description , picture , price , _id }=product;
 const navigate = useNavigate();
    const ProductDetail = () => {
      const path = `/inventory/${_id}`;
      navigate(path);
    }
    
   
    return (
        <div className=''>
         <div className='inventory-product'>
      <img className='' src={picture} alt="" />

      <div>
         <h4 className='mt-3 '>{name.slice(0,10)}</h4>
      
      <p>{description.slice(0,110)} ... <span onClick={ProductDetail}>See more</span></p>
      <h4 className='mb-2 '>${price}</h4>
      <div className='product-details-btn'>
     <button onClick={ProductDetail} className='btn btn-outline-dark lg:w-96  inventory-product-btn ' >update</button>
     </div>
      </div>
     
 
      

     
      {/* <h5 className='product-title '>{name}</h5> */}
        </div>
        </div>
       
    );
};

export default InventoryItems;