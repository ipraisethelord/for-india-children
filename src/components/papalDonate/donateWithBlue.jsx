import { useState, useEffect } from "react";
import { styled } from "@mui/material";

const DonateButtonContainer = styled('div')({
    marginTop: '16px',
});
  
const DonateButton = () => {
 
    // const [scriptLoaded, setScriptLoaded] = useState(false);

    // useEffect(() => {
    //   const script = document.createElement("script");
    //   script.src =
    //     "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
    //   script.async = true;
    //   document.body.appendChild(script);
    //   setScriptLoaded(true);
    //   return () => {
    //     document.body.removeChild(script);
    //   };
    // }, []);
  
  useEffect(() => {
    if (window.PayPal && window.PayPal.Donation) {
      window.PayPal.Donation.Button({
        env: "sandbox",
        hosted_button_id: import.meta.env.VITE_APP_HOSTED_BUTTON_ID,
        image: {
          src:
            "https://pics-v2.sandbox.paypal.com/00/s/MGE4OGM0NDItMDVjNi00NjRiLWJjMWItNzczN2QxYjU3NDA2/file.PNG",
          alt: "Donate with PayPal button",
          title: "PayPal - The safer, easier way to pay online!",
        },
      }).render("#donate-button");
    }
  }, []);
  

  return <DonateButtonContainer><div id="donate-button" /></DonateButtonContainer>;
};

export default DonateButton;
