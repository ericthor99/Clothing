// import React, { StrictMode }    from 'react';
import ReactDOM                 from 'react-dom';
import { BrowserRouter }        from 'react-router-dom';
import { Provider }             from 'react-redux';
import App                      from './App';
import { store, persistor }     from './redux/store';
import { PersistGate }          from 'redux-persist/integration/react';
//? -----------------------------------------------------------------------------

import                          './index.css';

//! =============================================================================


ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
    <PersistGate persistor = { persistor }>
      <App />    
    </PersistGate>

    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
); 
// ReactDOM.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
//   document.getElementById('root')
// ); 