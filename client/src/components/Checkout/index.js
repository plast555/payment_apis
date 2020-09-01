import React, { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";
import "./card.css";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [line_items, setline_items] = useState([
    {
      price: 8900,
      quantity: 1
    },
    {
      price: 121,
      quantity: 1
    },
  ]);

  // const changeQuantity = v => {
  //   setProduct({ ...product, quantity: Math.max(0, product.quantity + v) });
  // };

  // const handleClick = async (event) => {
  //   const body = [product]
  //   try {
  //     const res = await axios.post('http://localhost:3333/checkout', {
  //       body
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })

  //     const { id: sessionId } = await res

  //     const { error } = await stripe.redirectToCheckout({
  //       sessionId
  //     })

  //     return res.json()
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  //   const session = await response.json()

  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });

  //   if (result.error) {
  //     console.error(result.error.message);
  //   }
  // };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleSubmit = async (e, cart) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      axios.post("/create-checkout-session", line_items, (req, res) => {
        return res.json()
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Stripe Payment</label>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button
        type="submit"
        className="btn btn-info mt-3"
        style={{ backgroundColor: "#556cd6" }}
        disabled={!stripe}
      >
        Process Payment
      </button>
    </form>
  );
};

export default Checkout;
