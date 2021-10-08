import React                                from 'react';

import { toggleCartHidden }                 from './../redux/cart/cart.actions';
import { connect }                          from 'react-redux';
import { selectCartItemsCount }             from '../redux/cart/cart.select';
import { createStructuredSelector }         from 'reselect';

import { ReactComponent as ShoppingIcon }   from './../assets/shopping-bag.svg';

import                                      './cart-icon.styles.scss';

const CartIcon = ( { toggleCartHidden, itemCount }) => (
    <div className = 'cart-icon' onClick={ toggleCartHidden } >
        <ShoppingIcon className='shopping-icon'/>
        <span className = 'item-count'>{itemCount}</span>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch ( toggleCartHidden() )
});

const mapStateToProps = createStructuredSelector ({
    itemCount:  selectCartItemsCount  
});

// const mapStateToProps = (state) => ({
//     itemCount:  selectCartItemsCount ( state )
// });
  
export default connect ( mapStateToProps, mapDispatchToProps ) ( CartIcon );

// ============================================================================
// Due to itemCount being a primitive (integer), redux will do a shallow equality 
// check under the hood between state changes in mapStateToProps. In this case having 
// a selector does not save us on any re-renders of the CartIcon component. If our 
// overall state changes but the itemCount value stays the same between these changes,  
// redux's shallow equality check will see that itemCount is the same value as last time 
// and save us a re-render. It's still valuable to keep the logic for the reduce in a 
// selector though because we do still want to memoize the calculation of itemCount 
// (our reduce logic), and without a selector our reduce logic would still be running 
// on every state change regardless of the final calculated value of itemCount.

// Redux's mapStateToProps has a shallow equality check for every value in the object; 
// it won't replace values if they pass a shallow equality check which means it won't 
// needlessly re-render, but if we have transformation logic it's still valuable to memoize 
// it with a selector to save us running duplicate logic to get the same output.