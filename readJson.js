const readFile = () => {
    const fs = require('fs');

    fs.readFile('MOCK_DATA .json', 'utf8', (err, data) => {
        console.log(JSON.parse(data));
    })
}

const create = (data) => {
    fs.readFile('MOCK_DATA.json', 'utf8', (err, json) => {
        const previousData = JSON.parse(json);
        previousData.push(data);
        fs.writeFile('MOCK_DATA.json', JSON.stringify(previousData))
    })
}

