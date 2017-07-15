const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://todoApp:todo123@ds159892.mlab.com:59892/todoapp');


module.exports = {mongoose};
