var express = require('express');
var app = express();
var data = require('./data');

app.get('/', (req, res) => {
  res.send('Welcome to our schedule website');
});

app.get('/users', (req, res) => {
  res.send(data.users);
});

app.get('/schedules', (req, res) => {
  res.send(data.schedules);
});

for (var data in data.schedules) {
data.schedules.filter(obj => {
    console.log(obj)
    
    app.get(`/users/${obj.user_id}/schedules`, (req, res) => {
        res.send(obj)
    })
})
}

app.listen(3000, function () { });