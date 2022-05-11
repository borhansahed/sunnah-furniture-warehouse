import React from 'react';
import UseItems from '../../Hooks/UseItems';
import './ManageItems.css'

const ManageItems = ({item , handleDelete}) => {
    const {name ,Quantity , price ,Supliername , picture , _id}=item;
    const [items,setItems]=UseItems()

    // const handleDelete = (id) =>{
    //     const proceed = window.confirm('Are you sure');
    //     if (proceed){
    //        const url = `http://localhost:5000/items/${id}`;
    //        fetch(url , {
    //            method:'DELETE'
    //        })
    //        .then(res =>res.json())
    //        .then(data =>{
    //            console.log(data)
    //            const remaining = items.filter(item => item._id !== id)
    //            setItems(remaining);
    //        })
    //     };
    // }
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
             <div className='table-btn'>
             <button className='btn btn-outline-dark'>Add new item</button>
              <button onClick={() => handleDelete(_id)} className='btn btn-outline-dark '>Delete</button>
             </div>
          </tr>

        </tbody>
    </table>
   
   
   
  
       </>
    );
};

export default ManageItems;