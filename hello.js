// app.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

server.listen(3009, () => {
    console.log('Server running at http://35.154.47.14:3009/');
});
