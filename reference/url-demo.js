const url = require('url');

const myUrl = new URL('https://www.youtube.com:80/watch?v=fBNz5xF-Kx4');

// Serialized url
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Hostname(dose not port)
console.log(myUrl.hostname);


// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('id',12);
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));

