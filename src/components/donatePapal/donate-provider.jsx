import { PayPalScriptProvider } from "@paypal/react-paypal-js";
//import DonateForm from "./DonateFormCurrentcyInput";
import DonateForm from "./DonateForm";
const DonateProvider = ()=>{
    const env= import.meta.env.VITE_APP_ENV;
    let id=import.meta.env.VITE_APP_CLIENT_ID;
    if(env==="dev"){
      id=import.meta.env.VITE_APP_CLIENT_ID_OTHER;
    }
    return ( <PayPalScriptProvider
        options={{
          "client-id": id,
          "enable-funding": "venmo",       
          currency: "USD",
        }}
      >     
        <DonateForm />     
      </PayPalScriptProvider>);
}
export default DonateProvider;