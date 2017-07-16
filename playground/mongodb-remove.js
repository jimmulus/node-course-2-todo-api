const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Delete all todos
// Todo.remove({}).then((result) => {
//     console.log(result);
// });


// Delete by
// Todo.findOneAndRemove({
//     _id:'596b2681e6c3501100418db5'
// }).then((todo) =>{
//     console.log(todo);
// });


// Delete by id
Todo.findByIdAndRemove('596b2681e6c3501100418db5').then((todo) => {
    console.log(todo);
});