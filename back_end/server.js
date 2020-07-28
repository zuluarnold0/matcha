require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');
const randomstring = require("randomstring");
const mailer = require("./mailer");
const register = require("./controllers/Register");
const update = require("./controllers/Update");
const uploads = require("./controllers/Uploads");
const getdata = require("./controllers/GetData");
const messages = require("./controllers/Messages");
const interactions = require("./controllers/Interactions");

var app = express();
const port = process.env.PORT || 3000;

//CONNECTING TO POSTGRES DB
const db = knex({
    client: 'pg',
    connection: {
        host : process.env.HOST,
        user : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASE
    }
});

app.use(cors());
app.use(bodyParser.json());
app.use(formData.parse());

//CONNECTING TO CLOUDINARY
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
})

/******************************** REGISTER END POINTS *****************************/

//LOGGING IN AND RETURNING LOGGED USER
app.post('/login', (req, res) => { register.handleLogin(req, res, db, bcrypt) });

//INSERTING USER INTO LOGIN AND USERS TABLES
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt, randomstring, mailer) });

//EXTENDING USER PROFILE
app.post('/extendedprofile', (req, res) => { register.handleExtended(req, res, db) });

//RESETTING PASSWORD
app.post('/forgot', (req, res) => { register.handleForgot(req, res, db, mailer) })

//UPDATING PASSWORD AND RETURNING UPDATED USER
app.put('/resetpass', (req, res) =>  {register.handleReset(req, res, db, bcrypt) });

//VRIFY REGISTERED USER
app.put('/verify', (req, res) => { register.handleVerify(req, res, db) });

//LOGOUT
app.put('/logout', (req, res) => { register.handleLogout(req, res, db) });


/************************** UPDATE END POINTS *************************/


//UPDATING EMAIL AND RETURNING UPDATED USER
app.put('/email', (req, res) => { update.updateEmailHandler(req, res, db) });

//UPDATING CITY AND RETURNING UPDATED USER
app.put('/city', (req, res) => { update.updateCityHandler(req, res, db) });

//UPDATING PASSWORD AND RETURNING UPDATED USER
app.put('/pass', (req, res) => { update.updatePasswordHandler(req, res, bcrypt, db) });

//UPDATING NAMES AND RETURNING UPDATED USER
app.put('/names', (req, res) => { update.updateNamesHandler(req, res, db) });

//UPDATING PREFERENCE AND RETURNING UPDATED USER
app.put('/pref', (req, res) => { update.updatePrefHandler(req, res, db) });

//UPDATING INFO AND RETURNING UPDATED USER
app.put('/info', (req, res) => { update.updateInfoHandler(req, res, db) })


/*************************** IMAGE UPLOAD END POINTS ************************************/


//PROFILE IMAGE UPLOAD END POINT
app.post('/profile-upload', (req, res) => { uploads.uploadProfileHandler(req, res, cloudinary, db) });

//IMAGE 1 UPLOAD END POINT
app.post('/image1-upload', (req, res) => { uploads.uploadImage1Handler(req, res, cloudinary, db) });

//IMAGE 2 UPLOAD END POINT
app.post('/image2-upload', (req, res) => { uploads.uploadImage2Handler(req, res, cloudinary, db) });

//IMAGE 3 UPLOAD END POINT
app.post('/image3-upload', (req, res) => { uploads.uploadImage3Handler(req, res, cloudinary, db) });

//IMAGE 4 UPLOAD END POINT
app.post('/image4-upload', (req, res) => { uploads.uploadImage4Handler(req, res, cloudinary, db) });


/************************************** FETCH DATA END POINTS **************************/


//SETTING LIKES TO NOTIFICATIONS
app.get('/getlikes', (req, res) => { getdata.getLikesHandler(req, res, db) });

//SETTING MATCHES TO NOTIFICATIONS
app.get('/getmatches', (req, res) => { getdata.getMatchesHandler(req, res, db) });

//SETTING USERS ON DASHBOARD
app.get('/', (req, res) => { getdata.getUsersHandler(req, res, db) });

//SETTING VIEWS TO NOTIFICATIONS
app.get('/getviews', (req, res) => { getdata.getViewsHandler(req, res, db) });

//SETTING CHATS TO CHATS
app.get('/getchats', (req, res) => { getdata.getChatsHandler(req, res, db) });


/****************************** MESSAGES END POINTS *************************/

//INSERT CHAT MESSAGES TO DATABASE
app.post('/sendmessage', (req, res) => { messages.handleMessages(req, res, db) });
 

/******************************** USER INTERACTION END POINTS ********************/

//VIEWING A USER
app.post('/view', (req, res) => { interactions.handleViews(req, res, db) });

//LIKING A USER
app.post('/like', (req, res) => { interactions.handleLikes(req, res, db) });

//UNLIKING USER
app.post('/unlike', (req, res) => { interactions.handleUnlikes(req, res, db) });

/***********************************************************************************/

app.listen(port, () => console.log(`matcha app is listening on port: ${port}`));
