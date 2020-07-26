//UPDATE CITY ROUTE
const updateCityHandler = (req, res, db) => {
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
}

const updateEmailHandler = (req, res, db) => {
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
}

const updatePasswordHandler = (req, res, bcrypt, db) => {
    const hash = bcrypt.hashSync(req.body.password);
    db('login')
    .where('email', '=', req.body.email)
    .update({ hash: hash })
    .then(response => res.json('success'))
    .catch(err => res.status(400).json('Error updating password'));
};

//UPDATING NAMES AND RETURNING UPDATED USER
const updateNamesHandler = (req, res, db) => {
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
}

//UPDATING PREFERENCE ROUTE
const updatePrefHandler = (req, res, db) => {
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
}

//UPDATING INFO AND RETURNING UPDATED USER
const updateInfoHandler = (req, res, db) => {
    db('users')
    .returning('*')
    .where('id', '=', req.body.id)
    .update({
        bio: req.body.bio,
        tags: req.body.tags
    })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error updating info'));
}

module.exports = {
    updateCityHandler: updateCityHandler,
    updateEmailHandler: updateEmailHandler,
    updatePasswordHandler: updatePasswordHandler,
    updatePrefHandler: updatePrefHandler,
    updateNamesHandler: updateNamesHandler,
    updateInfoHandler: updateInfoHandler
}