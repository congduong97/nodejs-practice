const mongoose = require('mongoose');

//Connect to mongodb
mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true });

mongoose.connection.once('open',() => {
    console.log("We are connected !!!");
}).on('error',(error) => {
    console.log("Connect is error: ",error);
})