import React from 'react';
import './CartButton.css';

const CartButton = ({reload,chooseItem,choosingItem}) => {
    
    return (
        <div>
            <p>

                <button className='cart-button' onClick={chooseItem} style={{ color: 'green' }}>CHOOSE 1 FOR ME</button>



            </p>
            <h1 style={{ display: choosingItem ? 'block' : 'none' }}>You can choise {choosingItem}</h1>

            <p>

                <button className='cart-button' onClick={reload} style={{ color: 'purple' }}>CHOOSE AGAIN</button>
            </p>

        </div>
    );
};

export default CartButton;