import React from 'react';
 
import Custombutton from './../../pages/Comps/custom-button.comp';

import './cart-dropdown.styles.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <Custombutton>GO TO CHECKOUT</Custombutton>
        </div>
    </div>
)

 

export default CartDropDown;