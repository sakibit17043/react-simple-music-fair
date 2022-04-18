import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const products =[
        {key:1,name:'Microphone',price:'100',image:'images/1.webp'},
        {key:2,name:'Piano',price:'1200',image:'images/2.webp'},
        {key:3,name:'Modern Microphone',price:'130',image:'images/3.webp'},
        {key:4,name:'Mixer',price:'1800',image:'images/4.webp'},
        {key:5,name:'Golden Trumpet',price:'1100',image:'images/5.webp'},
        {key:6,name:'Pipe',price:'30',image:'images/6.webp'},
        {key:7,name:'Drums',price:'2800',image:'images/7.webp'},
        {key:8,name:'Violin',price:'1500',image:'images/8.webp'},
        {key:9,name:'Guitar',price:'350',image:'images/9.webp'}
    ];
    const [cartName,setCartName] = useState([])
    
   
    const handleAddToCart = (name) =>{
        // cartName.push(name);
      const  newCartName = [...cartName,name]
        setCartName(newCartName);
        // console.log(cartName)


    }
    
    

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =><Product
                    key={product.key}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product> )
                }
                
            </div>
            <div className="cart-container">
              
               <Cart name ={cartName}></Cart>
                
            </div>
            
        </div>
    );
};

export default Shop;