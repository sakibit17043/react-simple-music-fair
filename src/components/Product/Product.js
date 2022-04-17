import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Product = (props) => {
    // console.log(props.Product.image)
    // const {price} = props.Product;
    console.log(props.product.image)
    const {image,price,name} =props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            
                
                    <button className="btn-cart">
                        <p>ADD TO CART
                            <FontAwesomeIcon className='icon' icon={faShoppingCart}/>
                        
                        </p>
                        </button>
                
            

         
        </div>
    );
};

export default Product;