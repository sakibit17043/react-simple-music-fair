import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name,image,index} = props.item
    
    
    // {name,reload,chooseItem,choosingItem} = props;
    
    // const [choosingItem,setChoosingItem] = useState('')

    // const random = Math.floor(Math.random()*(name.length))
    // const chooseItem = (random) =>{
    //     const item = name[random];
    //     console.log(item)
    //     // alert(item)
    //     setChoosingItem(item);
      
    // }
   
    
    return (
        
        <div className='cart-info'>
            <div className="cart-details">
            <img src={image} alt="" />
             <h3>{name}</h3>

            </div>
            <FontAwesomeIcon onClick={()=>props.delete(index)} icon={faTrash}/>
           
           {/* <p>

           <button onClick={chooseItem} style={{color:'green'}}>CHOOSE 1 FOR ME</button>
        
            
         
           </p>
           <h1 style={{display:choosingItem?'block':'none'}}>You can choise {choosingItem}</h1>
           
           <p>

           <button onClick={reload} style={{color:'purple'}}>CHOOSE AGAIN</button>
           </p> */}
        </div>
    );
};

export default Cart;