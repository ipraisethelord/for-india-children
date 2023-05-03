import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonateForm from "./DonateForm";
import DonationCardText from "./DonationCardText";

export default function DonateApp() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_APP_CLIENT_ID,
        components: "buttons",
        currency: "USD",
      }}
    >
      <DonationCardText>
        <DonateForm />
      </DonationCardText>
    </PayPalScriptProvider>
   );
}