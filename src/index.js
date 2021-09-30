import React, { StrictMode }    from 'react';
import ReactDOM                 from 'react-dom';
import { BrowserRouter }        from 'react-router-dom';
import { Provider }             from 'react-redux';
import App                      from './App';
import store                    from './redux/store';

//? -----------------------------------------------------------------------------

import                          './index.css';

//! =============================================================================


ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <App />
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