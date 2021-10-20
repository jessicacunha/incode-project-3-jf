var express = require('express');
var app = express();
const { schedules } = require('../../../AppData/Local/Temp/Temp1_data.zip/data');
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
// used req.params for route
app.get('/users/:id', (req, res) => {
    let id = req.params.id; 
    console.log(id);
    if(data.users[id]) {res.json(data.users[id])}
    else {
        res.json('Unknown')
    }
  })


app.listen(3000, function () { });

//test push to main