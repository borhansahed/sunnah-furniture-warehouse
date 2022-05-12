import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems';
import ManageItems from '../ManageItems/ManageItems';
import MyItems from '../MyItems/MyItems';

import './ManageInventory.css';


export const ItemContext = createContext('item');

const ManageInventory = () => {
    const [items , setItems] = UseItems();
    const [myItems , setMyItems] = useState([]);
    console.log(myItems);

    // console.log(items[0].Quantity)
    const navigate = useNavigate();
        const sahed = 'sahed';
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
    // add to my item 
   
    const addToItem = (product) => {
        let newCart = []
        // const exist =myItems.find((singleProduct)=> {return singleProduct.id === product.id})
        // console.log(findSameProduct)
       
         newCart = [...myItems , product];
       
       setMyItems(newCart);
     }
     const removeItem = (item) => {
      const rest = myItems.filter(pd => pd.id !== item.id);
    setMyItems(rest);
    
   
     }



    return (

      
              <>
    
        <ItemContext.Provider value={sahed}>

    <div>

       {
            items.map(item => <ManageItems key={item._id}
            item={item} handleDelete={handleDelete}
            addToItem={addToItem} ></ManageItems> )
        }

       
    </div>
    {/* <div>
      
        {

           myItems.map(myItem => <MyItems key={myItem._id}
           myItem={myItem} removeItem={removeItem}></MyItems> )
        }
    </div> */}
    <MyItems></MyItems>

      </ItemContext.Provider>
    </>
    
      
            
        
      
    );
};

export default ManageInventory;