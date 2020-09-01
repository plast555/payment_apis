import React, { useState, useRef, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import { PayPalButton } from "react-paypal-button-v2";

const PayWithPayPal = () => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  const { cart, total } = useContext(GlobalContext)

  //   useEffect(() => {
  //     window.paypal
  //       .Buttons({
  //         // 1. Create Order
  //         createOrder: (data, actions) => {
  //           return actions.order.create({
  //             intent: "CAPTURE",
  //             purchase_units: [
  //               {
  //                 description: "Keyboard store checkout",
  //                 amount: {
  //                   currency_code: "USD",
  //                   value: 89,
  //                 },
  //               },
  //             ],
  //           });
  //         },
  //         onApprove: async (data, actions) => {
  //           const order = await actions.order.capture();
  //           setPaidFor(true);
  //           console.log(order);
  //         },
  //         onError: err => {
  //           setError(err);
  //           console.error(err);
  //         },
  //       })
  //       .render(paypalRef.current);
  //   }, []);

  //   if (paidFor) {
  //     return (
  //       <div class="alert alert-success" role="alert">
  //         <h4 class="alert-heading">Payment Successful!</h4>
  //       </div>
  //     );
  //   }

  //   if (error) {
  //     return <div>Error in processing the payment. Please try again.</div>;
  //   }

  // return (
  //   <div>
  //     <div ref={paypalRef} />
  //   </div>
  // );

  return (
    <PayPalButton
      amount={total}
      // ref={paypalRef}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);

        // OPTIONAL: Call your server to save the transaction
        return fetch("/paypal-transaction-complete", {
          method: "post",
          body: JSON.stringify({
            orderID: data.orderID,
          }),
        });
      }}
    />
  );
};

export default PayWithPayPal;
