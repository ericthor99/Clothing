export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };


//  function 'removeItemFromCart'
//  => if there is existing cart item then decrease/increase the quantity
//  => if the quantity is one then remove from cart (or not ... keep it as an option)


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find ( 
    cartItem => cartItem.id === cartItemToRemove.id
  )
//  If the current quanity being reduced is === 1 then remove it (or something)
//
// if ( existingCartItem.quantity === 1 ) {
//   return cartItems.filter ( cartItem => cartItem.id !== cartItemToRemove.id)
// }

if (existingCartItem.quantity > 0 )
    { 
    return cartItems.map ( cartItem => cartItem.id === cartItemToRemove.id ? 
    { ...cartItem, quantity: cartItem.quantity -1 } : cartItem
    ) ;
};

 if (existingCartItem.quantity === 0 )
    {
    return cartItems.map ( cartItem => cartItem.id === cartItemToRemove.id 
        ? 
    { ...cartItem, quantity: 0 } : { ...cartItem }

// { ...cartItem, quantity: 0 } : { ...cartItem, quantity: cartItem.quantity }
   
  );
};



// export const removeItemFromCarts = (cartItems, cartItemToRemove) => {
//     if (cartItemToRemove.quantity === 1) {
//       return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
//     } else {
//       return cartItems.map(cartItem =>
//         cartItem.id === cartItemToRemove.id
//           ? { ...cartItem, quantity: --cartItem.quantity }
//           : { ...cartItem }
//       );
//     }
//   };

// return cartItems.map ( cartItem => cartItem.id === cartItemToRemove.id ? 
//   { ...cartItem, quantity: cartItem.quantity -1 }
// : cartItem
// );

};

// export const addItemToCart = (cartItems, cartItemToAdd) => {
//     console.log("About to try finding");
    
//     const existingCartItem = cartItems.find (
       
//         cartItem => cartItem.id === cartItemToAdd.id
//     );


// if ( existingCartItem ) {
//     return cartItems.map ( cartItem => 
//         cartItem.id === cartItemToAdd.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//             );
// }
// return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
// };

//  default addItemToCart;