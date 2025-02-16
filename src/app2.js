// ye node se server bnanae ke liye h
// http ko install kre  npm install http
// run krn k liye src pr khadeHokar --> node app.js



// http module ko require karna
const http = require('http');

// Server create karna
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code (OK)  that req succesfully serve hogye h

    res.setHeader('Content-Type', 'text/plain'); // Response header browser ko btarha
    //  h send kiya hua data kis format main h

    res.end('Hello, world!'); // Response body server ke trf se poora hogya ab response send krdo 
    
});

// Server ko listen karwana ek port pe
server.listen(7000, 'localhost', () => {
    console.log('Server running at 7000');
});
