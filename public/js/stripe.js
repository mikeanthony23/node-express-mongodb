import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51OY3XhBa66NB5bPqkfz0Uzs9wIQMgMo3tFL9YuPWNs0guxmsCpN2ZTIWQHaEmS7oYkVQMikyT83vlgqig2mUInHO00i30TXuVj',
);

export const bookTour = async tourId => {
  // 1) Get checkout session from API
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
