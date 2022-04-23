import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import CartButton from '../CartButton/CartButton';
import Modal from '../Modal/Modal';
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
    const [choosingItem,setChoosingItem] = useState('')
    
// console.log(cartName)
    
   
    const handleAddToCart = (productDetails) =>{
        // if(cartNameincludes(productDetails)){
        // cartName.push(name);
        // if(cartName.length>4){

        // }
        console.log(cartName.length)
        const existItem = cartName.find(item => item.key===productDetails.key);
        if(!existItem && cartName.length<4){
        productDetails.index=cartName.length;
      const  newCartName = [...cartName,productDetails];
        setCartName(newCartName);
        console.log(productDetails)
        }
        // }
        


    }
    const deleteItem =(id) =>{
        const newCartName = cartName.filter(item => item.index !== id)
        console.log(newCartName)
        setCartName(newCartName)
    }
    
    const random = Math.floor(Math.random()*(cartName.length))
    const chooseItem = () =>{
        const item = cartName[random].name;
        // console.log(item)
        // alert(item)
        setChoosingItem(item);
      
    }


    const reload = () =>{
        setCartName([])
        setChoosingItem('')
    }
    
    

    return (
        <div>
                 {
                 
                 cartName.length>3?<Modal></Modal>:''
             }
          
        
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
              <div className="cart-information">
                  <h1>Selected Items</h1>

              
              {
                  cartName.map(item =><Cart
                  key={item.key}
          
                  item ={item}
                 
                  delete = {deleteItem}
                  
                  ></Cart>)
              }
            
             <CartButton
              
             reload = {reload}
             
             chooseItem = {chooseItem}
             choosingItem = {choosingItem}
             ></CartButton>
              
          </div>
          </div>
          
      </div>
        </div>
       
    );
};

export default Shop;