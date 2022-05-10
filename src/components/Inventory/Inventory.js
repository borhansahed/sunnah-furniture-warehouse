import React from 'react';
import UseInventory from '../../Hooks/UseInventory';
import InventoryItems from '../InventoryItems/InventoryItems';
import './Inventory.css'

const Inventory = () => {
    const [products] = UseInventory();
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