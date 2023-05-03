import { useEffect } from "react";

const DonateButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
    script.async = true;
    script.onload = () => {
      PayPal.Donation.Button({
        env:'sandbox',
        hosted_button_id:import.meta.env.VITE_APP_HOSTED_BUTTON_ID,
        image: {
          src:'https://pics-v2.sandbox.paypal.com/00/s/MGE4OGM0NDItMDVjNi00NjRiLWJjMWItNzczN2QxYjU3NDA2/file.PNG',
          alt:'Donate with PayPal button',
          title:'PayPal - The safer, easier way to pay online!',
        }
      }).render('#donate-button');
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
     
        <div id="donate-button"></div>
     
    </>
  );
};

export default DonateButton;
