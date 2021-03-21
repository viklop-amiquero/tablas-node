//requieres
const fs = require('fs');
const { resolve } = require('path');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('El valor ingresado no es un número');
        }

        let leerData = `Tabla del ${base} rango: 1 - ${limite}\n-----------------------------\n`;

        for (i = 1; i <= limite; i++) {
            leerData += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, leerData, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
            // console.log(`El archivo tabla-${base} ha sido creado`);
        });

    });
}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es número`);
            return;
        }
        let leerData = '';

        for (i = 1; i <= 10; i++) {
            leerData += `${ base } * ${ i } = ${ base * i }\n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, leerData, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
            // console.log(`El archivo tabla-${base} ha sido creado`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}