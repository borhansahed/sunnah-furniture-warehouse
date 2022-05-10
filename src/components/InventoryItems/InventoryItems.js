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
      <h4 className='mt-3 '>{name}</h4>
      
      <p>{description.slice(0,110)} ... <Link to={'/myitems'}>See more</Link></p>
      <h4 className='mb-2 '>${price}</h4>
 
      

      <button onClick={ProductDetail} className='btn btn-outline-dark w-100  inventory-product-btn' >update</button>
      {/* <h5 className='product-title '>{name}</h5> */}
        </div>
        </div>
       
    );
};

export default InventoryItems;