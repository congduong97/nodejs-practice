const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
})

app.get('/about',(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Server is running on port ${port} ...`);  
})

