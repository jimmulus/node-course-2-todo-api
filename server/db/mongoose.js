const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);
console.log(process.env.MONGODB_URI);

module.exports = {mongoose};
