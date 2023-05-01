function PayPalButton({ amount }) {
    return (
      <form action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="CE3W2BJZ5W4ZL" />
        <input type="hidden" name="amount" value={amount} />
        <input
          type="image"
          src="https://pics-v2.sandbox.paypal.com/00/s/NTgwZTliNGYtYjU3MS00MTQ5LWJkOTgtNDFjNjMxMGQ1NDA3/file.PNG"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    );
  }
  
  export default PayPalButton;
  