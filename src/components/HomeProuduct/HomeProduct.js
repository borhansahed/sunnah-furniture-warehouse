import React from 'react';
import UseInventory from '../../Hooks/UseInventory';
import Items from '../Items/Items';
import './HomeProduct.css'
const HomeProduct = () => {
    const[products ] =UseInventory()
    return (
        <>
        <h3 className='text-center products-title mb-10'>Shop Each Department For your Style</h3>
       <div className='products'>
           {
           
          products.map(product => <Items key={product._id}
          product={product}></Items> )
        
           }
        </div>

        </>
    );
};

export default HomeProduct;