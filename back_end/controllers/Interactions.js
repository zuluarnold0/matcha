//view route
const handleViews = (req, res, db) => {
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
}

/*********************** LIKE ROUTE *********************/

const ifIlikedTheUser = (req, res, db) => {
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

const ifIdidntLike = (req, res, db) => {
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

const handleLikes = (req, res, db) => {
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
                    ifIlikedTheUser(req, res, db);
                }
                else
                {
                    ifIdidntLike(req, res, db);
                }
            })
            .catch(err => res.status(400).json('error updating user'))
        }
    })
    .catch(err => res.status(400).json('error updating user'));
}

/*************************** UNLIKE ROUTE *************************************/

const handleUnlikes = (req, res, db) => {
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
}


module.exports = {
    handleViews: handleViews,
    handleLikes: handleLikes,
    handleUnlikes: handleUnlikes
}