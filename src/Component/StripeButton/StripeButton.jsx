import React from "react";
import StripeCheckout from "react-stripe-checkout";



const stripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51NTMb5SI9G04Ipthw8iOoRLoup8fPzFBmxb9Za4MWiMisXRs27w6fNuLKbCUOov7PqiLlL6ToM7tMmimbXRaCp1t0068myzoZT'

const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'Shopping Clothes Ltd.'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default stripeCheckoutButton ;