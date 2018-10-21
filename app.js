//requireds
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => console.log(colors.green('Archivo creado:'), colors.red(resp)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}