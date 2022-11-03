import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'


const Items = ({product}) => {
    const {name ,review , picture , ratings ,  }=product;
    return (
        <div className='product'>
      <img className='' src={picture} alt="" />
      
     <div className='homeButton'>
     <button className='btn  btn-outline-light  product-btn' ><Link to={'/inventory'}>{name}</Link> </button>
     </div>
      {/* <h5 className='product-title '>{name}</h5> */}
        </div>
    );
};

export default Items;