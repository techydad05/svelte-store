/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    // stripePromise = loadStripe(creds?.STRIPE_KEY || "");
    // return stripePromise;
};

export default getStripe;
