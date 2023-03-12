import { Button } from "@mui/material";
import React, { useState } from "react";
import { loadScript } from "../utils/loadScript";

const razorpayConfig = {
  key: "rzp_test_tGTrBVhTKjYivL",
  amount: "100",
  name: "COMPANY_NAME",
  description: "PURPOSE",
  image: "LOGO_URL",
  handler: (response) => {
    
    // handle successful payment response
    console.log("Payment Successful", response);
  },
  prefill: {
    name: "CUSTOMER_NAME",
    email: "CUSTOMER_EMAIL",
    contact: "CUSTOMER_PHONE",
  },
  notes: {
    address: "CUSTOMER_ADDRESS",
  },
  theme: {
    color: "#F37254",
  },
};

const Payment = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handlePayment = () => {
    if (!scriptLoaded) {
      loadScript("https://checkout.razorpay.com/v1/checkout.js", () => {
        const rzp1 = new window.Razorpay(razorpayConfig);
        rzp1.open();
      });
      setScriptLoaded(true);
    } else {
      const rzp1 = new window.Razorpay(razorpayConfig);
      rzp1.open();
    }
  };

  return (
    <div>
      <Button onClick={handlePayment} variant='contained' size='large' color='success' sx={{ borderRadius: 10}}>Pay Now</Button>
    </div>
  );
};

export default Payment;
