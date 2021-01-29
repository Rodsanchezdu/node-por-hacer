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

};

cargarDB = () => {

    try {
        //deja de estar vacío y se le pone todo lo que traiga el require. 
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};




const crearUnPorHacer = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}

const getListado = () => {
    return require('../db/data.json');
}

const actualizarEstado = (descripcion, estado = true) => {
    console.log('entro en actualziar estaod'.red);
    console.log(descripcion);
    console.log(estado);
    cargarDB(); //se trae la base de datos a listadoPorHacer
    let index = listadoPorHacer.findIndex((itemOfListado) => {
        //recordar que saca el indice cuando se retorne true acá
        return itemOfListado.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = estado;
        guardarDB(); //escribe el dato en la base de datos
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        //el objetivo es llenar en nuevo listado con todo lo que
        //no no tiene esa descripción, así se borra.
        return tarea.descripcion !== descripcion;
    });

    //si las longitudes son todas iguales es porque no encontro 
    //nada y el filtro trajo todo igual
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;

    }

};


module.exports = {
    crearUnPorHacer,
    getListado,
    actualizarEstado,
    borrar
}