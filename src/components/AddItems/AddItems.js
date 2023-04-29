import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase-init';
import './AddItems.css'

const AddItems = () => {
   const [user] = useAuthState(auth);
   const navigate = useNavigate();
   const { register, handleSubmit } = useForm();
   const email = user?.email;
  const onSubmit = data => {
    const {name,price , picture, Supliername,Quantity, description} = data;
    const num = parseInt(Quantity)
    const mainData = {
         name:name,
         price:price,
         picture: picture,
         Supliername:Supliername,
         email: email,
         Quantity: num,
         description:description
         
    }

     const url = `https://sunnah-furniture-server.vercel.app/items`;
     fetch(url , {
        method:'POST',
        headers:{
           'content-type': 'application/json'
        },
        body: JSON.stringify(mainData)
     })
     .then(res=>res.json())
     .then(data =>{
        if(data.acknowledged === true){
         toast.success("Successfully added");
         setTimeout(()=>{
           navigate('/')
         },1000)
        }else{
         toast.error("Adding failed")
        }
     })
    
  };
  
    return (
       <>
        <div>
        
        <div className='login-container mb-5 mt-12 lg:mt-8'>
        <h3 className='text-center text-xl mt-10 lg:text-2xl'>Add Your Item</h3>
      <div   className='mx-auto'>
      <Form onSubmit={handleSubmit(onSubmit)} className=' form-container ' >
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>name</Form.Label>
<Form.Control type="text" placeholder="item name" {... register ("name" , {required : true , maxLength: 50})}  />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>description</Form.Label>
<Form.Control type="text" placeholder="About item" {... register ("description" , {required : true })} required  />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>img</Form.Label>
<Form.Control  type="url" placeholder="link" {... register ("picture" , {required : true })}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>price</Form.Label>
<Form.Control  type="number" placeholder="$" {... register ("price" , {required : true})}  />

</Form.Group>
<Form.Group className="mb-3" controlId="">
<Form.Label>supplier</Form.Label>
<Form.Control   type="text" placeholder="name" {... register ("Supliername" , {required : true })} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>quantity</Form.Label>
<Form.Control  type="number" placeholder="" {... register ("Quantity" , {required : true})} />

</Form.Group>


<Button variant="btn btn-outline-dark d-block w-100 mb-3" type="submit">
Add Item
</Button>



</Form>
      </div>
    </div>
    </div>
       </>
    );
};

export default AddItems;