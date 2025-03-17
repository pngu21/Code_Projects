const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/ccavenue/initiate", async (req, res) => {
    const { amount } = req.body;
    const orderId = "ORDER" + new Date().getTime();
    const merchantId = process.env.CCAVENUE_MERCHANT_ID;
    const accessCode = process.env.CCAVENUE_ACCESS_CODE;
    const workingKey = process.env.CCAVENUE_WORKING_KEY;
    
    const data = `merchant_id=${merchantId}&order_id=${orderId}&amount=${amount}&currency=INR&redirect_url=https://yourdomain.com/payment-success&cancel_url=https://yourdomain.com/payment-failed`;
    
    const encryptedData = crypto.createCipher("aes-128-cbc", workingKey).update(data, "utf8", "hex");
    res.json({ encryptedData, accessCode });
  });

module.exports = router;
