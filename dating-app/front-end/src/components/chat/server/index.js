const express = require('express');
const socketio = require('socket.io');
const http = require('http');


const router = require('./router');
const { addUser, getUser } = require('./users');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    //console.log('New connection!!');

    socket.on('join', ({ firstname, room }, callback) => {
        const { user } = addUser({ id: socket.id, firstname, room });
        socket.join(user.room);
        callback();
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.firstname, text: message })
        callback();
    })

    socket.on('disconnect', () => {
        //console.log('User left');
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));