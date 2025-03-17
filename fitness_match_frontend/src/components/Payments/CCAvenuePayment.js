import React, { useState } from "react";
import api from "../../services/api";

const CCAvenuePayment = () => {
  const [paymentData, setPaymentData] = useState(null);

  const handlePayment = async () => {
    const { data } = await api.post("/payment/ccavenue/initiate", { amount: 1000 });
    setPaymentData(data);
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with CCAvenue</button>
      {paymentData && (
        <form method="POST" action="https://secure.ccavenue.com/transaction/transaction.do">
          <input type="hidden" name="encRequest" value={paymentData.encryptedData} />
          <input type="hidden" name="access_code" value={paymentData.accessCode} />
          <button type="submit">Proceed to CCAvenue</button>
        </form>
      )}
    </div>
  );
};

export default CCAvenuePayment;
