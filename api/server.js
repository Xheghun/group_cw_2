const express = require('express');
const app = express();
const PORT = 4000;

const lessons = { "lessons":  [    { 'topic': 'math', 'location': 'London', 'price': 100 },    { 'topic': 'math', 'location': 'Liverpool', 'price': 80 },    { 'topic': 'math', 'location': 'Oxford', 'price': 90 },    { 'topic': 'math', 'location': 'Bristol', 'price': 120 },] };

app.get('/',   function (req, res) {
    res.send(lessons);
});

app.get('/lessons',   function (req, res) {
    res.send(lessons);
});

app.get('/user', function (req, res) {
    const response = {'email': 'user@email.com', 'password':'mypassword'};
    res.send(response);
});

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT);
});