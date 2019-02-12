// console.log("Hello world");
// const Person = require("./person");

// const p = new Person("Cong", 22);
// p.greeting();

// console.log(__dirname);
// console.log(__filename);

// const Logger = require('./reference/logger');
// const logger = new Logger();

// logger.on('message', data => console.log('Call listener',data));

// logger.log("Hello world!");
// logger.log("im try");

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url === '/' ){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content) => {
    //         if(err) throw err;
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.end(content);
    //     })
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200,{'Content-Type': 'text/html'});
    //         res.end(content);
    //     })
    // }
    // if(req.url === '/api/users'){
    //     const users = [
    //         {name:'Json Statham', age: 50, job: 'actor'},
    //         {name:'Matrix Martin', age: 26, job: 'DJ'}

    //     ];
    //     // res.writeHead(200, {'Content-Type': 'appication/json'});
    //     res.end(JSON.stringify(users));
    // }

    //Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    console.log(filePath);
    

    // Extend of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'appication/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        // if(err){
        //     if(err.code == 'ENOENT'){
        //         // Page not found
        //         fs.readFile(path.join(__dirname,'public','404.html'),(err,content) => {
        //             res.writeHead(200, {'Content-Type':'text/html'});
        //             res.end(content,'utf8');
        //         })
        //     }
        //     else{
        //         // Some server error
        //         res.writeHead(5000);
        //         res.end(`Server Error:${err.code}`);
        //     }
        // }
        //else{
            //Success
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content,'utf8');
       // }
    })

})

server.listen(8000, () => console.log('Server is running on port 8000...'));
