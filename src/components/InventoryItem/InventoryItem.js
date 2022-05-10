import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItems = () => {
    const {id} = useParams();
    const [product , setProduct] = useState({});
    
    useEffect(()=>{
        const url =`http://localhost:5000/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setProduct(data));
    },[product]);
    const {name ,description , picture , price,Quantity ,Supliername }=product;
    return (
        <div className='product-detail-container'>
        <div className='product-detail'>
     <img className='' src={picture} alt="" />
   <div className='product-detail-title'>
   <h4 className='mt-3 '>{name}</h4>
     
     
     <p>{description}</p>
     
     
    
     <h6 >Supplier : {Supliername}</h6>
 <p>Quantity : {Quantity}</p>
<h4 className='mb-2 '>${price}</h4>
   </div>

   <div className=' product-details-btn '>
     {/* <div className='-one'> */}
      {
          Quantity === 0 ?   <button className='btn btn-outline-dark  '  disabled>Sold out</button> :   <button className='btn btn-outline-dark w-25 ml-3' >Delivered</button>
      }
     
  
    <button className='btn btn-outline-dark  w-25 order-btn' >Order</button>
  
     
   </div>
       </div>
       </div>
      
    );
};

export default InventoryItems;