import React from 'react';

import './ManageItems.css'

const ManageItems = ({item , handleDelete}) => {
    const {name ,Quantity , price ,Supliername , picture , _id}=item;

    return (
      
        
         <tr className=''>
       
               <td > <img src={picture} alt="" /></td> 
           
            <td className=''>{price}</td> 
            <td>{Quantity} </td> 
            <td>{Supliername} </td> 
            <td className='manageButton'> <button onClick={()=>handleDelete(_id)} className='btn  btn-outline-dark  '>Delete</button> </td> 
       
            
         
            
        
        </tr>
      

     
   
   
   
  
    );
};

export default ManageItems;