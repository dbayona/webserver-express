const express = require('express')
const app = express()
const hbs = require('hbs');

require('./helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'danIel bAYona',
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

/*app.get('/', (req, res) => {

    let salida = {
        nombre: 'Daniel',
        edad: 34,
        url: req.url
    }

    res.send(salida);
});*/

/*app.get('/data', (req, res) => {
    res.send('Hola Data');
});*/



app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));