import React from 'react';
import { Table } from 'react-bootstrap';
import UseItems from '../../Hooks/UseItems';
import ManageItems from '../ManageItems/ManageItems';
import './ManageInventory.css';

const ManageInventory = () => {
    const [items] = UseItems();
    return (
        <>
    
      

        <div>

           {
                items.map(item => <ManageItems key={item._id}
                item={item}></ManageItems> )
            }
   
           
        </div>
        </>
    );
};

export default ManageInventory;