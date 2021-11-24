const fs = require('fs');
const path = require('path');

module.exports = {
    guardar: (dato) => {
        let directory = path.resolve(__dirname, "../data/datos.json")
        let registro = fs.readFileSync( directory, {encoding: 'utf-8'})
        registro = JSON.parse(registro);
        if(dato.temperatura){
            registro.temperatura = dato.temperatura
        }
        if(dato.humedad){
            registro.humedad = dato.humedad
        }
        fs.writeFileSync(directory, JSON.stringify(registro));
    },
    readDato: ()=>{
        let directory = path.resolve(__dirname, "../data/datos.json")
        let registro = fs.readFileSync( directory, {encoding: 'utf-8'})
        registro = JSON.parse(registro)
        return registro
    }
}