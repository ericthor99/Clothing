import React                        from "react";
import { render }                   from "react-dom";
import { BrowserRouter }            from "react-router-dom";
import { Provider }                 from "react-redux";
import { PersistGate }              from "redux-persist/integration/react";
import { Elements }                 from "@stripe/react-stripe-js";
import App                          from "./App";
 
import { store, persistor }         from "./store/store";
import { stripePromise }            from "./utils/stripe/stripe.utils";

import                               "./index.scss";
 
// gggg

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <small>Running on http://localhost:{process.env.REACT_APP_PORT}</small> <hr/>
       <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <Elements stripe = { stripePromise }>
                   <App />
                </Elements>
               </BrowserRouter>
            </PersistGate>
          </Provider>    
  </React.StrictMode>,
  rootElement
);

