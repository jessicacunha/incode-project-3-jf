const express = require('express');
const data = require('./data');
const schedule = require('./schedule');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to our schedule website')
})

app.get('/users', (req, res) => {
    res.send(data)
})

app.get('/schedule', (req, res) => {
    res.send(schedule)
})

app.listen(port, () => {})

