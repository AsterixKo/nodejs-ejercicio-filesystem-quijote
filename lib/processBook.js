const fs = require('fs');

const libreria = {
    processBook: function () {
        return fs.readFileSync('./quijote.txt', 'utf-8');
    },
    countSancho: function () {
        const book = libreria.processBook();
        // console.log(book);
        var count = (book.match(/Sancho/g) || []).length;
        const text = `El número de ocurrencias de la palabra Sancho es: ${count}`;
        console.log(text);
        return text;
    }
};

// libreria.countSancho();

module.exports = libreria;