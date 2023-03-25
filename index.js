// constante Backend:
const { time, timeStamp } = require('console');
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
// constante frontend:
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
// code serveur:
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', __dirname + "/views"); //Quel est le dossier dans lequel on range les views
app.set('view engine', 'mustache'); // Variable de config.
app.engine('mustache', mustacheExpress());// Quest-ce que Mustache ? => instance de mustacheExpress

app.get('/', function (request, reponse) {
    reponse.render('index', {
        pageTitle: "rentrer votre nom"
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})