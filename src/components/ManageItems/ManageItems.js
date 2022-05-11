import React from 'react';
import './ManageItems.css'

const ManageItems = ({item}) => {
    const {name ,Quantity , price ,Supliername , picture}=item;
    return (
       <>
    <table className='c'>
        <thead>
          <tr>
              <th>
                
              </th>
              <th>
                  Name
              </th>
              <th>
                  Price
              </th>
              <th>
                  Quantity
              </th>
              <th>
                 Supplier
              </th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td><img src={picture} alt="" /></td>
              <td>{name}</td>              

              <td> {price}</td>
              <td> {Quantity}</td>
              <td> {Supliername}</td>
          </tr>
        </tbody>
    </table>
   
   
   
  
       </>
    );
};

export default ManageItems;