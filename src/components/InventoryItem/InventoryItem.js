import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {  useParams } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItems = () => {
    const {id} = useParams();
    const [product , setProduct] = useState({});
  
   
   
   
   
  
  
    const handleOrder = ()=> {
      
      
     
        const currentQuantity = parseInt(Quantity) + 1;
        const UpdateQuantity = {Quantity : currentQuantity};
   
        const url =`https://warehouse-server-evqx.onrender.com/items/${id}`;
   
        fetch(url ,{
          method:'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(UpdateQuantity)
   
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.modifiedCount > 0){
             toast.success('Update successfully')
          }else{
            toast.error("Update Unsuccessful")
          }
        });
        }
 
    useEffect(()=>{
        const url =`https://warehouse-server-evqx.onrender.com/items/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setProduct(data));
    },[product,id]);
    const {name ,description , picture , price,Quantity ,Supliername }=product;

     
     const handleDelivered = () => {
       
        const currentQuantity = parseInt(Quantity) - 1;
        const UpdateQuantity = {Quantity : currentQuantity};
   
        const url =`https://warehouse-server-evqx.onrender.com/items/${id}`;
   
        fetch(url ,{
          method:'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(UpdateQuantity)
   
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.modifiedCount > 0){
             toast.success('Update successfully')
          }else{
            toast.error("Update Unsuccessful")
          }
        });
       
       
     }
     










    return (
        <div className='product-detail-container'>
        <div className='product-detail'>
     <img className='' src={picture} alt="" />

   <div className='product-detail-title'>
   <h4 className='mt-3 '>{name?.slice(0,10)}</h4>
     
     
     <p>{description?.slice(0,190)}.</p>
     
     
    
     <h6 >Supplier : {Supliername}</h6>
 <p>Quantity : {Quantity}</p>
<h4 className='mb-2 '>${price}</h4>
<div  className=' product-details  mt-4'>
      {
          Quantity === 0 ?   <button className='btn btn-outline-dark w-22 '  disabled>stock out</button> :   <button onClick={handleDelivered} className='btn btn-outline-dark w-22 ml-3' >Decrement</button>
      }

   
   
     <button onClick={handleOrder} className='btn btn-outline-dark  w-22 order-btn'  >  Increment  </button>
      
  
  
     
   </div>
   </div>

   
       </div>
       </div>
      
    );
};

export default InventoryItems;