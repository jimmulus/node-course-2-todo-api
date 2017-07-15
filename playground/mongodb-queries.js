const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



var userId = '596880523e5debec20bc72f3'
var id = '59692bac4b911dc810ccdf17';

if(!ObjectID.isValid(id)){
    console.log('ID is not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos found:', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo found:', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Unable to find id');
    }
    console.log('Todo by Id found:', todo);
}).catch((e) => {
    console.log(e);
});

User.findById(userId).then((user) => {
    if(!user) {
        console.log('User not found');
    }
    console.log('User found:', user);
},(e) => {
    console.log(e);
});
