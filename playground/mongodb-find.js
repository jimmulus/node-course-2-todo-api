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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5966820b72b23228e54432d2')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // }); 

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch count todos', err);
    // }); 

    db.collection('Users').find({name: 'Jim'}).toArray().then((jims) => {
        console.log('All Jims');
        console.log(JSON.stringify(jims, undefined, 2));
    }, (err) => {
        console.log('Unable to find all Jims');
    });

    //db.close();
});

