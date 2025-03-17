import React from "react";
import StripePayment from "../components/Payments/StripePayment";
import CCAvenuePayment from "../components/Payments/CCAvenuePayment";
import PayPalPayment from "../components/Payments/PayPalPayment";

const Dashboard = () => (
  <div>
    <h2>Upgrade to Premium</h2>
    <StripePayment />
    <CCAvenuePayment />
    <PayPalPayment />
  </div>
);

export default Dashboard;
