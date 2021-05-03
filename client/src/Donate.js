import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const dotenv = require('dotenv')
dotenv.config()



function Donate() {

    const [product, setProduct] = useState({
        name: "Donation",
        price: 10
    });
    
    const makeDonation = token => {
        const body = {
            token,
            product
        }
        axios.post('https://at715casestudy.herokuapp.com/app/donation', body)
        .then(response => console.log(response.data))
    }

    return (
        <div>
            <StripeCheckout stripeKey= {process.env.REACT_APP_KEY} token={makeDonation} name = "Donate $10" amount = {product.price * 100}/>
            <StripeCheckout stripeKey= {process.env.REACT_APP_KEY} token={makeDonation} name = "Donate $20" amount = {20 *100} >
                <button onClick={() => setProduct({name: "$20", price: 20*100})}>Test</button>
            </StripeCheckout>  

        </div>
    )
}

export default Donate;