import React                            from 'react';
import { connect }                      from 'react-redux';

import CustomButton                     from './../../pages/Comps/custom-button.comp';
import CartItem                         from '../cart-item/cart-item.comp';
import { selectCartItems }              from '../../redux/cart/cart.select';
import { createStructuredSelector }     from 'reselect';
// import { withRouter } from 'react-router-dom';


import './cart-dropdown.styles.scss';


//! ---------------------------------------------------------------------
// const CartDropDown = ({ cartItems }) => (
//     <div className='cart-dropdown'>
//         <div className='cart-items'>
//             { cartItems.length ? (
//                 cartItems.map ( cartItem => (
//                     <CartItem key = {cartItem.id } item = { cartItem } />
//             )) 
//             ) : (
//                 <span className = 'empty-message'>Your cart is empty</span>
//             )}
//         </div>
//         <CustomButton
//             // onClick={ () => {
//             // history.push('/checkout');
//             // dispatch(toggleCartHidden());
//     //   }}
//         >
//             GO TO CHECKOUT
//         </CustomButton>
        
//     </div>
// );

// const mapDispatchToProps =  createStructuredSelector ({ 
//     cartItems: selectCartItems 
// });

// export default connect(mapDispatchToProps)(CartDropDown);


//! ---------------------------------------------------------------------


// export default withRouter(connect(mapStateToProps)(CartDropdown));
//! ---------------------------------------------------------------------


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
  });
  
  export default connect(mapStateToProps)(CartDropdown);