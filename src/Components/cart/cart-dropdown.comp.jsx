import React                            from 'react';
import { connect }                      from 'react-redux';

import Custombutton                     from './../../pages/Comps/custom-button.comp';
import CartItem                         from '../cart-item/cart-item.comp';
import { selectCartItems }              from '../../redux/cart/cart.select';
import { createStructuredSelector }     from 'reselect';


import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map ( cartItem => (
                    <CartItem key = {cartItem.id } item = { cartItem } />
                ))}
        </div>
        <Custombutton>
            GO TO CHECKOUT
        </Custombutton>
        
    </div>
);

const mapDispatchToProps =  createStructuredSelector ({ 
    cartItems: selectCartItems 
});

export default connect(mapDispatchToProps)(CartDropDown);