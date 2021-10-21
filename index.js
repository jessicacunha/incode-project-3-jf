var express = require('express');
var app = express();
var data = require('./data');
var bodyParser = require('body-parser');
var crypto = require('crypto');
app.use(bodyParser.json())

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
    if(data.users[id]) {
        res.json(data.users[id])
    } else {
        res.json('Unknown')
    }
})

app.get(`/users/:userId/schedules`, (req, res) => {
    let newSchedules = data.schedules.filter(obj => {
        return req.params.userId == obj.user_id
    })
    res.send(newSchedules)
})

app.post('/schedules', (req, res) => {
    let scheduleObject = {
        user_id: req.body.user_id, 
        day: req.body.day, 
        start_at: req.body.start_at, 
        end_at: req.body.end_at
    }
    data.schedules.push(scheduleObject)
    res.send(scheduleObject)
})

app.post('/users', (req, res) => {
    var hash = crypto.createHash('sha256').update(req.body.password).digest('base64')
    let newUser = {
        firstname: req.body.firstname, 
        lastname: req.body.lastname, 
        email: req.body.email, 
        password: hash
    }
    data.users.push(newUser)
    res.send(newUser)
})

app.listen(3000, function () { });


