const fs = require('fs');

const libreria = {
    saveResult: function (data) {
        fs.writeFile('./resultado.txt', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
};

module.exports = libreria;