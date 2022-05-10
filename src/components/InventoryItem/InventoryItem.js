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
     <h4 className='mt-3 '>{name}</h4>
     
     
     <p>{description}</p>
     <p>Quantity :{Quantity}</p>
     <h4 className='mb-2 '>${price}</h4>

     <h6 >Suplier : {Supliername}</h6>

     <button className='btn btn-outline-dark  inventory-product-btn' >Delivered</button>
     <button className='btn btn-outline-dark  inventory-product-btn' >Order</button>
     {/* <h5 className='product-title '>{name}</h5> */}
       </div>
       </div>
      
    );
};

export default InventoryItems;