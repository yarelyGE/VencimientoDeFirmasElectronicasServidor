var express = require('express');
var app = express();

// Routes
app.use('/timerEmail', require('./routes/routes'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});