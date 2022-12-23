const fs = require('fs');
const { resolve } = require('path');

const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        
    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida = salida += `${base} x ${i} = ${base * i}\n`;
            consola = consola += `${base} ${'x'.red} ${i} = ${base * i}\n`;
        }
    
        if ( listar ) {
            console.log('========================='.blue)
            console.log('tabla del:'.yellow, base)
            console.log('========================='.blue)

            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}