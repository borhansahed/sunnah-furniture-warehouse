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
     
         <tr onClick={() => handleProduct(_id)} className=''>
          
               <td > <img src={picture} alt="" /></td> 
           
            <td className=''>{price}</td> 
            <td>{Quantity} </td> 
            <td>{Supliername} </td> 
            <td className='manageButton'> <button onClick={()=>handleDelete(_id)} className='btn  btn-outline-dark  '>Delete</button> </td> 

        </tr>


     
   
   
   
  
    );
};

export default ManageItems;