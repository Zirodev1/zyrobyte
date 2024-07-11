import React from 'react';

const Donate = () => {
  return (
    <div className="container">
      <h1>Donate</h1>
      <p>Your support helps us continue our mission. Thank you for considering a donation.</p>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID" />
        <input type="submit" value="Donate with PayPal" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Donate;