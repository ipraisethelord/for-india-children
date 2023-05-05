import { useRef, useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Typography from "@mui/material/Typography";

export default function DonateButton({ amount, setDonationSuccessful }) {
  const amountRef = useRef(amount);
  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  const [error, setError] = useState("");
  const [approve, setApprove] = useState("");
  const [status, setStatus] = useState(false);
  const debug = true;

  const success = <Typography variant="subtitle1">Thank you for your donation.</Typography>;

  if (status) {
    return success;
  } else {
    return (
      <>
        <div>{error}</div>
        <div>{approve}</div>
        <PayPalButtons
          style={{ label: "donate" }}
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
              setStatus(true);
              setDonationSuccessful(true);
              console.log("Donation completed");
            })
          }
          onError={(err) => {
            setError(err.toString());
          }}
          onClick={() => {
            if (debug) console.log("When clicked, amount was", amountRef.current);
          }}
        />
      </>
    );
  }
}
