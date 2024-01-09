const fs = require('fs');

const addJson = {
    id: 1,
    first_name: 'Serik',
    last_name: 'KHs',
    email: 'kdaysh4@naver.com',
    gender: 'Male',
    ip_address: '255.126.120.70'
};

const path = 'MOCK_DATA.json';
fs.writeFile(path, JSON.stringify(addJson,), 'utf8', (err, data) => {

})
