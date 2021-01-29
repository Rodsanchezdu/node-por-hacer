const argv = require('yargs')
    .command(
        'crear',
        'Crea un elemento por hacer', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripción de la tarea por hacer'
            }
        }
    )
    .command(
        'actualizar',
        'Actualiza el estado completado de un tarea', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripción de la tarea por hacer'
            },
            completado: {
                default: true,
                alias: 'c',
                desc: 'Marca como completador la tarea por hacer'
            }
        }
    )
    .command(
        'borrar',
        'Borra un elemento', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripción de la tarea por hacer'
            }
        }
    )
    .help()
    .argv;

module.exports = {
    argv
};