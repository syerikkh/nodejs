const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/users') {
        readUsers(res);
    } else if (url === '/products') {
        readProducts(res);
    } else if (url === '/cars') {
        readCars(res);
    } else if (url === '/') {
        readUsers(res);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error Not Found');
    }


}).listen(PORT);

const readUsers = (res) => {
    fs.readFile('USERS.json', 'utf8', (err, data) => {
        if (err) {
            return console.error(err);
        }
        const users = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    })
};

const readProducts = (res) => {
    fs.readFile('PRODUCTS.json', 'utf8', (err, data) => {
        if (err) {
            return console.error(err)
        }
        const products = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    })
}
const readCars = (res) => {
    fs.readFile('CARS.json', 'utf8', (err, data) => {
        if (err) {
            return console.error(err)
        }
        const cars = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(cars));
    })
}
console.log("Application running at: http://localhost:" + PORT)

