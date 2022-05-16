const fs = require('fs');
const col = require('colors');

const crearArchivo1 = ( base = 5 ) => {

    

    let salida ='';

    for (i=1;i<11;i++){
        salida += `${base} x ${i} = ${base * i } \n`;
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log('Hecho');
};


const crearArchivo = async ( base, l , hasta) =>{
    let nombreArchivo = `./salida/tabla-${base}.txt`;
    let salida ='';
    try{
        for (i=1;i<hasta+1;i++){
            salida += `${base} x ${i} = ${base * i } \n`;
        }
        if (l) {
            console.log(col.bgRed('=================='));
            console.log(`   Tabla del ${base}`);
            console.log(col.bgRed('=================='));
            console.log(col.blue(salida));
        }
        fs.writeFileSync(nombreArchivo, salida);
       return nombreArchivo;
     } catch (error){
         throw error;
     }
}

module.exports = {
    crearArchivo
};