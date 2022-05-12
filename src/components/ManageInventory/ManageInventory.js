import React, {  useState } from 'react';

import UseItems from '../../Hooks/UseItems';
import ManageItems from '../ManageItems/ManageItems';
import MyItems from '../MyItems/MyItems';

import './ManageInventory.css';




const ManageInventory = () => {
    const [items , setItems] = UseItems();
    const [myItems , setMyItems] = useState([]);
    console.log(myItems);

    // console.log(items[0].Quantity)
   
        
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure');
         if(proceed){
            const url = `https://lit-earth-64208.herokuapp.com/items/${id}`;
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
        const exist =myItems.find((singleProduct)=> {return singleProduct._id === product._id})
        // console.log(findSameProduct)
        if(!exist){
              newCart = [...myItems , product];
        }
        else{
            return alert('already added')
        }
       
       
       
       setMyItems(newCart);
     }
     const removeItem = (item) => {
      const rest = myItems.filter(pd => pd._id !== item._id);
    setMyItems(rest);
    
   
     }



    return (

      
              <>
    
      

    <div>

       {
            items.map(item => <ManageItems key={item._id}
            item={item} handleDelete={handleDelete}
            addToItem={addToItem} ></ManageItems> )
        }

       
    </div>
    <div>
      
        {

           myItems.map(myItem => <MyItems key={myItem._id}
           myItem={myItem} removeItem={removeItem}></MyItems> )
        }
    </div>
    

     
    </>
    
      
            
        
      
    );
};

export default ManageInventory;