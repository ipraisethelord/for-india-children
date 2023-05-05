
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRef, useState } from "react";

const debug = true;

export default function DonatePaypalApp() {
  const [orderID, setOrderID] = useState("");
  const [onApproveMessage, setOnApproveMessage] = useState("");
  const [onErrorMessage, setOnErrorMessage] = useState("");
  const amountRef = useRef("2.00");

  function createOrder(data, actions) {
    if (debug) console.log("Creating order for amount", amountRef.current);
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: amountRef.current
            }
          }
        ]
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(function (details) {
      setOnApproveMessage(`Transaction completed by ${details.payer.name.given_name}!`);
    });
  }

  function onError(err) {
    setOnErrorMessage(err.toString());
  }

  function onClick() {
    if (debug) console.log("When clicked, amount was", amountRef.current);
  }

  function handleChange(event) {
    amountRef.current = event.target.value;
  }

  return (
    <div style={{ minHeight: "300px" }}>
      <table className="table" style={{ maxWidth: "400px" }}>
        <tbody>
          <tr>
            <th>
              <label htmlFor="amount">Order Amount: </label>
            </th>
            <td>
              <select onChange={handleChange} name="amount" id="amount">
                <option value="2.00">$2.00</option>
                <option value="4.00">$4.00</option>
                <option value="6.00">$6.00</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Order ID:</th>
            <td>{orderID ? orderID : "unknown"}</td>
          </tr>
          <tr>
            <th>On Approve Message: </th>
            <td data-testid="message">{onApproveMessage}</td>
          </tr>
          <tr>
            <th>On Error Message: </th>
            <td data-testid="error">{onErrorMessage}</td>
          </tr>
        </tbody>
      </table>
      <PayPalScriptProvider options={{ "client-id": "test" }}>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          onClick={onClick}
        />
      </PayPalScriptProvider>
    </div>
  );
}
