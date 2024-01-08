const { count } = require('console');
const fs = require('fs');

fs.readFile('file.json', 'utf8', (err, data) => {
    JSON.parse(data);
    console.log(data);
})
