import React, { useEffect, useState } from 'react';

const UseItems = () => {
   
        const [items , setItems] =useState([]);

        useEffect(() =>{
            fetch('https://lit-earth-64208.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
        },[])
        return [items , setItems]
};

export default UseItems;