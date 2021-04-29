import React from "react";
import { PaytmPaymentBtn } from "../../components";
import "./style.css";

export const Home = () => {
    const createFormAndSubmit = (data) => {
        // create form and submit it
        const formElement = document.createElement("form");
        formElement.setAttribute("name", "paytm-form");
        formElement.setAttribute("method", "POST");
        formElement.setAttribute("action", data.txn_url);
    };

    const startPayment = () => {
        // call an api for payment
        fetch("http://localhost:5500/paynow", {
            method: "POST",
        })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(
                    "something went wrong while initiating the payment ! please try again",
                );
            });
    };
    return (
        <div className="container">
            <PaytmPaymentBtn onclick={startPayment} />
        </div>
    );
};
