const express = require('express');
const port = 8000;
const app = express();
const cors = require('cors');
const { readUsers, readProducts, readCars, createUser } = require('./index.js')
// const readProducts = require('./index.js');


app.use(cors());

app.get('/users', (req, res) => {
    const users = readUsers();
    res.send(users);
});
app.get('/products', (req, res) => {
    const products = readProducts();
    res.send(products);
});
app.get('/cars', (req, res) => {
    const cars = readCars();
    res.send(cars);
});

app.post('/users', (req, res) => {
    const user = createUser({
        "id": 6,
        "first_name": "Serik",
        "last_name": "KH",
        "email": "cstrutton3@technorati.com",
        "gender": "Male",
        "ip_address": "6.177.254.244"
    });
    res.send(user);
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port)
})
