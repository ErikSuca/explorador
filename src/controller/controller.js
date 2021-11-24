const process = require("../model/home")
module.exports = {
    datos: (req, res) => {
        process.guardar(req.body);
        res.send(req.body);
    },
    index: (req, res) => {

        return res.render('datos',{
            datos: process.readDato()
        });
    }
}