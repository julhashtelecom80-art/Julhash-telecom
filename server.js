const express = require("express");
const path = require("path");
const app = express();

app.use(express.json({ limit: "20kb" }));
app.use(express.static(__dirname));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "JULHASH TELECOM API" });
});

// bKash credentials and approved Checkout API integration are required.
// Until configured, this endpoint intentionally does not accept payments.
app.post("/api/bkash/create-payment", (_req, res) => {
  res.status(503).json({
    message: "bKash Checkout এখনো কনফিগার করা হয়নি। অনুমোদিত API credentials সার্ভারের environment variables-এ সেট করতে হবে।"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`JULHASH TELECOM API listening on ${port}`);
});
