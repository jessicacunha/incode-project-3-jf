var express = require('express');
var app = express();
var data = require('./data');

app.get('/', (req, res) => {
  res.send('Welcome to our schedule website');
});

app.get('/users', (req, res) => {
  res.send(data.users);
});

// app.get('/users/id', (req, res) => {
//   var id = data.users.user_id



//   res.send(data.users);
// });

app.get('/schedules', (req, res) => {
  res.send(data.schedules);
});


app.listen(3000, function () { });