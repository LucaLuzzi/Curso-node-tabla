import { crearArchivoTabla } from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';


console.clear()

const { base, listar, hasta } = argv;
crearArchivoTabla(base, listar, hasta)
    .then(response => {
        console.log(response, "Creada");
    })
    .catch((error) => console.log('error: ' + error));