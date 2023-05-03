import { useRef, useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function DonateButton({ amount }) {
  // ** `amountRef` keeps track of the selected donation amount when a change is made in the `AmountPicker` component without rerendering the Donate button **
  const amountRef = useRef(amount);

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);
  const [error, setError] =useState("");
  const [approve, setApprove] =useState("");
  const debug = true;
  return (<><div>{error}</div><div>{approve}</div>
    <PayPalButtons
      style={{ label: "donate" }}
      fundingSource="paypal"
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amountRef.current,
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: amountRef.current,
                  },
                },
              },
              items: [
                {
                  name: "Donation to build school",
                  description:
                    "All proceeds directly support building of the Baptist Academy CBSE school. Thank you.",
                  quantity: "1",
                  unit_amount: {
                    currency_code: "USD",
                    value: amountRef.current,
                  },
                  category: "DONATION",
                },
              ],
            },
          ],
        });
      }}
      onApprove={(data, actions) =>
        actions.order.capture().then((details) => {
          const name = details.payer.name.given_name;
          setApprove(`Donation completed by ${name} for \$${amountRef.current}`);
         console.log("Donation completed");
        })
        
      }
      onError={(err)=>{
        setError(err.toString()); 
       
      }}
      onClick= {()=>{
        if (debug) console.log("When clicked, amount was", amountRef.current);
      }
       
      }
    />
    </>
  );
}