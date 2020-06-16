const express = require('express');
//const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt-nodejs');
//const cors = require('cors');

const db = require('knex')({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : '',
        password : 'rootadmin',
        database : 'matcha'
    }
});

const app = express();
const port = 3000;

app.post('/register', function (req, res) {
    const { firstname, lastname, username, email, bio, gender, age, sexPref, tags } = req.body;
    fetch('https://ipapi.co/json')
    .then(res => res.json())
    .then(loc => {
        db('users')
        .returning('*')
        .insert({ 
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            bio: bio,
            gender: gender,
            age: age,
            sexPref: sexPref,
            tags: tags,
            city: loc.city,
            longi: loc.longitude,
            lati: loc.latitude,
            popularity: 0,
            logged_time: new Date(),
            is_logged_in: false,
        })
        .then(user => {
            res.json(user[0]) 
        })
        .catch(err => res.status(400).json('Unable to register'));
    })
    .catch(err => res.status(400).json('location not found'));
})

app.listen(port, () => console.log(`matcha app is listening at http://localhost:${port}`));