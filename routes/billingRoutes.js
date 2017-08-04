const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const { id, name } = req.body;
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: id, // obtained with Stripe.js
      description: `Charge for ${name}`
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
