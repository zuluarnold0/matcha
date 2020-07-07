require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');
const { CLIENT_ORIGIN } = require('./config.js');

var app = express();
const port = 3000;

//CONNECTING TO POSTGRES DATABASE
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

//UPDATING NAMES AND RETURNING UPDATED USER
app.put('/names', (req, res) => {
    db('users')
    .returning('*')
    .where('id', '=', req.body.id)
    .update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username
    })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error updating names'));
})

//UPDATING PREFERENCE AND RETURNING UPDATED USER
app.put('/pref', (req, res) => {
    db('users')
    .returning('*')
    .where('id', '=', req.body.id)
    .update({
        age: req.body.age,
        gender: req.body.gender,
        sexpref: req.body.sexpref
    })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error updating preference'));
})

//SETTING USERS ON DASHBOARD
app.get('/', (req, res) => {
    db.select('*').from('users')
    .then(users => {
        res.json(users)
    })
    .catch(err => res.status(400).json('Unable to get users'));
})

//SETTING VIEWS TO NOTIFICATIONS
app.get('/getviews', (req, res) => {
    db.select('*').from('views')
    .then(views => { res.json(views) })
    .catch(err => res.status(400).json('Unable to get views'));
})

//SETTING CHATS TO CHATS
app.get('/getchats', (req, res) => {
    db.select('*').from('chats')
    .then(chats => { res.json(chats) })
    .catch(err => res.status(400).json('Unable to get chats'));
})

//INSERT CHAT MESSAGES TO DATABASE
app.post('/sendmessage', (req, res) => {
    db('chats')
    .insert({
        message: req.body.message,
        sender: req.body.sender,
        receiver: req.body.receiver
    })
    .then(() => {
        return db.select('*')
        .from('chats')
        .then(lchats => { res.json(lchats) })
        .catch(err => res.status(400).json('Unable to get chats'));
    })
    .catch(err => res.status(400).json('error inserting chats'))
})

//SETTING LIKES TO NOTIFICATIONS
app.get('/getlikes', (req, res) => {
    db.select('*').from('likes')
    .then(likes => { res.json(likes) })
    .catch(err => res.status(400).json('Unable to get likes'));
})

//SETTING MATCHES TO NOTIFICATIONS
app.get('/getmatches', (req, res) => {
    db.select('*').from('matches')
    .then(matches => { res.json(matches) })
    .catch(err => res.status(400).json('Unable to get matches'));
})

//UPDATING INFO AND RETURNING UPDATED USER
app.put('/info', (req, res) => {
    db('users')
    .returning('*')
    .where('id', '=', req.body.id)
    .update({
        bio: req.body.bio,
        tags: req.body.tags
    })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error updating info'));
})

//UPDATING PASSWORD AND RETURNING UPDATED USER
app.put('/pass', (req, res) => {
    const hash = bcrypt.hashSync(req.body.password);
    db('login')
    .where('email', '=', req.body.email)
    .update({
        hash: hash
    })
    .then(response => res.json('success'))
    .catch(err => res.status(400).json('Error updating password'));
})

//LOGOUT
app.put('/logout', (req, res) => {
    db('users')
    .where('email', '=', req.body.email)
    .update({ 
        is_logged_in: false,
        logged_time: new Date()
     })
    .then(response => res.json('success'))
    .catch(err => res.status(400).json('Error updating is_logged_in'));
})

//UPDATING EMAIL AND RETURNING UPDATED USER
app.put('/email', (req, res) => {
    const { oldEmail, newEmail } = req.body;
        db.transaction(trx => {
            trx('login')
            .returning('email')
            .where('email', '=', oldEmail)
            .update({
                email: newEmail
            })
            .then(loginEmail => {
                return trx('users')
                    .returning('*')
                    .where('email', '=', oldEmail)
                    .update({
                        email: loginEmail[0]
                    })
                    .then(user => res.json(user[0]))
            })
            .then(trx.commit)
            .catch(trx.rollback)
        })
        .catch(err => res.status(400).json(err));
})

//UPDATING CITY AND RETURNING UPDATED USER
app.put('/city', (req, res) => {
    db('users')
    .returning('*')
    .where('id', '=', req.body.id)
    .update({
        city: req.body.city,
        lati: req.body.lati,
        longi: req.body.longi
    })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error updating location'));
})

//VIEWING A USER
app.post('/view', (req, res) => {
    db.select('*').from('views')
    .where({
        viewer: req.body.viewer,
        viewed: req.body.viewed
    })
    .then(data => {
        if (!data.length) {
            return db('views')
            .insert({
                viewer: req.body.viewer,
                viewed: req.body.viewed
            })
            .then(response => res.json('success'))
            .catch(err => res.status(400).json('error viewing user'))
        }
    })
    .catch(err => res.status(400).json('error viewing user'));
})

