//INSERT CHAT MESSAGES TO DATABASE
const handleMessages = (req, res, db) => {
    db('chats')
    .insert({
        message: req.body.message,
        sender: req.body.sender,
        receiver: req.body.receiver,
        time_: new Date()
    })
    .then(() => {
        return db.select('*')
        .from('chats')
        .then(lchats => { res.json(lchats) })
        .catch(err => res.status(400).json('Unable to get chats'));
    })
    .catch(err => res.status(400).json('error inserting chats'))
}

module.exports = {
    handleMessages: handleMessages
}