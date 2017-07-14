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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('596690c972b23228e5443713')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59667bfa146ec72254494ab7')
    },{
        $set: {
            name: 'Jim'
        },
        $inc: {
            age: 24
        },
    }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });


    //db.close();
});

