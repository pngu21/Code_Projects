import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayment = () => (
  <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
    <PayPalButtons
      createOrder={(data, actions) =>
        actions.order.create({ purchase_units: [{ amount: { value: "10.00" } }] })
      }
      onApprove={(data, actions) =>
        actions.order.capture().then(() => alert("Payment Successful!"))
      }
    />
  </PayPalScriptProvider>
);

export default PayPalPayment;
