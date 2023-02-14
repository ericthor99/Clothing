import { useEffect }                    from 'react';
import { useDispatch }                  from 'react-redux';

import { Routes, Route }                from 'react-router-dom';

import Home                             from './routes/home/home.comp';
import Navigation                       from './routes/navigation/navigation.comp';
import Authentication                   from './routes/authentication/authentication.comp';
import Shop                             from './routes/shop/shop.comp';
import Checkout                         from './routes/checkout/checkout.comp';
import { checkUserSession }             from './store/user/user.action';
//! =====================================================================================


const App = () => {
  const dispatch = useDispatch();

// -------------------------  Run Once to import data into Firestore database  -------------------
//   useEffect( () => {
//     addCollectionAndDocuments('categories', SHOP_DATA)
// }, []);
// -------------------------------------------------------------------------------------------------


  useEffect(() => {
    dispatch(checkUserSession());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  return (
    <Routes>
      <Route path='/'           element={<Navigation />}>
        <Route index            element={<Home />} />
        <Route path='shop/*'    element={<Shop />} />
        <Route path='auth'      element={<Authentication />} />
        <Route path='checkout'  element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

// import SHOP_DATA  from './Data/shop-data';
// import { addCollectionAndDocuments } from './utils/firebase/firebase.utils';