const http = require('http');

http.createServer((req,res)=>{
    //Write respone
    res.write('Hello client');
    res.end();
}).listen(5000,()=>console.log('Server is running...'));
