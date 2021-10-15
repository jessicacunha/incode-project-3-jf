var express = require('express');
var app = express();
var users = module.exports.users;
var schedules = module.exports.schedules;

app.get('/', (req, res) => {
  res.send('Welcome to our schedule website');
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/schedules', (req, res) => {
  res.send(schedules);
});

app.listen(3000, function () { });