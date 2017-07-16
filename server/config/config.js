var env = process.env.NODE_ENV || 'development';

process.env.MONGO_URI = 'mongodb://todoApp:todo123@ds159892.mlab.com:59892/todoapp';

if(env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGO_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test'){
    process.env.PORT = 3000;
    process.env.MONGO_URI = 'mongodb://localhost:27017/TodoAppTest';
}