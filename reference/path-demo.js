const path = require('path');

// Base path

console.log(path.basename(__filename));


// Directory name

console.log(path.dirname(__filename));

// File extension

console.log(path.extname(__filename));


// Create path oject

console.log(path.parse(__filename));

console.log(__dirname);
