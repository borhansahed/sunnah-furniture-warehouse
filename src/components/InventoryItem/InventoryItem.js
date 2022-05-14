import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItems = () => {
    const {id} = useParams();
    const [product , setProduct] = useState({});
    const [input , setInput] = useState(0);
   
   
   const handleInput = event=>{
   
     
   setInput(event.target.value)
   
  
   };
  
  //   = (event) =>{
  //      const item = event.target.value;
  //      console.log(item)
  // }
    const handleOrder = (event)=> {
      const orderQuantity = parseInt( input);
      
     
        const currentQuantity = parseInt(Quantity);
        const UpdateQuantity = {Quantity : currentQuantity + orderQuantity};
   
        const url =`https://lit-earth-64208.herokuapp.com/inventory/${id}`;
   
        fetch(url ,{
          method:'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(UpdateQuantity)
   
        })
        .then(res =>res.json())
        .then(data => data);
        alert('Update successfully')
   
           //  const QuantityPlus = hello +1;
           //  setHello(QuantityPlus);
        }
        





    
    useEffect(()=>{
        const url =`https://lit-earth-64208.herokuapp.com/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setProduct(data));
    },[product]);
    const {name ,description , picture , price,Quantity ,Supliername }=product;

     
     const handleDelivered = () => {
       
        const currentQuantity = parseInt(Quantity) - 1;
        const UpdateQuantity = {Quantity : currentQuantity};
   
        const url =`https://lit-earth-64208.herokuapp.com/inventory/${id}`;
   
        fetch(url ,{
          method:'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(UpdateQuantity)
   
        })
        .then(res =>res.json())
        .then(data => data);
        alert('Update successfully')
     }
     










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

   <div  className=' product-details-btn '>
     {/* <div className='-one'> */}
      {
          Quantity === 0 ?   <button className='btn btn-outline-dark w-25 '  disabled>Sold out</button> :   <button onClick={handleDelivered} className='btn btn-outline-dark w-25 ml-3' >Delivered</button>
      }

      <input onBlur={handleInput} className='w-25' type="number" name="number" id="" />
   
     <button onClick={handleOrder} className='btn btn-outline-dark  w-25 order-btn'  >  Order  </button>
      
  
  
     
   </div>
       </div>
       </div>
      
    );
};

export default InventoryItems;