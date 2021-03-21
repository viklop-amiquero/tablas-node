const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {

    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(a => console.log(`Archivo creado ${a}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(a => console.log(`Archivo creado ${a}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}