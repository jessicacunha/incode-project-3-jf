const express = require('express');
const app = express();
const data = require('./data');


app.get('/', (req, res) => {
    res.send('Welcome to our schedule website')
})

//a 'for' to create a route for each user
for (let user in data.users) {
    app.get(`/users/${user}`, (req, res) => {
        res.send(data.users[user])
    })
}

app.get('/schedules', (req, res) => {
    res.send(data.schedules);
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}/`);
})

//route for the schedule fo each user
/*for (var schedule in data.schedules) {
data.schedules.filter(obj => {
    console.log(obj)
    
    app.get(`/users/${obj.user_id}/schedules`, (req, res) => {
        res.send(obj)
    })
})
}

var result = data.schedules.filter(obj => {
    if (obj.user_id === 0) {
        console.log(obj)
    }
    return obj.user_id === 0
})*/




