import React from 'react';
import toast from 'react-hot-toast';
import UseMyItem from '../../Hooks/UseMyitem';
import './Myitems.css'

const MyItems = () => {
 

    const [items, setItems] = UseMyItem();

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure');
         if(proceed){
            const url = `https://lit-earth-64208.herokuapp.com/items/${id}`;
            fetch(url , {
                method:'DELETE'
            })
            .then(res =>res.json())
           .then(data =>{
              if(data){
                toast.success("Delete Successfully");

                  const remaining = items.filter(item => item._id !== id)
               setItems(remaining);
              }else{
                return toast.error("Delete Unsuccessful");
              }               
             
           })
         }
           
        };
   
    return (
        <div>

         {
            items.length > 0 ? <h1 className='text-center lg:mt-10 mb-10  lg:text-2xl text-base'> My items</h1> : <h1 className='text-center lg:mt-20 mb-10  mt-16 lg:text-2xl text-base opacity-40'> Items not found</h1>
         }

         <div className='inventory-products'>
            {
                items.map((item , index) => {
                    const {name, price , description, picture, _id} = item;
                    return <>
                    <div key={index} className=''>
         <div className='inventory-product'>
      <img className='' src={picture} alt="" />
      <h4 className='mt-3 '>{name}</h4>
      
      <p>{description.slice(0,110)} ... <span>See more</span></p>
      <h4 className='mb-2 '>${price}</h4>
 
      

     <div className='product-details-btn'>
     <button  onClick={() => {handleDelete(_id)}} className='btn btn-outline-dark lg:w-96  inventory-product-btn ' >Delete</button>
     </div>
      {/* <h5 className='product-title '>{name}</h5> */}
        </div>
        </div>
                    
                    </>
                })
            }
         </div>
       
        </div>
    );
};

export default MyItems;