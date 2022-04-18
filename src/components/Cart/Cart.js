import React from 'react';

const Cart = ({name}) => {
    console.log(name)
    return (
        <div>
           {
               name.map(name => <h1>{name}</h1>)
           }
        </div>
    );
};

export default Cart;