//UNLIKING USER
app.post('/unlike', (req, res) => {
    db.select('*')
    .from('likes')
    .where({
        liker: req.body.unliker,
        liked: req.body.unliked
    })
    .then(data => {
        if (data.length) {
            return db('likes')
            .where({
                liker: req.body.unliker,
                liked: req.body.unliked
            })
            .del()
            .then(() => {
                return db.select('*')
                .from('matches')
                .where(function() {
                    this.where({
                        user1: req.body.unliker,
                        user2: req.body.unliked
                    })
                    .orWhere({
                        user1: req.body.unliked,
                        user2: req.body.unliker
                    })
                })
                .then(res => {
                    if (res.length) {
                        return db('matches')
                        .where(function() {
                            this.where({
                                user1: req.body.unliker,
                                user2: req.body.unliked
                            })
                            .orWhere({
                                user1: req.body.unliked,
                                user2: req.body.unliker
                            })
                        })
                        .del()
                    }
                })
                .catch(err => res.status(400).json('error unmatchin user'));
            })
            .catch(err => res.status(400).json('error unliking user'));
        }
    })
    .catch(err => res.status(400).json('error finding user'));
})

//LIKING USER
app.post('/like', (req, res) => {
    db.select('*')
    .from('likes')
    .where({
        liker: req.body.liker,
        liked: req.body.liked
    })
    .then(data => {
        if (!data.length) {
            db.select('*')
            .from('likes')
            .where({
                liker: req.body.liked,
                liked: req.body.liker
            })
            .then(result => {
                if (!result.length) {
                    db('likes')
                    .returning('liked')
                    .insert({
                        liker: req.body.liker,
                        liked: req.body.liked,
                        liketype: 1
                    })
                    .then(liked => {
                        db('users')
                        .where('email', '=', liked[0])
                        .increment('popularity', 1)
                        .returning('popularity')
                        .then(popularity => res.json(popularity))
                        .catch(err => res.status(400).json('unable to update popularity'))
                    })
                    .catch(err => res.status(400).json('error viewing user'))
                }
                else
                {
                    db('likes')
                        .returning('liked')
                        .insert({
                            liker: req.body.liker,
                            liked: req.body.liked,
                            liketype: 1
                        })
                        .then(liked => {
                            db('matches')
                            .insert({
                                user1: req.body.liker,
                                user2: req.body.liked
                            })
                            .then(() => {
                                db('users')
                                    .where('email', '=', liked[0])
                                    .increment('popularity', 1)
                                    .returning('popularity')
                                    .then(popularity => res.json(popularity))
                                    .catch(err => res.status(400).json('unable to update popularity'))
                            })
                        })
                        .catch(err => res.status(400).json('error updating user'))
                }
            })
            .catch(err => res.status(400).json('error updating user'))
        }
    })
    .catch(err => res.status(400).json('error updating user'));
})

//LOGGING IN AND RETURNING LOGGED USER
app.post('/login', (req, res) => {
    db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash)
        if (isValid) {
            return db('users')
                .returning('*')
                .where('email', '=', req.body.email)
                .update({ is_logged_in: true })
                .then(user => { res.json(user[0]) })
                .catch(err => res.status(400).json('unable to get user'))
        } else {
            res.status(400).json('wrong credentials')
        }
    })
    .catch(err => res.status(400).json('wrong credentials'));
})

//INSERTING USER INTO LOGIN AND USERS TABLES
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
                    photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2hIJK-htqNGFQUUtshHh934Z_J3CDlSe9H7UHLWln9by7CoS",
                    bio: req.body.bio,
                    gender: req.body.gender,
                    age: req.body.age,
                    sexpref: req.body.sexpref,
                    tags: req.body.tags,
                    city: req.body.city,
                    longi: req.body.longi,
                    lati: req.body.lati,
                    popularity: 0,
                    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2hIJK-htqNGFQUUtshHh934Z_J3CDlSe9H7UHLWln9by7CoS",
                    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2hIJK-htqNGFQUUtshHh934Z_J3CDlSe9H7UHLWln9by7CoS",
                    img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2hIJK-htqNGFQUUtshHh934Z_J3CDlSe9H7UHLWln9by7CoS",
                    img4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2hIJK-htqNGFQUUtshHh934Z_J3CDlSe9H7UHLWln9by7CoS",
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
