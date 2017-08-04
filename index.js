const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Users');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  //like main.js and main.css file
  app.use(express.static('client/build'));

  //Express will serve up index.html file
  //if it doesn't see the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
