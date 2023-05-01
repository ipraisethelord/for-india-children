import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const ButtonWrapper = ({ currency }) => {
    // usePayPalScriptReducer can be used only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency]);

    return (
      <PayPalButtons
        fundingSource="paypal"
        style={{"layout":"vertical","label":"donate"}}
        disabled={false}
        createOrder={(data, actions) => {
            return actions.order
                .create({
                    purchase_units: [
                        {
                            amount: {
                                value: "3",
                                breakdown: {
                                    item_total: {
                                        currency_code: "USD",
                                        value: "3",
                                    },
                                },
                            },
                            items: [
                                {
                                    name: "donation-example",
                                    quantity: "1",
                                    unit_amount: {
                                        currency_code: "USD",
                                        value: "3",
                                    },
                                    category: "DONATION",
                                },
                            ],
                        },
                    ],
                })
                .then((orderId) => {
                    // Your code here after create the donation
                    return orderId;
                });
        }}
    />
  );
};

export default function Donate() {
  return (
    <div style={{ maxWidth: "250px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id": "AbyzX5ZiGxROYbjv4WKPMm_3qdWsBAu5639Pzm25JH_EbaVPimEQEO6K9CMFlortP-uQ35NRj_bAUdl4",
          components: "buttons",
          currency: "USD"
        }}
      >
        <ButtonWrapper currency={"USD"} />
      </PayPalScriptProvider>
    </div>
  );
}
