import { useEffect, useState } from 'react';

const UseItems = () => {
   
        const [items , setItems] =useState([]);

        useEffect(() =>{
            fetch('https://sunnah-furniture-server.vercel.app/items')
            .then(res => res.json())
            .then(data => setItems(data));
        },[])
        return [items , setItems]
};

export default UseItems;