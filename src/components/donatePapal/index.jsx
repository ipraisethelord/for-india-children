import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonateForm from "./DonateForm";
import DonationCardText from "./DonationCardText";

export default function DonateApp() {
  const env= import.meta.env.VITE_APP_ENV;
  let id=import.meta.env.VITE_APP_CLIENT_ID;
  if(env==="dev"){
    id=import.meta.env.VITE_APP_CLIENT_ID_OTHER;
  }
  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_APP_CLIENT_ID,
        "enable-funding": "venmo",
       
        currency: "USD",
      }}
    >
      <DonationCardText>
        <DonateForm />
      </DonationCardText>
    </PayPalScriptProvider>
   );
}