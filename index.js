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

app.get('/users/:id', (req, res) => {
    let id = req.params.id; 
    if(data.users[id]) {res.json(data.users[id])}
    else {
        res.json('Unknown')
    }
})

app.get(`/users/:userId/schedules`, (req, res) => {
    let newSchedules = data.schedules.filter(obj => {
        return req.params.userId == obj.user_id
    })
    console.log(newSchedules)
    res.send(newSchedules)
})

app.listen(3000, function () { });


