// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const { crearUnPorHacer } = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];


switch (comando) {
    case 'crear':
        console.log(crearUnPorHacer(argv.descripcion));
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        console.log('Actualiza auna tarea');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}