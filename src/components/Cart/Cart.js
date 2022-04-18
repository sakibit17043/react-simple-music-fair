import React from 'react';

const Cart = ({name,reload}) => {
    
    
    return (
        <div>
           {
               name.map(name => <h1>{name}</h1>)
           }
           <p>

           <button style={{color:'green'}}>CHOOSE 1 FOR ME</button>
           </p>
           <p>

           <button onClick={reload} style={{color:'purple'}}>CHOOSE AGAIN</button>
           </p>
        </div>
    );
};

export default Cart;