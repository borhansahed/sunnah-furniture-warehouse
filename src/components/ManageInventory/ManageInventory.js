
import toast from 'react-hot-toast';

import UseItems from '../../Hooks/UseItems';
import ManageItems from '../ManageItems/ManageItems';

import './ManageInventory.css';




const ManageInventory = () => {
    const [items , setItems] = UseItems();
    

   
        // delete manage product item
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure');
         if(proceed){
            const url = `https://sunnah-furniture-server.vercel.app/items/${id}`;
            fetch(url , {
                method:'DELETE'
            })
            .then(res =>res.json())
           .then(data =>{
              if(data.acknowledged === true){
                toast.success("Delete Successfully");

                  const remaining = items.filter(item => item._id !== id)
               setItems(remaining);
              }                
             
           })
         }
           
        };
    // add to my item 
   
   



    return (

      
              <>
<div class=" mx-auto lg:w-3/4 mt-20 mb-14">
  <table class="table lg:w-3/4">
   
    <thead className='mb-6'>
      <tr>
        <th></th>
        <th className='lg:text-xl font-medium'>Price</th>
        <th className=' lg:text-xl font-medium'>Quantity</th>
        <th className=' lg:text-xl font-medium'>Supplier</th>
      </tr>
    </thead>
    <tbody className=''>
    
    
       
      {
            items.map(item => <ManageItems key={item._id}
            item={item} handleDelete={handleDelete}
             ></ManageItems> )
        }
        
       
      
      
     
     
      
    </tbody>
 
  
    
  </table>
</div>

             
     
    

     
    </>
    
      
            
        
      
    );
};

export default ManageInventory;