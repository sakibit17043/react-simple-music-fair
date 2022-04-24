import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name,image,index} = props.item
  
    return (
        
        <div className='cart-info'>
            <div className="cart-details">
            <img src={image} alt="" />
             <h5>{name}</h5>

            </div>
            <FontAwesomeIcon onClick={()=>props.delete(index)} icon={faTrash}/>
           
         
        </div>
    );
};

export default Cart;