const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoute')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

//secret hQIGd3WM3qYDuBNdjZmOGzlY
