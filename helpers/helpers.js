const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    console.log('Texto: ' + texto); //danIel BaYona

    let palabras = texto.split(" ");

    console.log('Palabras: ' + palabras); //danIel,BaYona

    palabras.forEach((palabra, idx) => {
        console.log('Palabra --> ' + palabra + ' - Idx --> ' + idx);
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    console.log('Palabras: ' + palabras); //danIel,BaYona

    console.log('Join: ' + palabras.join(' ')); //Daniel Bayona

    return palabras.join(' ');
})