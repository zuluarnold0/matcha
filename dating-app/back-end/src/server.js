var express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

var app = express();
const port = 3000;

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'rootadmin',
        database : 'matcha'
    }
});

app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
    db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash)
        if (isValid) {
            return db.select('*').from('users')
                .where('email', '=', req.body.email)
                .then(user => {
                    res.json(user[0])
                })
                .catch(err => res.status(400).json('unable to get user'))
        } else {
            res.status(400).json('wrong credentials')
        }
    })
    .catch(err => res.status(400).json('wrong credentials'));
})

app.post('/register', (req, res) => {
    const hash = bcrypt.hashSync(req.body.password);
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: req.body.email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
                .returning('*')
                .insert({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    email: loginEmail[0],
                    bio: req.body.bio,
                    gender: req.body.gender,
                    age: req.body.age,
                    sexpref: req.body.sexpref,
                    tags: req.body.tags,
                    city: req.body.city,
                    longi: req.body.longi,
                    lati: req.body.lati,
                    popularity: 0,
                    logged_time: new Date(),
                    is_logged_in: false
                })
                .then(user => res.json(user[0]))
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json(err));
})
 
app.listen(port, () => console.log(`matcha app is listening at http://localhost:${port}`));