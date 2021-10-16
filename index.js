const express = require('express');

const data = require('./data');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to our schedule website')
})

//a 'for' to create a route for each user
for (var user in data.users) {
    app.get(`/users/${user}`, (req, res) => {
        res.send(data.users[user])
    })
}

app.get('/users/0/schedules', (req, res) => {
    res.send(schedules)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})

