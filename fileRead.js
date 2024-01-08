const fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err, data = 1) {
    console.log(`Ta ${data} udaa unshsan baina`);

    fs.writeFile('input.txt', String(Number(data) + 1), function (err) {
        if (err) {
            return console.error(err);
        }
    })
})


