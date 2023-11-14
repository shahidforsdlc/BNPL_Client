import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { apiPOST } from "./apiHelper";

function Stripe(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  

  const getClientSecret = async() =>{
    const payload = {
        amount :props.amount,
        clientSecret : props.clientSecret
    }
    const response=  await apiPOST(`v1/stripe/create_payment`,payload)
    if(response.data.status === 201){
      setClientSecret(response.data.data.clientSecret);
    }
    
  }

  useEffect(() => {
    setStripePromise(loadStripe(props.apiKey));
    getClientSecret()

  }, [props]);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Stripe;