const fs = require('fs');
const saveResultModule = require('./saveResult');

const libreria = {
    countSancho: function () {
        fs.readFile('./quijote.txt', 'utf-8', (err, data) => {
            if (err) throw err;
            book = data
            // console.log('El contenido del archivo es:', data);
            //https://regex101.com/
            var count = (book.match(/sancho/gi) || []).length;
            const text = `El número de ocurrencias de la palabra Sancho es: ${count}`;
            console.log(text);
            saveResultModule.saveResult(text);
        });
    }
};

// const libreria = {
//     processBook: function () {
//         return fs.readFileSync('./quijote.txt', 'utf-8');
//     },
//     countSancho: function () {
//         const book = libreria.processBook();
//         // console.log(book);
//         var count = (book.match(/Sancho/g) || []).length;
//         const text = `El número de ocurrencias de la palabra Sancho es: ${count}`;
//         console.log(text);
//         return text;
//     }
// };

// libreria.countSancho();

module.exports = libreria;