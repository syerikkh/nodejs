
const fs = require('fs');

fs.readFile('MOCK_DATA .json', 'utf8', (err, data) => {
    console.log(JSON.parse(data));
})

