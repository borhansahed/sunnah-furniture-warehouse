import React from 'react';
import UseItems from '../../Hooks/UseItems';
import InventoryItems from '../InventoryItems/InventoryItems';
import './Inventory.css'

const Inventory = () => {
    const [products] = UseItems();
    return (
        <>
        <h3 className='text-center Inventory-products-title'>Shop Department Style</h3>
       <div className='inventory-products'>
           {
           
          products.map(product => <InventoryItems  key={product._id}
          product={product}></InventoryItems>
              )
        
           }
        </div>

        </>
    );
};

export default Inventory;