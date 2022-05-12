import React, { useEffect, useState } from 'react';

const UseInventory = () => {
    const [products , setProducts] =useState([]);

    useEffect(() =>{
        fetch('https://lit-earth-64208.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return [products , setProducts]
        
};

export default UseInventory;