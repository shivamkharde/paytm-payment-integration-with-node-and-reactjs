import React from "react";
import "./style.css";

export const PaytmPaymentBtn = (props) => {
    return (
        <div>
            <button onClick={props.onclick} className="paytm_pay_btn">
                PAY USING PAYTM
            </button>
        </div>
    );
};
