//Get likes Route
const getLikesHandler = (req, res, db) => {
    db.select('*').from('likes')
    .then(likes => { res.json(likes) })
    .catch(err => res.status(400).json('Unable to get likes'));
}

//Get matches Route
const getMatchesHandler = (req, res, db) => {
    db.select('*').from('matches')
    .then(matches => { res.json(matches) })
    .catch(err => res.status(400).json('Unable to get matches'));
}

//Get users Route
const getUsersHandler = (req, res, db) => {
    db.select('*')
    .from('users')
    .then(users => {
        res.json(users)
    })
    .catch(err => res.status(400).json('Unable to get users'));
}

//Get Views Route
const getViewsHandler = (req, res, db) => {
    db.select('*').from('views')
    .then(views => { res.json(views) })
    .catch(err => res.status(400).json('Unable to get views'));
}

//Get Chats Route
const getChatsHandler = (req, res, db) => {
    db.select('*').from('chats')
    .then(chats => { res.json(chats) })
    .catch(err => res.status(400).json('Unable to get chats'));
}

module.exports = {
    getUsersHandler: getUsersHandler,
    getLikesHandler: getLikesHandler,
    getViewsHandler: getViewsHandler,
    getMatchesHandler: getMatchesHandler,
    getChatsHandler: getChatsHandler
}