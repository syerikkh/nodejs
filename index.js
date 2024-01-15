const http = require('http');
const fs = require('fs');
const { json } = require('express');

// const PORT = 8080;

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/users') {
//         readUsers(res);
//     } else if (url === '/products') {
//         readProducts(res);
//     } else if (url === '/cars') {
//         readCars(res);
//     } else if (url === '/') {
//         readUsers(res);
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Error Not Found');
//     }


// }).listen(PORT);

const readUsers = () => {
    const data = fs.readFileSync('USERS.json', 'utf8',)
    const users = JSON.parse(data);
    return users
};

const readProducts = () => {
    try {
        const data = fs.readFileSync('PRODUCTS.json', 'utf8')
        const products = JSON.parse(data);
        return products
    } catch (err) {
        console.error(err);
        return null
    }
}

const readCars = () => {
    const data = fs.readFileSync('CARS.json', 'utf8');
    const cars = JSON.parse(data)
    return cars

}

const createUser = (newUser) => {
    const data = fs.readFileSync('USERS.json', 'utf8')
    const users = JSON.parse(data);

    users.push(newUser)

    fs.writeFileSync('USERS.json', JSON.stringify(users))
}

const updateUser = () => {
    const data = fs.readFileSync('USERS.json', 'utf8')
    const users = JSON.parse(data);

}
// console.log("Application running at: http://localhost:" + PORT)

// exports.readUsers = readUsers;

module.exports = { readUsers, readProducts, readCars, createUser }
