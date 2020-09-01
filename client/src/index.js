import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { GlobalProvider } from "./context/GlobalState";

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Elements stripe={stripePromise}>
      <App />
      </Elements>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
