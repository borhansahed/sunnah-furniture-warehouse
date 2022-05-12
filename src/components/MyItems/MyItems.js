import React, { useContext } from 'react';
import { ItemContext } from '../ManageInventory/ManageInventory';

const MyItems = () => {
    const {sahed} = useContext(ItemContext);
    return (
        <div>
          <h1>{sahed}</h1>
          <h1></h1>
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