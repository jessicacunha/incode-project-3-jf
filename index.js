const express = require('express');

const users = require('./data');
const schedules = require('./schedules');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to our schedule website')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/schedules', (req, res) => {
    res.send(schedules)
})

app.listen(port, () => {})

