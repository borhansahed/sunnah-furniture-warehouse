import React from 'react';
import { Table } from 'react-bootstrap';
import UseItems from '../../Hooks/UseItems';
import ManageItems from '../ManageItems/ManageItems';
import './ManageInventory.css';

const ManageInventory = () => {
    const [items , setItems] = UseItems();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure');
         if(proceed){
            const url = `http://localhost:5000/items/${id}`;
            fetch(url , {
                method:'DELETE'
            })
            .then(res =>res.json())
           .then(data =>{
               console.log(data)
               const remaining = items.filter(item => item._id !== id)
               setItems(remaining);
           })
         }
           
        };
    return (
        <>
    
      

        <div>

           {
                items.map(item => <ManageItems key={item._id}
                item={item} handleDelete={handleDelete} ></ManageItems> )
            }
   
           
        </div>
        </>
    );
};

export default ManageInventory;