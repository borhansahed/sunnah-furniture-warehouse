import React, { useEffect, useState } from 'react';

const UseItems = () => {
   
        const [items , setItems] =useState([]);

        useEffect(() =>{
            fetch('https://warehouse-server-evqx.onrender.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
        },[])
        return [items , setItems]
};

export default UseItems;