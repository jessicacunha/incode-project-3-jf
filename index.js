const express = require('express');

const users = require('./data');
const schedules = require('./schedules');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to our schedule website')
})

//a 'for' to create a route for each user
for (var user in users) {
    app.get(`/users/${user}`, (req, res) => {
        res.send(users[user])
    })
}

app.get('/users/0/schedules', (req, res) => {
    res.send(schedules)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})

