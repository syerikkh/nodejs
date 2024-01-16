const { Router } = require("express");
const { readUsers } = require(".");

const express = requie('express');

const userRouter = express.Router();

const middleware = (req, res, next) => {
    const PASS = '12345';
    if (req.query.pass === PASS) next();
    res.status(403).json({ message: 'failed' });
}

userRouter.get('/users', middleware, (req, res) => {
    const users = readUsers();
    res.json(users)
}).post('/users', (req, res) => {
    const user = createUser({
        "id": 6,
        "first_name": "Serik",
        "last_name": "KH",
        "email": "cstrutton3@technorati.com",
        "gender": "Male",
        "ip_address": "6.177.254.244"
    });
    res.send(user);
})
