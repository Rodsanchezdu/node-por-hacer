// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const { crearUnPorHacer, getListado, actualizarEstado, borrar } = require('./por-hacer/por-hacer');

var colors = require('colors');
// console.log(argv);

let comando = argv._[0];


switch (comando) {
    case 'crear':
        console.log(crearUnPorHacer(argv.descripcion));
        break;
    case 'listar':
        let listado = getListado();
        console.log(getListado());
        for (let tarea of listado) {
            console.log('+++++++POR HACER+++++++'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('++++++++++++++++++++++'.green);
        }
        break;
    case 'actualizar':
        console.log('Actualizo una tarea?');
        let actualizado = actualizarEstado(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log(argv);
        let borrado = borrar(argv.descripcion);
        console.log('borro el elemento?', borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}