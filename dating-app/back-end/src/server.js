var express = require('express');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

var app = express();
const port = 3000;

const db = knex({
    client: 'pg',
    connection: {
        host : '',
        user : '',
        password : 'rootadmin',
        database : 'matcha'
    }
});

app.use(bodyParser.json());
app.use(cors());

app.post('/register', function (req, res) {
    db('users')
        .returning('*')
        .insert({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            bio: req.body.bio,
            gender: req.body.gender,
            age: req.body.age,
            sexPref: req.body.sexPref,
            tags: req.body.tags,
            city: req.body.city,
            longi: req.body.longitude,
            lati: req.body.latitude,
            popularity: 0,
            logged_time: new Date(),
            is_logged_in: false
        })
        .then(response => res.json("success"))
        .catch(err => res.status(400).json(err));
})

app.listen(port, () => console.log(`matcha app is listening at http://localhost:${port}`));