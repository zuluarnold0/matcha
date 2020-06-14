const express = require('express');
//const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt-nodejs');
//const cors = require('cors');

const knex = require('knex')({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : '',
        password : 'rootadmin',
        database : 'matcha'
    }
});

console.log(knex.select('*').from('users'));

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`matcha app is listening at http://localhost:${port}`));