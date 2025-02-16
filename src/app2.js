// ye node se server bnanae ke liye h
// http ko install kre  npm install http
// run krn k liye src pr khadeHokar --> node app.js



// http module ko require karna
const http = require('http');

// Server create karna
const server = http.createServer((req, res) => {
    // res.statusCode = 200; // HTTP status code (OK)
    // res.setHeader('Content-Type', 'text/plain'); // Response header

    res.end('Hello, world!'); // Response body
});

// Server ko listen karwana ek port pe
server.listen(7000, 'localhost', () => {
    console.log('Server running at 7000');
});
