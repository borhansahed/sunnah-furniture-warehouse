import React, { useEffect, useState } from 'react';

const UseInventory = () => {
    const [products , setProducts] =useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return [products , setProducts]
        
};

export default UseInventory;