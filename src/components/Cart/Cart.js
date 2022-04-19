import React from 'react';
import './Cart.css'

const Cart = ({name}) => {
    
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
           
                <h1>{name}</h1>
           
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