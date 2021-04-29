const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const https = require("https");
const qs = require("querystring");

// routes
const payment = require("./routes/payment.route");

const app = express();

const port = process.env.PORT || 5500;

dotenv.config();
app.use(cors());
app.use(express.json());

// homepage route
app.get("/", (req, res, next) => {
    res.send("API for paytm payment process");
});

// route for payment
app.use("/payment", payment);

app.listen(port, () => {
    console.log(`server started at ${port}`);
});
