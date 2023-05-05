import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
const debug = true;

const initialState = {
  amount: "5.00",
  orderID: "",
  onApproveMessage: "",
  onErrorMessage: ""
};

export default class PaypalDonateApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.onApprove = this.onApprove.bind(this);
    this.onError = this.onError.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    this.setState({
      amount: event.target.value,
      orderID: "",
      status:"",
      onApproveMessage: "",
      onErrorMessage: ""
    });
  }

  createOrder(data, actions) {
    if (debug) console.log("Creating order for amount", this.state.amount);
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: this.state.amount
            }
          }
        ]
      })
      .then((orderID) => {
        this.setState({ orderID: orderID });
        return orderID;
      });
  }

  onApprove(data, actionsy) {
    let app = this;
    return actions.order.capture().then(function (details) {
      app.setState({
        onApproveMessage: `Transaction completed by ${details.payer.name.given_name}!`,
        status:'SUCCESS'
      });
      if (debug) console.log("approved, amount was", this.state.amount);
    });
  }

  onError(err) {
    this.setState({
      onErrorMessage: err.toString()
    });
  }
 
  onClick() {
    if (debug) console.log("When clicked, amount was", this.state.amount);
  }
  
    render () {
        console.log(this.state.status);
        if(this.state.status ==='SUCCESS'){
            return ( <Typography variant="h3">Thank you for your donation.</Typography>);
        }
        else {
            return (<div style={{ minHeight: "300px" }}>
            <table className="table" style={{ maxWidth: "400px" }}>
              <tbody>                
                <tr>
                  <th>Donate:</th>
                  <td> <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="number"
                            label="Donate Amount "
                            variant="outlined"
                            value={this.state.amount}
                            onChange={this.onChange} 
                            name="amount" 
                            id="amount"
            /></td>
                </tr>
                <tr>
                  <th>Order ID:</th>
                  <td>{this.state.orderID ? this.state.orderID : "unknown"}</td>
                </tr>
                <tr>
                  <th>On Approve Message: </th>
                  <td data-testid="message">{this.state.onApproveMessage}</td>
                </tr>
                <tr>
                  <th>On Error Message: </th>
                  <td data-testid="error">{this.state.onErrorMessage}</td>
                </tr>
              </tbody>
            </table>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
              <PayPalButtons
                createOrder={this.createOrder}
                onApprove={this.onApprove}
                onError={this.onError}
                onClick={this.onClick}
              />
            </PayPalScriptProvider>
            </div>);
        }
    }
}