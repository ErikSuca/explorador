const express = require('express');
const app = express();
const path = require('path');

// server
app.listen(process.env.PORT || 8080, () => console.log("Server on http://localhost:8080"));

app.use(express.urlencoded( { extended: false } ));
app.use(express.json());

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

//carpeta publica
app.use(express.static(path.resolve(__dirname, '../public')));


//rutas
const home = require('./router/home');
app.use('/', home);
