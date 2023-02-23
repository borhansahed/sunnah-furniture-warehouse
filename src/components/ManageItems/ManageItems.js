import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './ManageItems.css'


const ManageItems = ({item , handleDelete}) => {
    const {name ,Quantity , price ,Supliername , picture , _id}=item;
    const navigate = useNavigate();

   const handleProduct = (id) =>{
       navigate(`/inventory/${id}`);

   }

    return (
     
    
         <tr  className=''>
          
               <td onClick={() => handleProduct(_id)}> <img src={picture} alt="" /></td> 
           
            <td onClick={() => handleProduct(_id)}>{price}</td> 
            <td onClick={() => handleProduct(_id)}>{Quantity} </td> 
            <td onClick={() => handleProduct(_id)}>{Supliername} </td> 
           
 <td className='manageButton'> <button onClick={()=>handleDelete(_id)} className='btn  btn-outline-dark  '>Delete</button> </td> 
        </tr>


     
   
   
   
  
    );
};

export default ManageItems;