const process = require("../model/home")
module.exports = {
    datos: (req, res) => {
        process.guardar(req.body);
        res.send(req.body);
    },
    datosGET: (req, res) => {
        console.log(req.query);
        process.guardar(req.query);
        res.send(req.query);
    },
    index: (req, res) => {

        return res.render('datos',{
            datos: process.readDato()
        });
    }
}