import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItems = () => {
    const handleAddItem = ()=> {

    }
    return (
       <>
        <div>
        
        <div className='login-container mb-5'>
        <h3 className='text-center'>Add Your Item</h3>
      <div   className='mx-auto'>
      <Form onSubmit={handleAddItem} className=' form-container ' >
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>name</Form.Label>
<Form.Control type="text" placeholder="Enter Name" />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>img</Form.Label>
<Form.Control  type="email" placeholder="link" />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>price</Form.Label>
<Form.Control  type="email" placeholder="$" />

</Form.Group>
<Form.Group className="mb-3" controlId="">
<Form.Label>supplier</Form.Label>
<Form.Control   type="text" placeholder="name" required />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>quantity</Form.Label>
<Form.Control  type="email" placeholder="" />

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