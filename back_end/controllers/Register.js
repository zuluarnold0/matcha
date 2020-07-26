const port__ = require("../port/Port");

//LOGIN ROUTE
const handleLogin = (req, res, db, bcrypt) => {
    db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash)
        if (isValid) {
            db('users')
                .returning('*')
                .where('email', '=', req.body.email)
                .then(user => {
                    if (user[0].active === false) {
                        res.status(400).json('Please verify your email!');
                    } else {
                        db('users')
                        .returning('*')
                        .update({ is_logged_in: true })
                        .where('email', '=', req.body.email)
                        .then(user => {
                            res.json(user[0]);
                        })
                    }
                })
                .catch(err => res.status(400).json('unable to get user'))
        } else {
            res.status(400).json('wrong credentials')
        }
    })
    .catch(err => res.status(400).json('wrong credentials'));
}

const handleLogout = (req, res, db) => {
    db('users')
    .where('email', '=', req.body.email)
    .update({ 
        is_logged_in: false,
        logged_time: new Date()
     })
    .then(response => res.json('success'))
    .catch(err => res.status(400).json('Error updating is_logged_in'));
}

//REGISTER ROUTE
const handleRegister = (req, res, db, bcrypt, randomstring, mailer) => {
    const hash = bcrypt.hashSync(req.body.password);
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: req.body.email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            const secrettoken = randomstring.generate();
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
                    is_logged_in: false,
                    secrettoken: secrettoken, 
                    active: false
                })
                .then(user => {
                    const html = `Hi ${user[0].firstname} ${user[0].lastname},
                        Thank you for registering to Matcha app!
                        <br/><br/>
                        Please verify your email by typing the following token:
                        <br/>
                        Token: <strong>${secrettoken}</strong>
                        <br/>
                        On the following page:
                        <a href="${port__.port}/verify">${port__.port}/verify</a>
                        <br/><br/>
                        Have a pleasant day!`;
                    mailer.sendEmail('admin@matcha.com', user[0].email, 'Please verify your email', html);
                    res.json(user[0]);
                })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json(err));
}

//VERIFY TOKEN ROUTE
const handleVerify = (req, res, db) => {
    db('users')
    .returning('*')
    .where('secrettoken', '=', req.body.secrettoken.trim())
    .update({
        secrettoken: '',
        active: true
    })
    .then(user => res.json(user[0]))
    .catch(err => res.status(400).json('Error encountered while updating token'));
}

//FORGOT ROUTE
const handleForgot = (req, res, db, mailer) => {
    db.select('*')
    .from('users')
    .returning('*')
    .where('email', '=', req.body.email)
    .then(user => {
        const html = `Hi ${user[0].firstname} ${user[0].lastname},
            to reset your password please follow this link:
            <br/><br/>
            <a href="${port__.port}/reset/${user[0].id}">${port__.port}/reset</a>
            <br/><br/>
            Have a pleasant day!`;
        if (user) {
            mailer.sendEmail('admin@matcha.com', user[0].email, 'Reset Matcha Password', html);
            res.json(user[0]);
        }
    })
    .catch(err => res.status(400).json('Unable to get user'));
}

//RESET PASSWORD ROUTE
const handleReset = (req, res, db, bcrypt) => {
    db('users')
    .returning('email')
    .where('id', '=', req.body.id)
    .then(data => {
        const hash = bcrypt.hashSync(req.body.password);
        db('login')
        .where('email', '=', data[0].email)
        .update({ hash: hash })
        .then(response => res.json('success'))
        .catch(err => res.status(400).json('Error updating password'));
    })
    .catch(err => res.status(400).json('User not found'));
}

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    handleForgot: handleForgot,
    handleReset: handleReset,
    handleVerify: handleVerify,
    handleLogout: handleLogout
}