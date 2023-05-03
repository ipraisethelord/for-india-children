import { useState, useEffect } from "react";
import { styled } from "@mui/material";

const DonateButtonContainer = styled('div')({
    marginTop: '16px',
});
  
const DonateButton = () => {
  
  useEffect(() => {
    const controller = new AbortController();
    let script

    const addPayPalScript = async () => {
        const { data } = await axios.get(
            '/api/config/paypal',
            { signal: controller.signal }
        )

        script = document.createElement('script')
        script.type = 'text/javascript'
        script.src ="https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }

        paypalbutton.current.appendChild(script)
        completed = true
    }

    let completed = false

    addPayPalScript().then(() => {
        completed = true
    })

    return () => {
        controller.abort()

        if (completed) {
            paypalbutton.current.removeChild(script)
        }
    }
}, [/* not sure what goes here... */])

  useEffect(() => {
    if (scriptLoaded && window.PayPal && window.PayPal.Donation) {
      window.paypal.Donation.Button({
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
  }, [scriptLoaded]);

  return <DonateButtonContainer><div id="donate-button" /></DonateButtonContainer>;
};

export default DonateButton;
