import React from 'react';

const Cart = ({name,reload}) => {
    console.log(name)
    console.log(name.length)
    const random = Math.floor(Math.random()*(name.length))
    const chooseItem = (random) =>{
        const item = name[random];
        alert(item)
    }
    
    
    return (
        <div>
           {
               name.map(name => <h1>{name}</h1>)
           }
           <p>

           <button onClick={()=>chooseItem(random)} style={{color:'green'}}>CHOOSE 1 FOR ME</button>
        
            
         
           </p>
           <p>

           <button onClick={reload} style={{color:'purple'}}>CHOOSE AGAIN</button>
           </p>
        </div>
    );
};

export default Cart;