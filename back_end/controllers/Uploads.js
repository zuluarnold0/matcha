//PROFILE UPLOAD ROUTE
const uploadProfileHandler = (req, res, cloudinary, db) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    Promise
        .all(promises)
        .then(images => {
            db('users')
            .returning('*')
            .where('id', '=', values[0].fieldName)
            .update({
                photourl: images[0].secure_url
            })
            .then(user => res.json(user))
        })
};

//IMAGE 1 ROUTE
const uploadImage1Handler = (req, res, cloudinary, db) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    Promise
        .all(promises)
        .then(images => {
            db('users')
            .returning('*')
            .where('id', '=', values[0].fieldName)
            .update({
                img1: images[0].secure_url
            })
            .then(user => res.json(user))
            .catch(err => res.status(400).json("Error Uploading image"))
        })
}

//IMAGE 2 ROUTE
const uploadImage2Handler = (req, res, cloudinary, db) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    Promise
        .all(promises)
        .then(images => {
            db('users')
            .returning('*')
            .where('id', '=', values[0].fieldName)
            .update({
                img2: images[0].secure_url
            })
            .then(user => res.json(user))
            .catch(err => res.status(400).json("Error Uploading image"))
        })
}

//IMAGE 3 ROUTE
const uploadImage3Handler = (req, res, cloudinary, db) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    Promise
        .all(promises)
        .then(images => {
            db('users')
            .returning('*')
            .where('id', '=', values[0].fieldName)
            .update({
                img3: images[0].secure_url
            })
            .then(user => res.json(user))
            .catch(err => res.status(400).json("Error Uploading image"))
        })
}

//IMAGE 4 ROUTE
const uploadImage4Handler = (req, res, cloudinary, db) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    Promise
        .all(promises)
        .then(images => {
            db('users')
            .returning('*')
            .where('id', '=', values[0].fieldName)
            .update({
                img4: images[0].secure_url
            })
            .then(user => res.json(user))
            .catch(err => res.status(400).json("Error Uploading image"))
        })
}

module.exports = {
    uploadProfileHandler: uploadProfileHandler,
    uploadImage1Handler: uploadImage1Handler,
    uploadImage2Handler: uploadImage2Handler,
    uploadImage3Handler: uploadImage3Handler,
    uploadImage4Handler: uploadImage4Handler
}