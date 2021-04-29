// paytm checksum lib
const checksum = require("../lib/checksum");

// controllers for payment routes

exports.paynow = (req, res, next) => {
    // check if body has valid data
    const mobile = req.body.mobile;
    const email = req.body.email;
    const amount = req.body.amount;
    // set paytm required params
    let paytmParams = {};
    paytmParams["MID"] = process.env.MERCHANT_ID;
    paytmParams["WEBSITE"] = process.env.WEBSITE;
    paytmParams["CHANNEL_ID"] = process.env.CHANNEL_ID;
    paytmParams["INDUSTRY_TYPE_ID"] = process.env.INDUSTRY_TYPE;
    paytmParams["ORDER_ID"] = "PAY_ID_" + new Date().getTime();
    paytmParams["CUST_ID"] = "test_cust001";
    paytmParams["TXN_AMOUNT"] = amount;
    paytmParams["CALLBACK_URL"] = process.env.CALLBACK_URL;
    paytmParams["EMAIL"] = email;
    paytmParams["MOBILE_NO"] = mobile;

    // generate checksum  to verify at successful payment
    checksum.genchecksum(
        paytmParams,
        process.env.MERCHANT_KEY,
        function (error, checksum) {
            // get transaction url
            const txnURL = process.env.TXN_STAGING_URL;

            // send response with paytm params and txnURL
            res.send({
                ...paytmParams,
                txn_url: txnURL,
            });
        },
    );
};

exports.callback = (req, res, next) => {};
