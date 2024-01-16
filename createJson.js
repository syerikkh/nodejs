const express = require('express');
const port = 8000;
const app = express();
const multer = require('multer');
const cors = require('cors');
const { readUsers, readProducts, readCars, createUser } = require('./index.js')
// const readProducts = require('./index.js');



app.use(cors());


const upload = multer({ dest: 'uploads/' })

const PASS = '12345';
app.use(express.json());
app.use('/users', (req, res, next) => {
    console.log('jajjaja');
    console.log(req.body)
    if (req.query.secret === PASS) next();
    res.status(403).json({ message: 'failed' })
})
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

app.post('/uploads', upload.single("avatar"), (req, res) => {
    try {
        console.log('files', req.file)
        return res.status(200).json({ message: 'Successfully uploaded' })
    } catch (error) {
        return res.status(400).json({ message: 'Failed' })
    }
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port)
})
