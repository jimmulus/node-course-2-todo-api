const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'j-dj@live.nl',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    id: userTwoId,
    email: 'j-dj2@live.nl',
    password: 'userTwoPass'
}];


const todos = [{
    _id: new ObjectID(),
    text: 'Some todo 1'
},{
    _id: new ObjectID(),
    text: 'some todo 2',
    completed: true,
    completedAt: 333
},{
    _id: new ObjectID(),
    text: 'some todo 3'
}];


const populateTodos = (done) => {    
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove ({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};