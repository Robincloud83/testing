// app.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

server.listen(3009, () => {
    console.log('Server running at http://50.16.75.217:3009/');
});
