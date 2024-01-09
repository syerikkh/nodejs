const http = require('http');

const PORT = 8080;

http.createServer((req, res) => {
    res.write("Hello World");
    res.end();
}).listen(PORT);

console.log("Application running at: http://localhost:" + PORT);