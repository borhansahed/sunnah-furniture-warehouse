import React, { useContext } from 'react';
import { ItemContext } from '../ManageInventory/ManageInventory';

const MyItems = ({myItem , removeItem}) => {
  const {name ,price , picture , _id}=myItem;
   
    return (
        <div>
         
          <h1>{name}</h1>
          <img style={{width:'15vh'}} src={picture} alt="" />
          <h5>{price}</h5>
          <button onClick={()=> removeItem(myItem)} className='btn btn-outline-dark'>Delete</button>
          {/* {
            myItems.map(item => <> <h2>item.name</h2></>)
          } */}
          {/* <img src={myItems.picture} alt="" />
          <h3>{myItems.Quantity}</h3>
          <h5>{myItems.price}</h5> */}
        </div>
    );
};

export default MyItems;