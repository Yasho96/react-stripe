import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51In0E9B0nTiBgHHwmIIQte1HgVDrLWgTehDnvPsktbKEqcyAEgsGAjo0271Bxd525pvpMuJsog0TnirvJSyC5Blp00TX4qj5MK"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
