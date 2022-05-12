import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddItems = () => {
   const { register, handleSubmit } = useForm();
  const onSubmit = data => {
     const url = `https://lit-earth-64208.herokuapp.com/items`;
     fetch(url , {
        method:'POST',
        headers:{
           'content-type': 'application/json'
        },
        body: JSON.stringify(data)
     })
     .then(res=>res.json())
     .then(data =>{
        console.log(data)
     })
    
  };
  
    return (
       <>
        <div>
        
        <div className='login-container mb-5'>
        <h3 className='text-center'>Add Your Item</h3>
      <div   className='mx-auto'>
      <Form onSubmit={handleSubmit(onSubmit)} className=' form-container ' >
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>name</Form.Label>
<Form.Control type="text" placeholder="Enter Name" {... register ("name" , {required : true , maxLength: 20})}  />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>img</Form.Label>
<Form.Control  type="text" placeholder="link" {... register ("picture" , {required : true })}/>

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