//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// ObjectID aanmaken met gebruik van destructuring
// var obj = new ObjectID();
// console.log(obj);


// Voorbeeld ES6 destructuring
// var user = {name: 'Jim', age: 36};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Conected to MongoDB server');
// db.collection('Todos').insertOne({
//     text:'Something to do',
//     completed: false
// }, (err, result) => {
//     if(err){
//         return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
// });


// db.collection('Users').insertOne({
//     name: 'Jim',
//     age: 36,
//     location: 'Den Haag'
// }, (err, result) => {
//     if(err) {
//         return console.log('Unable to insert user', err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
// });

db.close();
});

