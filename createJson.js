const express = require('express');

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.send("HELlo World")
});
app.get('/express', (req, res) => {
    res.send("HELlo express")
});
app.post('/express', (req, res) => {
    res.send("Success")
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port)
})
