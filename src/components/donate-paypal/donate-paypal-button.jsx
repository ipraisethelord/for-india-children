import { useRef, useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
export default function DonatePaypalButton({ amount, setDonationSuccessful, setPaypalError }) {
  const amountRef = useRef(amount);
  
  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  const DEBUG = import.meta.env.VITE_APP_DEBUG;

  const MIN_AMOUNT = 1.00;
  const isValidNumber = (input) => {
    return !isNaN(parseFloat(input)) && isFinite(input);
  };
 
  return (
      
        <>
       
          <PayPalButtons
            style={{ "layout":"vertical", label: "donate" }}
            disabled={!isValidNumber(amount) || parseFloat(amount) < MIN_AMOUNT}
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
                    application_context: {
                      shipping_preference: "NO_SHIPPING",
                    },
                    items: [
                      {
                        name: "Baptist Academy",
                        description:
                          "All proceeds directly support building of the Baptist Academy Group of School. Thank you.",
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
                console.log(`Donation completed by ${name} for \$${amountRef.current}`);               
                setDonationSuccessful(true);
                console.log("Donation completed");
              })
            }
            onError={(err) => {
            
              console.log("error generated");
              setPaypalError(err.toString()); // error is displayed on DonatePaypalForm
            }}
            onClick={() => {
              if (!isValidNumber(amountRef.current)) {
                console.log(amountRef.current + "is not a valid number.");
                if (DEBUG) console.log("When clicked, amount was", amountRef.current);
                throw new Error("Invalid amount");
                return;
              }

              if (parseFloat(amount) < MIN_AMOUNT) {
                console.log(`Minimum donation amount is $${MIN_AMOUNT}.`);
                throw new Error("Not meet minimum amount");
                return;
              }

              if (DEBUG) console.log("When clicked submit button, amount was", amountRef.current);
            }}
          />
        </>
     
   
  );
}
