const users = [];

const addUser = ({ id, firstname, room }) => {
    const user = { id, firstname, room };
    users.push(user);
    return { user };
}

const getUser = (id) => users.find((user) => user.id === id);

module.exports = {
    addUser,
    getUser
}