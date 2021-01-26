const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');


let listadoPorHacer = [];

let guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            rejects(err);
        } else {
            resolve(`Guardado el por hacer`);
        }
    });

}

const crearUnPorHacer = (descripcion) => {

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}


module.exports = {
    crearUnPorHacer
}